import './App.css';
import Etsy from './components/Etsy/Etsy';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
