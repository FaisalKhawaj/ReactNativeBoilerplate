/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

type SpacingProp = {
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export const Spacing: React.FC<SpacingProp> = ({
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,
  top = 0,
  left = 0,
  right = 0,
  bottom = 0,
}) => {
  return (
    <View
      style={{
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
    />
  );
};
