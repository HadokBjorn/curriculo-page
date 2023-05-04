import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetGlobalStyle from './style/ResetGlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetGlobalStyle/>
    <App />
  </React.StrictMode>
);
