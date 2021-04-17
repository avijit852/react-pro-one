import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routers} from './router/router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <Routers />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
