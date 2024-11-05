import estilos from './css/Main.module.css';
import Links from './Links';
import ListaSVG from '../../assets/lista.svg';
import NuevaSVG from '../../assets/nueva.svg';

function Main({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Links to='/lista' texto='Lista de Metas' Icono={ListaSVG} />
        <Links to='/nueva' texto='Nueva Meta' Icono={NuevaSVG} />
      </aside>
      <main className={estilos.main}>{children}</main>
    </div>
  );
}

export default Main;
