import { Suspense, lazy } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';

import ComponentTwo from 'remote1/ComponentTwo';

const Remote1 = lazy(() => {
  return loadRemote<{ default: typeof ComponentTwo }>('remote1/ComponentTwo', {
    from: 'runtime',
  }) as Promise<{ default: typeof ComponentTwo }>;
});

const Home = () => {
  return (
    <section className="container">
      <Suspense>{<Remote1 />}</Suspense>
    </section>
  );
};

export default Home;
