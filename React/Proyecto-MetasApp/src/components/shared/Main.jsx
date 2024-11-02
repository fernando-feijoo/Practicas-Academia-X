import estilos from './css/Main.module.css';
import Link from './Link';
import ListaSVG from '../../assets/lista.svg';
import NuevaSVG from '../../assets/nueva.svg';

function Main({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Link href='/lista' texto='Lista de Metas' Icono={NuevaSVG} />
        <Link href='/crear' texto='Nueva Meta' Icono={ListaSVG} />
      </aside>
      <main className={estilos.main}>{children}</main>
    </div>
  );
}

export default Main;
