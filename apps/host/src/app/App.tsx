import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
          <div className="container-fluid">
            <span className="navbar-brand">Remote Management (Host)</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <span className="nav-link">Remote 1</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">Remote 2</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">Remote 3</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>Hello From host </div>
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
