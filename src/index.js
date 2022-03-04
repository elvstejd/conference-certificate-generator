import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'atropos/css';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({ type: 'dark' })

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <Toaster />
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
