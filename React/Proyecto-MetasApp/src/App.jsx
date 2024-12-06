import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Lista from './components/list/Lista';
import Detalles from './components/new/Details';
import NotFound from './components/shared/NotFound';
import Modal from './components/shared/Modal';

function App() {
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
