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
        },
      },
    ],
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
