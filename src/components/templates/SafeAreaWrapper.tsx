import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '@globalStyles';

interface SafeAreaWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
  children,
  style,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[globalStyles.safeAreaWrap, {paddingTop: insets.top}, style]}>
      {children}
    </SafeAreaView>
  );
};
