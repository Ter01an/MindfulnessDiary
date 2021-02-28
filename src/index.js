import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let initialWidth = 1920,
    width =  document.documentElement.clientWidth,
    sizeWidth = width * 100 / initialWidth,
    initialHeight = 1080,
    height =  document.documentElement.clientHeight,
    sizeHeight = height * 100 / initialHeight,
    body = document.getElementsByTagName('body');

console.log(sizeHeight, sizeWidth, width, height);

body[0].style.fontSize = (sizeHeight < sizeWidth ? sizeHeight : sizeWidth) + "%";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
