import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <div>hello</div>,
    path: '/',
  },
  {
    element: <div>about us</div>,
    path: '/about-us',
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
