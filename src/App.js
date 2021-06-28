import './App.css';
import ListCards from './components/cards/ListCards';
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <h1>Mi Primera Aplicacion en React</h1>
      <Navbar/>
      <ListCards/>
    </div>
  );
}

export default App;

