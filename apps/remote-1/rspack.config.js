const { composePlugins, withNx, withReact } = require('@nx/rspack');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');
const moduleFederationConfig = require('./module-federation.config');
const path = require('path');
const {
  NativeFederationTypeScriptRemote,
} = require('@module-federation/native-federation-typescript/rspack');

module.exports = composePlugins(withNx(), withReact(), (config, context) => {
  config.context = path.join(context.context.root, 'apps/remote-1');
  config.watchOptions = {
    ignored: ['**/node_modules/**', '**/@mf-types/**'],
  };

  config.plugins.push(
    NativeFederationTypeScriptRemote({ moduleFederationConfig })
  );
  config.plugins.push(
    new ModuleFederationPlugin({ ...moduleFederationConfig, dts: true })
  );
  // config.output.publicPath = 'auto';
  config.output.publicPath = 'http://localhost:3001/';
  config.devServer = {
    ...config.devServer,
    devMiddleware: {
      writeToDisk: true,
    },
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  };

  return config;
});
