import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";
import Beta from "./components/common/beta/beta";

// For font-awesome
library.add(fab, faEnvelope);

class App extends Component {

  render() {
    return (
      <div id="app" className="u-hide">
        <NavBar />
        <Header />
        <Beta />
        <Skills />
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
