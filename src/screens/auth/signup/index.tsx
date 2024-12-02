import React from 'react';
import {SafeAreaWrapper, ThemedText} from '@components';
import {useTheme} from '@context';
import {styles} from './styles';

export const Signup = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaWrapper>
      <ThemedText color={colors.headingTitle} style={styles.headingText}>
        Signup
      </ThemedText>
    </SafeAreaWrapper>
  );
};
