import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/global.css';
import Formulario from './components/Formulario';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario />
  </StrictMode>
);
