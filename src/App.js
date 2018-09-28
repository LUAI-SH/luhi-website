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
import EnteryPage from "./components/enteryPage/enteryPage";

// For font-awesome
library.add(fab, faEnvelope);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    let state = this.state;
    window.addEventListener("load", () => {
      state.isLoading = false;
      this.setState(state);
      console.log("All resources finished loading!");
    });

    // setTimeout(() => {
    //   state.isLoading = false;
    //   this.setState(state);
    // }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <EnteryPage />;
    }

    return (
      <div id="app">
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
