import './App.css';
import Etsy from './Components/Etsy/Etsy';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Etsy></Etsy>
      <Footer></Footer>
    </div>
  );
}

export default App;
