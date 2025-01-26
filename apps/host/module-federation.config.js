// @ts-check

/**
 * @type {import('@module-federation/sdk').moduleFederationPlugin.ModuleFederationPluginOptions}
 **/
module.exports = {
  name: 'host',
  // HINT: Can be skipped if dynamic types are not needed
  remotes: {
    remote1: 'remote1@http://localhost:3001/remoteEntry.js',
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
