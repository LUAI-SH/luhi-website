import React from "react";
import ReactDOM from "react-dom";

import "./components/styles/css/style.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import smoothscroll from "smoothscroll-polyfill";
// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(<App isPageLoading={true} />, document.getElementById("root"));

window.addEventListener("load", event => {
  //   alert("press");
  console.log(event);
  console.log("All resources finished loading!");
  setTimeout(() => {
    ReactDOM.render(
      <App isPageLoading={false} />,
      document.getElementById("root")
    );
  }, 2000);
});

registerServiceWorker();
