import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/Theme.css'
import { Router } from "react-router-dom";
import history from './history'

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('root')
);