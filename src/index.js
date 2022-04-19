import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
