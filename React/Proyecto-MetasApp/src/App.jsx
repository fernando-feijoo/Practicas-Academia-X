import Header from './components/shared/Header';
import Main from './components/shared/Main';
import Footer from './components/shared/Footer';
// import Lista from './components/list/Lista';
import Details from './components/new/Details';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        {/* <Lista></Lista> */}
        <Details></Details>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
