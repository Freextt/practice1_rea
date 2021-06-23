//import logo from './logo.svg';
import './App.css';
import Character from './components/character/Character'
function App() {

  return (
    <div>
      <Character image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png' }/>
        <Character image={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png' }/>
        <Character image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png' }/>
    </div>
  );
}

export default App;
