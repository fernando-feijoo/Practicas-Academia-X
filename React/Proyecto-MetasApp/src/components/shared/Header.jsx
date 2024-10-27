import LogoSVG from '../../assets/logo.svg';
import PerfilSVG from '../../assets/perfil.svg';
import estilos from './css/Header.module.css';
import Link from './Link';

function Header() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo} />
        <a className={estilos.titulo} href='/'>
          Metas App
        </a>
      </div>
      <nav>
        <Link href='/perfil' Icono={PerfilSVG} />
      </nav>
    </header>
  );
}

export default Header;
