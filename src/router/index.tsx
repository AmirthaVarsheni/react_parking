import { createBrowserRouter } from 'react-router-dom';

// Layouts
import App from '../App';

// Views (Pages)
import Login from '../components/Welcome/welcome.';
import About from '../components/About/about';
import Skills from '../components/skills/card';
import React from '../components/POC/react';
import EmployeeList from '../components/POC/EmployerList';


export const router = createBrowserRouter([
  {
    path: '/portfolio/',
    element: <App/>,
    children: [
      {
        path: 'welcome',
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
      path: 'about',
        element: <About/>,
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
      path: 'react',
        element: <React/>,
        handle: {
          meta: {
            title: 'page.title.home',
            app: 'app.title',
            isSecured: false,
          }
        }
     },     
     {
      path: 'employeeList',
        element: <EmployeeList/>,
        handle: {
          meta: {
            title: 'page.title.home',
            app: 'app.title',
            isSecured: false,
          }
        }
     }     
      
    ],
  },
   
]);

 
