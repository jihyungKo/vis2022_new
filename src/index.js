import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client"
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

ReactDOM.render(
  <App />,
  rootElement
);

reportWebVitals()
