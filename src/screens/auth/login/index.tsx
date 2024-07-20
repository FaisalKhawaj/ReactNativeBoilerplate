import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useIntl} from '@context';
import {styles} from './styles';

export const Login = () => {
  const {intl} = useIntl();

  return (
    <SafeAreaView style={styles.screenWrap}>
      <Text style={styles.headingText}>
        {intl.formatMessage({id: 'signinScreen.header'})}
      </Text>
    </SafeAreaView>
  );
};
