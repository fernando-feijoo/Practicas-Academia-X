import Header from './components/shared/Header';
import Main from './components/shared/Main';
import Footer from './components/shared/Footer';
import Lista from './components/list/Lista';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Lista></Lista>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
