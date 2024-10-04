import  Logo from '../../assets/logo.svg';
import  Perfil from '../../assets/perfil.svg';
import './css/Header.css';

function Header() {
  return (
    <header className='encabezado'>
      <div className='contenedor'>
        <Logo className='logo' />
        <a className='titulo' href='/'>
          Metas App
        </a>
      </div>
      <nav>
        <a
          href='/perfil'
          className='flex items-center px-4 h-xl hover:bg-gray-200'
        >
          <Perfil className='h-6 w-6' />
        </a>
      </nav>
    </header>
  );
}

export default Header;
