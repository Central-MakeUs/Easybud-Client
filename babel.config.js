module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@libs': './src/libs',
          '@models': './src/models',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
