import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
//import {useEffect} from "react";

const SomeNestedChildComponent = () => {
  const counter = useSelector(({count}) => count);
  console.log(counter, 'asddafaf');
  return (<div className="App">
    <h1>{counter}</h1>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>)

}

const SomeChildComponent = () => {
  return (
   <SomeNestedChildComponent/>
  )
}
function App() {

  const dispatch = useDispatch();
  return (

      <div className="App">

        <button onClick={()=>{
          dispatch({type: 'INC CUSTOM', payload: +prompt()})}}>inc</button>
        <SomeChildComponent/>
      </div>
  );
}

export default App;
