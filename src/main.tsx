import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import './css/components/Portfolio.css';
import './css/components/ProjectList.css';
import './css/components/Toolbar.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
