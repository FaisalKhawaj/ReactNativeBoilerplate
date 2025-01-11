import React from 'react';
import {ButtonVariation, CustomButton, SafeAreaWrapper, Spacing, ThemedText} from '@components';
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
      <Spacing marginTop={20} />

      <CustomButton
        title={translate('toggle_theme')}
        handleClick={toggleTheme}
      />
<Spacing marginTop={20} />
<CustomButton
        title={translate('toggle_theme')}
        handleClick={toggleTheme}
        variation={ButtonVariation.destructive}
      />

<Spacing marginTop={20} />
<CustomButton
        title={translate('toggle_theme')}
        handleClick={toggleTheme}
        variation={ButtonVariation.success}
      />
    </SafeAreaWrapper>
  );
};
