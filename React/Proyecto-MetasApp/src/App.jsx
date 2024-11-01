import Header from './components/shared/Header.jsx';
import Main from './components/shared/Main.jsx';
import Footer from './components/shared/Footer.jsx';
import Meta from './components/list/Meta.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Meta></Meta>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
