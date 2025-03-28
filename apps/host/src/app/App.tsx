import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom bg-info-subtle">
          <div className="container-fluid">
            <span className="navbar-brand">BIMF (Host)</span>

            <div id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button className="btn btn-info">Remote 1</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-info mx-2">Remote 2</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-info mx-2">Remote 3</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='container d-flex justify-content-center my-2'>
          <h3>Welcome to Module Federation</h3>
        </div>
        <Outlet />
      </div>
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
