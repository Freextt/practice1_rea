import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from "react-redux";
const initialState = {
    count: 0
}
const countReduce = (state = initialState, action) => {
    switch (action.type){
        case "INC":{
            return {...state,count: state.count + 1}
        }
        case "INC CUSTOM":{
            return {...state,count: state.count + action.payload}
        }
        case "DECREASE":{
            return {...state,count: state.count - 1}
        }
        case "RESET":{
            return {...state,count: state.count = 0}
        }
        default:
            return state;
    }
}
const storage = createStore(countReduce);
console.log(storage);
console.log(storage.getState());
ReactDOM.render(
  <React.StrictMode>
      <Provider store={storage}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
