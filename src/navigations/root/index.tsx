import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from '../auth';

export const Root = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
