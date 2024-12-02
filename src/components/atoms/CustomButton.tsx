import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '@colors';
import {fonts} from '../../assets/fonts/index';
import {useTheme} from '@context';

type ButtonProps = {
  title?: string;
  handleClick: any;
  textSize?: number;
  textColor?: string | any;
  disabled?: boolean;

  btnWidth?: any;
  borderColor?: any;

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
}: ButtonProps) => {
  // const Icon = SVGs[iconName];
  const {colors} = useTheme();
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
            backgroundColor: disabled ? colors.disabled : colors.primaryButton,
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {
              color: colors.headingTitle,
              fontSize: textSize,
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    // paddingHorizontal: 10,
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
