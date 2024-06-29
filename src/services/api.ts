import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
// import { showToast } from '../helpers';
// import AsyncHelper from '../helpers/asyncHelper';
// import * as RootNavigation from '../navigation/NavigationService';
// import { QA } from './urls';

const QA = ''; // Set your QA base URL

type ApiResponse<T> = Promise<AxiosResponse<T>>;

class Api {
  private client: AxiosInstance;
  private isRefreshing: boolean;
  private failedQueue: Array<{
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
  }>;

  constructor() {
    this.client = axios.create({
      baseURL: QA,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.isRefreshing = false;
    this.failedQueue = [];

    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    this.client.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token = '';
        // const token = await AsyncHelper.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        }
        return config;
      },
      error => Promise.reject(error),
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({resolve, reject});
            })
              .then(token => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                return axios(originalRequest);
              })
              .catch(err => Promise.reject(err));
          }

          originalRequest._retry = true;
          this.isRefreshing = true;
          const refreshToken = '';
          // const refreshToken = await AsyncHelper.getRefreshToken();
          return this.refreshToken(refreshToken)
            .then(newToken => {
              // AsyncHelper.setToken(newToken);
              this.client.defaults.headers.Authorization = `Bearer ${newToken}`;
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
              }
              this.processQueue(null, newToken);
              return axios(originalRequest);
            })
            .catch(err => {
              this.processQueue(err, null);
              this.logout();
              // RootNavigation.resetActions('WelcomeScreen');
              return Promise.reject(err);
            })
            .finally(() => {
              this.isRefreshing = false;
            });
        }

        // showToast(error.response?.data?.message || 'An error occurred');
        return Promise.reject(error);
      },
    );
  }

  private processQueue(error: Error | null, token: string | null = null) {
    this.failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    this.failedQueue = [];
  }

  private async refreshToken(refreshToken: string): Promise<string> {
    const response: AxiosResponse<{accessToken: string}> = await axios.post(
      `${QA}/auth/refresh-token`,
      {
        refreshToken,
      },
    );
    return response.data.accessToken;
  }

  private async logout(): Promise<void> {
    // await AsyncHelper.removeToken();
    // await AsyncHelper.removeRefreshToken();
    // await AsyncHelper.removeFCMToken();
    // await AsyncHelper.removeUserId();
  }

  private async addAuthToken(config: InternalAxiosRequestConfig) {
    const token = '';
    // const token = await AsyncHelper.getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
  }

  async get<T>(route: string, sendAuthToken = false): ApiResponse<T> {
    const config: InternalAxiosRequestConfig = {headers: {}};
    if (sendAuthToken) {
      await this.addAuthToken(config);
    }
    return this.client.get(route, config);
  }

  async post<T>(
    route: string,
    params: any,
    sendAuthToken = false,
    multipart = false,
  ): ApiResponse<T> {
    const config: InternalAxiosRequestConfig = {
      headers: multipart ? {'Content-Type': 'multipart/form-data'} : {},
    };
    if (sendAuthToken) {
      await this.addAuthToken(config);
    }
    return this.client.post(route, params, config);
  }

  async put<T>(
    route: string,
    params: any,
    sendAuthToken = false,
  ): ApiResponse<T> {
    const config: InternalAxiosRequestConfig = {headers: {}};
    if (sendAuthToken) {
      await this.addAuthToken(config);
    }
    return this.client.put(route, params, config);
  }

  async delete<T>(
    route: string,
    params: any,
    sendAuthToken = false,
  ): ApiResponse<T> {
    const config: InternalAxiosRequestConfig = {
      data: params,
      headers: {},
    };
    if (sendAuthToken) {
      await this.addAuthToken(config);
    }
    return this.client.delete(route, config);
  }
}

export default new Api();
