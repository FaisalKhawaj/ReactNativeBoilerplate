// TokenStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

class TokenStorage {
  // Key to store the token
  static TOKEN_KEY = 'user_token';

  // Save the token to storage
  static async storeToken(token: string) {
    try {
      await AsyncStorage.setItem(TokenStorage.TOKEN_KEY, token);
      return true;
    } catch (error) {
      console.error('Error storing the auth token', error);
      return false;
    }
  }

  // Retrieve the token from storage
  static async getToken() {
    try {
      const token = await AsyncStorage.getItem(TokenStorage.TOKEN_KEY);
      return token;
    } catch (error) {
      console.error('Error retrieving the auth token', error);
      return null;
    }
  }

  // Remove the token from storage
  static async removeToken() {
    try {
      await AsyncStorage.removeItem(TokenStorage.TOKEN_KEY);
      return true;
    } catch (error) {
      console.error('Error removing the auth token', error);
      return false;
    }
  }
}

export default TokenStorage;
