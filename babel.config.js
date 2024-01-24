module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // 指定根目录
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@api': './src/api',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        // blocklist: null,
        // allowlist: null,
        // blacklist: null, // DEPRECATED
        // whitelist: null, // DEPRECATED
        // safe: false,
        // allowUndefined: true,
        // verbose: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
