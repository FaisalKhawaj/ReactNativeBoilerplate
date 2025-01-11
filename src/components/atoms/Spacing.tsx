import React from 'react';
import {View} from 'react-native';

type SpacingProp = {
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
};

export const Spacing: React.FC<SpacingProp> = ({
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

}) => {
  return (
    <View
      style={{
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,

      }}
    />
  );
};
