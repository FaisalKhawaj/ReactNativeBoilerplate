import {useNavigation} from '@react-navigation/native';
import TokenStorage from '../services/tokenStorage';
// import {AppScreenProps} from '@navigation';

export const useLogout = () => {
  const navigation: any = useNavigation();

  const logout = async () => {
    const success = await TokenStorage.removeToken();

    if (success) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });
    }
  };

  return {logout};
};
