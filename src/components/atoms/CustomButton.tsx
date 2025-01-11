import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '@colors';
import {fonts} from '../../assets/fonts/index';
import {useTheme} from '@context';
import {ThemedText} from './ThemedText';

export enum ButtonVariation {
  default = 'default',
  secondary = 'secondary',
  destructive = 'destructive',
  success = 'success',
}

type ButtonProps = {
  title?: string;
  handleClick: any;
  textSize?: number;
  textColor?: string | any;
  disabled?: boolean;
  btnWidth?: any;
  borderColor?: any;
  variation?: ButtonVariation;
  style?: any;
};

export const CustomButton = ({
  title,
  handleClick = () => {},
  textSize = 16,
  disabled = false,
  // btnBg = ,
  btnWidth = '90%',
  borderColor,
  variation = ButtonVariation.default,
}: ButtonProps) => {
  // const Icon = SVGs[iconName];
  const {colors} = useTheme();
  let buttonBackgroundColor = disabled
    ? colors.disabled
    : buttonColors[variation];

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={handleClick}
        style={[
          styles.buttonWrapper,
          {
            borderColor: borderColor ? borderColor : colors.primaryButton,
            width: btnWidth,
            backgroundColor: buttonBackgroundColor,
          },
        ]}>
        <ThemedText
          color={colors.headingTitle}
          fontSize={textSize}
          style={styles.textStyle}>
          {title}
        </ThemedText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 5,
    paddingVertical: 13,
    borderWidth: 1,
    height: 52,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: Colors.light.background,
    fontFamily: fonts.primary.medium,
  },
  simpleTextStyle: {
    textAlign: 'center',
    marginLeft: 10,
    color: Colors.light.background,
    fontFamily: fonts.primary.medium,
  },
  rightIconButton: {
    height: 35,
    width: 35,
    position: 'absolute',
    right: 10,
    borderRadius: 12,
    backgroundColor: Colors.light.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtn: {
    backgroundColor: Colors.light.inputBg,
    flex: 1,
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const buttonColors: {[key in ButtonVariation]: string} = {
  default: 'blue',
  secondary: 'pink',
  destructive: 'red',
  success: 'green',
};
