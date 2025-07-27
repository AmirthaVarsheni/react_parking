import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from '../src/Approutes';
import { rootStore } from './store';
import {Provider} from 'react-redux'
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={rootStore}>
    <AppRoutes />
    </Provider>
  </React.StrictMode>
);
