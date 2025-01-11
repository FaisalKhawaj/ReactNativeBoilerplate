import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTheme} from '@context';
import {RFValue} from 'react-native-responsive-fontsize';

interface ThemeTextProps extends TextProps {
  color?: string;
  fontSize?: string | number | any;
}

export const ThemedTextComponent: React.FC<ThemeTextProps> = ({
  style,
  fontSize,
  ...props
}) => {
  const {colors}: any = useTheme();
  return (
    <Text
      // {...(onPress && {onPress})}
      style={[
        {color: props?.color ?? colors.black},
        {fontSize: fontSize ?? RFValue(12)},

        style,
      ]}
      {...props}
    />
  );
};

export const ThemedText = React.memo(ThemedTextComponent);
