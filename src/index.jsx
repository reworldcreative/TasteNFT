import "./styles/main.scss";
// const start = require("./scripts/main");

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

import Modal from "react-modal";
Modal.setAppElement("#root");

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  // <BrowserRouter basename="/">
  //   <App />
  // </BrowserRouter>

  <HashRouter>
    <App />
  </HashRouter>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
