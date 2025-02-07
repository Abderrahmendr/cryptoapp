import React from 'react';
import { createRoot } from 'react-dom/client'; // Änderung hier
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Erstelle einen Root
root.render(<App />); // Verwende root.render