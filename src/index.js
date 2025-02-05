// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';  
//import './index.css';
import App from './App';
 import { BrowserRouter, BrowserRouter as Router } from 'react-router'; 
// Create a root and render the app

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
   