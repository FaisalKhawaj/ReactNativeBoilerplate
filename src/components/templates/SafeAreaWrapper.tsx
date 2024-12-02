import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '@globalStyles';
import {useTheme} from '@context';

interface SafeAreaWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
  children,
  style,
}) => {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[
        globalStyles.safeAreaWrap,
        {
          backgroundColor: colors.background,
          paddingTop: insets.top + 10,
        },
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
};
