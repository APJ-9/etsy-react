import './App.css';
import Etsy from './components/etsy/Etsy';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

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
