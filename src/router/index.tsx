import { createBrowserRouter } from 'react-router-dom';

// Layouts
import App from '../App';

// Views (Pages)
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/dashboard';
import Skills from '../components/skills/card';
import ExpenseForm from '../components/ExpenseForm/expenses';


export const router = createBrowserRouter([
  {
    path: '/spendee/',
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
     {
      path: 'dashboard/:userId',
        element: <Dashboard/>,
        handle: {
          meta: {
            title: 'page.title.home',
            app: 'app.title',
            isSecured: false,
          }
        }
     },
     {
      path: 'skills',
        element: <Skills/>,
        handle: {
          meta: {
            title: 'page.title.home',
            app: 'app.title',
            isSecured: false,
          }
        }
     },
     {
      path: 'expenseForm/',
        element: <ExpenseForm/>,
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

 