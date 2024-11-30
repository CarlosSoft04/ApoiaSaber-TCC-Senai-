import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <App />,  // O App é renderizado diretamente aqui sem Router
  document.getElementById('root')
);
