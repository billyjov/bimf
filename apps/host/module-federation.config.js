// @ts-check

/**
 * @type {import('@module-federation/sdk').moduleFederationPlugin.ModuleFederationPluginOptions}
 **/
module.exports = {
  name: 'host',
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
};
