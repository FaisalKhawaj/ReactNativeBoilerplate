import {useQuery} from '@tanstack/react-query';
import {apiUrls} from 'src/services/urls';
import api from '../api';

export interface ProfileData {
  email: string;
  first_name: string;
  kids: Kid[];
  // subscriptions: SubscriptionResponse[]
}

export interface Kid {
  id: number;
  name: string;
  age: number;
}

const getProfile = async (): Promise<ProfileData> => {
  const {data} = await api.get<ProfileData>(apiUrls.userProfile);
  return data;
};

export const useGetProfile = () => {
  return useQuery<ProfileData, Error>({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  });
};
