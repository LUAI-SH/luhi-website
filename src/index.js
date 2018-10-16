import React from "react";
import ReactDOM from "react-dom";

import "./components/styles/css/style.css";

import App from "./App";
import EnteryPage from "./components/enteryPage/enteryPage";
import registerServiceWorker from "./registerServiceWorker";

import smoothscroll from "smoothscroll-polyfill";
// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(<EnteryPage />, document.getElementById("entry-page"));

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("load", () => {
  document.getElementById("entry-page").outerHTML = "";
  const app = document.getElementById("app");
  app.classList.remove("u-hide");
});

registerServiceWorker();
