import {StyleSheet} from 'react-native';
import {Colors} from '@colors';
import {fonts} from '@fonts';

export const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 23,
    fontFamily: fonts.primary.bold,
    color: Colors.light.headingTitle,
  },
});
