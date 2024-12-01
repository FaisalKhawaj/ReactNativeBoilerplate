import React from 'react';
import {Text} from 'react-native';
import {useIntl} from '@context';
import {styles} from './styles';
import {SafeAreaWrapper} from 'src/components/templates';

export const Login = () => {
  const {intl} = useIntl();

  return (
    <SafeAreaWrapper>
      <Text style={styles.headingText}>
        {intl.formatMessage({id: 'signinScreen.header'})}
      </Text>
    </SafeAreaWrapper>
  );
};
