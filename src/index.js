import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import './css/output.css';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(<App tab='home' />)

