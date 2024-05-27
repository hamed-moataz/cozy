import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//=============== style bootstrab =================
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



import './index.css'
import CounterContextProvider from './componets/stor/Counter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
)
