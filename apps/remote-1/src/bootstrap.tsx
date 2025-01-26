import { createRoot } from 'react-dom/client';
import { ComponentTwo } from './features/feature-1';

const appElement = document.getElementById('app');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(appElement!);
root.render(
  <div>
    <ComponentTwo />
  </div>
);
