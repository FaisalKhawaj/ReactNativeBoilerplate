import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<any>;
  Investments: undefined;
  Loans: undefined;
  AddPaymentDetails: {type: 'bankCard' | 'bankAccount'};
};
