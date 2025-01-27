import { Suspense, lazy } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';

// TODO: resolve issue with types decompression in runtime
// import ComponentTwo from 'remote1/ComponentTwo';

const Remote1 = lazy(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return loadRemote<{ default: any }>('remote1/ComponentTwo', {
    from: 'runtime',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as Promise<{ default: any }>;
});

const Home = () => {
  return (
    <section>
      <Suspense>{<Remote1 />}</Suspense>
    </section>
  );
};

export default Home;
