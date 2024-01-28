// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../src/assets/js/main';
import { AuthProvider } from './AuthContext';

ReactDOM.render(
  //<React.StrictMode>
  <AuthProvider>
    <App />
    </AuthProvider>,
  //</React.StrictMode>,
  document.getElementById('root')
);
