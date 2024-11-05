import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet></Outlet>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
