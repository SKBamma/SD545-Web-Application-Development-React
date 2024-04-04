import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Greeting from './App-3';


import GenerateNumbs from './App-3';
import Counter from './App-1';
import TempConverter from './App-2';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    < GenerateNumbs />
    < Counter />
    <TempConverter />

  </React.StrictMode >
);

