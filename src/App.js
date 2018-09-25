import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";
import Beta from "./components/common/beta/beta";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isGreetingAppeared: false
    };
  }

  componentDidMount() {
    let state = this.state;

    setTimeout(() => {
      state.isLoading = false;
      this.setState(state);
    }, 3000);

    setTimeout(() => {
      state.isGreetingAppeared = true;
      this.setState(state);
    }, 400);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      const { isGreetingAppeared } = this.state;
      return (
        <div id="loading-page" className="container load-bg text-center">
          <div className="spinner">
            <div className="lds-ellipsis">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          {isGreetingAppeared && (
            <div className="animated fadeIn slow">
              <h1>Welcome to my website</h1>
              <h2>Please Wait...</h2>
            </div>
          )}
        </div>
      ); // render null when app is not ready
    }

    return (
      <div className="App">
        <NavBar />
        <Header />
        <Beta />
        {/* <Skills /> */}
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
