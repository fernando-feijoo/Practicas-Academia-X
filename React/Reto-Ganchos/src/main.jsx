import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ConsultaApi from './components/ConsultaApi.jsx';
import './css/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='titulo'>Lista de Usuarios</h1>
    <ConsultaApi />
  </StrictMode>
);
