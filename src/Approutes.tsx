// AppRoutes.tsx or AppRoutes.jsx
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/router/index'; // assuming router is defined in a separate file

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
  