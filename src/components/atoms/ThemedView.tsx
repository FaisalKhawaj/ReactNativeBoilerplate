import React from 'react';
import {type ViewProps, View} from 'react-native';

interface ThemeViewProps extends ViewProps {
  backgroundColor?: string;
}

export const ThemedViewComponent: React.FC<ThemeViewProps> = ({
  style,
  backgroundColor,
  ...props
}) => {
  return (
    <View style={[{backgroundColor: backgroundColor}, style]} {...props} />
  );
};

export const ThemedView = React.memo(ThemedViewComponent);
