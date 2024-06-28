import {StyleSheet} from 'react-native';
import {Colors} from '@colors';
import {fonts} from '@fonts';

export const globalStyles = StyleSheet.create({
  screenWrap: {
    backgroundColor: Colors.light.background,
  },
  headerText: {
    fontFamily: fonts.primary.regular,
  },
});
