import React from "react";
import ReactDom from "react-dom";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './Reducer';

ReactDom.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>, document.getElementById("root")
)