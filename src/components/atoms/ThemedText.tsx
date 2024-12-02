import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTheme} from '@context';

interface ThemeTextProps extends TextProps {
  color?: string; // Custom prop for text color
}

export const ThemedText: React.FC<ThemeTextProps> = ({style, ...props}) => {
  const {colors} = useTheme();

  return (
    <Text
      style={[{color: props?.color ?? colors.headingTitle}, style]}
      {...props}
    />
  );
};
