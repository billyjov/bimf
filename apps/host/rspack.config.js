const { composePlugins, withNx, withReact } = require('@nx/rspack');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');
const {
  NativeFederationTypeScriptHost,
} = require('@module-federation/native-federation-typescript/rspack');

const moduleFederationConfig = require('./module-federation.config');
const path = require('path');

module.exports = composePlugins(withNx(), withReact(), (config, context) => {
  config.context = path.join(context.context.root, 'apps/host');

  config.plugins.push(
    new ModuleFederationPlugin({ ...moduleFederationConfig, dts: false })
  );
  config.plugins.push(
    NativeFederationTypeScriptHost({
      moduleFederationConfig,
    })
  );
  config.output.publicPath = '/';
  config.devServer = {
    ...config.devServer,
    port: 4300,
  };

  return config;
});
