import App from './App';
import React from 'react';
import store from './store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)