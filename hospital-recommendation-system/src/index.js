import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client in React 18+
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root and render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
