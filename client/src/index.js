import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SettingsProvider from "./utils/contextProvider";


ReactDOM.render(
    <SettingsProvider>
      <App />
    </SettingsProvider>,
  document.getElementById('root')
);

