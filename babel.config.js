module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@fonts': './src/assets/fonts/index',
          '@images': './src/assets/images/index',
          '@svgs': './src/assets/svgs/index',
          '@colors': './src/constants/index',
          '@context': './src/context/index',
          '@navigation': './src/navigation/index',
          '@components': './src/components/index',
          '@screens': './src/screens/index',
          '@globalStyles': './src/styles/globalStyles.ts',
          '@locales': './src/locales/i18n',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
