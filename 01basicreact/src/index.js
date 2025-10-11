import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // its simple...function lo, uske andar html likh do or return kr do and use render kr do.

  <React.StrictMode> // ye ek wrapper hai jo react ke kuch problems ko identify krta hai. Its like writing html using js.
    <App />
  </React.StrictMode>
);


