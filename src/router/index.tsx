import { createBrowserRouter } from 'react-router-dom';

// Layouts
import App from '../App';

// Views (Pages)
import Login from '../Login/login';

export const router = createBrowserRouter([
  {
    path: '/parking/',
    element: <App/>,
    children: [
      {
        path: 'login',
        element: <Login/>,
        handle: {
          meta: {
            title: 'page.title.home',
            app: 'app.title',
            isSecured: false,
          }
        }
      },
      
    ],
  },
]);

 
