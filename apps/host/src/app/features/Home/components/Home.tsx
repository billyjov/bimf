import { Suspense, lazy } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
// import ProductHero from 'remote1/ProductHero';

const Remote1 = lazy(() => {
  return loadRemote<{ default: any }>('remote1/ProductHero', {
    from: 'runtime',
  }) as Promise<{ default: any }>;
});

const Home = () => {
  return (
    <section>
      <Suspense>{<Remote1  />}</Suspense>
    </section>
  );
};

export default Home;
