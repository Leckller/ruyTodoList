import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ListasProvider from './context/ListasProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListasProvider>
      <App />
    </ListasProvider>
  </React.StrictMode>,
);
