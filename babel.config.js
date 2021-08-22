module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
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
            '@scenes': './src/scenes',
            '@components': './src/components',
            '@state': './src/state',
            '@navigation': './src/navigation',
            '@core': './src/core',
            '@assets': './src/assets',
            '@styles': './src/styles',
            '@images': './src/assets/imgs',
            '@types': './src/types',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@apis': './src/apis',
            '@data': './src/data'
          },
        },
      ],
    ],
  };
};
