import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Memoria from './services/Memoria.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memoria>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Memoria>
  </StrictMode>
);
