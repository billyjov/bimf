// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
module.exports = {
  name: 'remote1',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductHero': './src/features/Products/components/ProductHero.tsx',
    './Widget': './src/features/Products/components/Widget.tsx',
  },
};
