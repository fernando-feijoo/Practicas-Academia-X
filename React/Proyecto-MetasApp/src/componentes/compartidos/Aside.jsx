import estilos from './Aside.module.css';
import Vinculo from './Vinculo';
import ListaSVG from '../../img/lista.svg';
import NuevaSVG from '../../img/nueva.svg';

function Aside() {
  return (
    <aside className={estilos.aside}>
      <Vinculo to='/lista' texto='Lista de Metas' Icono={ListaSVG} />
      <Vinculo to='/nueva' texto='Nueva Meta' Icono={NuevaSVG} />
    </aside>
  );
}

export default Aside;
