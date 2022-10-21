import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <div className="todelete" style={{width:'100%',height:"2000px",backgroundColor:'antiquewhite'}}></div>
    </div>
  );
}

export default App;
