import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Lista from './components/list/Lista';
import Detalles from './components/new/Details';
import NotFound from './components/shared/NotFound';
import Modal from './components/shared/Modal';
import { useContext, useEffect } from 'react';
import { pedirMetas } from './services/Requests';
import { Contexto } from './services/Memoria';

function App() {
  const [, enviar] = useContext(Contexto);
  useEffect(() => {
    (async function () {
      try {
        const metas = await pedirMetas();
        enviar({ tipo: 'colocar', metas });
      } catch (error) {
        console.error('Error al obtener las metas:', error);
      }
    })();
  }, [enviar]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path='/lista' element={<Lista />}>
          <Route
            path='/lista/:id'
            element={
              <Modal>
                <Detalles />
              </Modal>
            }
          />
        </Route>
        <Route path='/nueva' element={<Detalles />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
