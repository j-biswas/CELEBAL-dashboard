// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeToggle from './components/ThemeToggle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeToggle>
    <App />
  </ThemeToggle>
);
