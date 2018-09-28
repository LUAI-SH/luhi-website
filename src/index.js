import React from "react";
import ReactDOM from "react-dom";

import "./components/styles/css/style.css";

import App from "./App";
import EnteryPage from "./components/enteryPage/enteryPage";
import registerServiceWorker from "./registerServiceWorker";

import smoothscroll from "smoothscroll-polyfill";
// kick off the polyfill!
smoothscroll.polyfill();


ReactDOM.render(<EnteryPage />, document.getElementById("load-page"));

window.addEventListener("load", () => {
  console.log("All resources finished loading!");
  // remove preloading tag
  let loadPage = document.getElementById("load-page");
  loadPage.parentNode.removeChild(loadPage);
  ReactDOM.render(<App />, document.getElementById("root"));
});

registerServiceWorker();
