import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store.js';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './bootstrap.min.css'
import store from "./store"
import {Provider} from 'react-redux'
ReactDOM.render(
<<<<<<< HEAD

  <Provider store={store}>
=======
  <Provider store = {store}>
>>>>>>> Login/Regis
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
