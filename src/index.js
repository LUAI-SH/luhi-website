import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from 'smoothscroll-polyfill';

// import "bootstrap/dist/css/bootstrap.css";
// import 'font-awesome/css/font-awesome.min.css'; 
// import "animate.css/animate.css";
import "./components/styles/css/style.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// kick off the polyfill!
smoothscroll.polyfill();


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
