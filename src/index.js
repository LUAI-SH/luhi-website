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

ReactDOM.render(<App />, document.getElementById("root"), () => {
  console.log("RENDERED");
  document.getElementById("entry-page").outerHTML = "";
  var app = document.getElementById("app");
  app.classList.remove("u-hide");
  // setTimeout(function() {
  // }, 3000);
});

// window.addEventListener("load", event => {
//    alert("press");
//   console.log(event);
//   console.log("All resources finished loading!");
//   setTimeout(() => {
//     ReactDOM.render(
//       <App isPageLoading={false} />,
//       document.getElementById("root")
//     );
//   }, 2000);
// });

registerServiceWorker();
