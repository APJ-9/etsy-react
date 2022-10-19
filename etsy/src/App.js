import './App.css';
import Etsy from './Components/Etsy/Etsy';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Etsy></Etsy>
      <div className='toDelete' />
    </div>
  );
}

export default App;
