import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from 'smoothscroll-polyfill';

import "./components/styles/css/style.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// kick off the polyfill!
smoothscroll.polyfill();


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
