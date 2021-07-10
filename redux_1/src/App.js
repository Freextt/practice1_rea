import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
function App() {
  const SomeNestedChildComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
    const counter = useSelector(({count}) => count);
    console.log(counter, 'cuwniwnc');
      // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    return (
        <header className="App-header">
            <h1>{counter}</h1>
            <button onClick={()=>{
            dispatch({type: 'INC', payload: +prompt()});
            }
            }>INCREASE</button>
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
    )
  }
const SomeChildComponent = () => {
    return(
        <SomeNestedChildComponent/>
    )
}
  return (
    <div className="App">
        <SomeChildComponent/>
    </div>
  );
}

export default App;
