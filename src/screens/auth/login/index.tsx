import React from 'react';
import {CustomButton, SafeAreaWrapper, ThemedText} from '@components';
import {useTheme} from '@context';
import {styles} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {translate} from '@locales';

export const Login = () => {
  const {colors, toggleTheme} = useTheme();

  return (
    <SafeAreaWrapper>
      <ThemedText
        fontSize={RFValue(23)}
        color={colors.headingTitle}
        style={styles.headingText}>
        Login {translate('login')}
      </ThemedText>

      <CustomButton
        title={translate('toggle_theme')}
        handleClick={toggleTheme}
      />
    </SafeAreaWrapper>
  );
};
