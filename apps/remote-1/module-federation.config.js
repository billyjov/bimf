// @ts-check

/**
 *
 **/
module.exports = {
  name: 'remote1',
  filename: 'remoteEntry.js',
  exposes: {
    './ComponentOne': './src/features/feature-1/components/ComponentOne.tsx',
    './ComponentTwo': './src/features/feature-1/components/ComponentTwo.tsx',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
};
