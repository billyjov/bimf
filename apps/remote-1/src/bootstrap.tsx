import { createRoot } from 'react-dom/client';
import { ProductHero } from './features/Products';

const appElement = document.getElementById('app');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(appElement!);
root.render(
  <div>
    <ProductHero />
  </div>
);
