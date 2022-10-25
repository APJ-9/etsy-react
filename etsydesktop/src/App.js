import './App.css';
import Etsy from './Etsy/Etsy';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Etsy />
      <Footer />
    </div>
  );
}

export default App;
