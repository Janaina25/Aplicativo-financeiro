import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Cadastro from './Cadastro';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cadastro />
  </React.StrictMode>
);

