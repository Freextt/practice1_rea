import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';

const initialState = {
    count: 0
}
const counterReducer = (state = initialState,action)=>{
  switch (action.type){
      case 'INC CUSTOM':{
          return {...state,count : state.count + action.payload};
      }
      case 'RESET':{ return {...state,count : 0};}
      case 'DECREASE':{
          return {...state,count : state.count - 1};
      }
      default:
          return state;
  }
}
const storage = createStore(counterReducer);
console.log(storage);
ReactDOM.render(
  <React.StrictMode>
          <Provider  store={storage}>
          <App/>
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
