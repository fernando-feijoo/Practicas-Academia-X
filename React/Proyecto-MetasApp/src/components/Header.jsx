import logo from './../assets/Logo.svg';

function Header() {
  return (
    <div>
      <div>
        <img src={logo} alt='Logo' />
        <a href='/'>Metas App</a>
      </div>
      <nav className='flex'>
        <a href="/perfil">Perfil</a>
      </nav>
    </div>
  );
}

export default Header;
