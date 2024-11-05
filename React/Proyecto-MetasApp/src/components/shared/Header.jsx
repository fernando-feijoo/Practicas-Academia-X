import LogoSVG from '../../assets/logo.svg';
import PerfilSVG from '../../assets/perfil.svg';
import estilos from './css/Header.module.css';
import Links from './Links';

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
        <Links to='/perfil' Icono={PerfilSVG} />
      </nav>
    </header>
  );
}

export default Header;
