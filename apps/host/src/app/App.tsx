import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Hello From host </div>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
