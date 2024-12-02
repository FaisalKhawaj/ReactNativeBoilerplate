import React from 'react';
import {CustomButton, SafeAreaWrapper, ThemedText} from '@components';
import {useTheme} from '@context';
import {styles} from './styles';

export const Login = () => {
  const {colors, toggleTheme} = useTheme();

  return (
    <SafeAreaWrapper>
      <ThemedText color={colors.headingTitle} style={styles.headingText}>
        Login
      </ThemedText>

      <CustomButton title="ToggleTheme" handleClick={toggleTheme} />
    </SafeAreaWrapper>
  );
};
