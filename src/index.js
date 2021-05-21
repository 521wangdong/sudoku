import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

(function () {
  var dpr = window.devicePixelRatio;
  var meta = document.createElement('meta');
  var scale = 1 / dpr;
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, user-scalable=no, initial-scale=' + scale +
    ', maximum-scale=' + scale + ', minimum-scale=' + scale);
  document.getElementsByTagName('head')[0].appendChild(meta);
  // 动态设置的缩放大小会影响布局视口的尺寸
  function resize() {
    var deviceWidth  = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (deviceWidth / 10) +'px';
  }
  resize();
  window.onresize = resize;
})()
