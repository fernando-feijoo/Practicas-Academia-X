import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MetasMemoria from './memoria/Metas';
import AuthMemoria from './memoria/Auth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthMemoria>
      <MetasMemoria>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MetasMemoria>
    </AuthMemoria>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
