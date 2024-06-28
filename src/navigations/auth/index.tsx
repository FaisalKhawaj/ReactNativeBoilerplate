import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native'; // Add this line
import {Login, Signup} from '@screens';

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, RouteName>,
    StackNavigationProp<AuthStackParamList, keyof AuthStackParamList>
  >;
  route: RouteProp<AuthStackParamList, RouteName>;
};

type AuthStackParamList = {
  // Account: undefined;

  Login: undefined;

  Signup: undefined;

  ParentalGate: {nextScreen: keyof AuthStackParamList};
};
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
