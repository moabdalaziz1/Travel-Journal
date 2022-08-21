import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './fontawesome/css/all.min.css'; 
import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
