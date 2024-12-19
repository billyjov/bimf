import { createRoot } from 'react-dom/client';
import App from './app/App';
import { init, preloadRemote } from '@module-federation/enhanced/runtime';
import dynamicplugin from './dynamic-loader-plugin';

init({
  name: 'host',
  remotes: [
    {
      name: 'remote1',
      entry: '',
    },
  ],
  plugins: [dynamicplugin()],
});

preloadRemote([
  {
    nameOrAlias: 'remote1',
    exposes: ['Widget'],
  },
]);

const appElement = document.getElementById('app');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(appElement!);
root.render(<App />);
