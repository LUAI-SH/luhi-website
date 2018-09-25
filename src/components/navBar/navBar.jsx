import React, { Component } from "react";
import logo from "../../images/logowhite.svg";

class NavBar extends Component {
  state = {
    isLogoAnimationStarted: false,
    isNavItemsAnimationStarted: false
  };

  componentDidMount() {
    let timeToStartLogoAnimation = 1000;
    let timeToStartNavItemsAnimation = 1000; // in milliseconds
    this.setAnimationTimeDuration(
      { isLogoAnimationStarted: true },
      timeToStartLogoAnimation
    );
    this.setAnimationTimeDuration(
      { isNavItemsAnimationStarted: true },
      timeToStartNavItemsAnimation
    );
  }

  setAnimationTimeDuration = (value, time) => {
    setInterval(() => this.setState(value), time);
  };

  handleScrollToContactMe = () => {
    document
      .getElementById("contact-me")
      .scrollIntoView({ block: "end", behavior: "smooth" });
  };

  render() {
    let { isLogoAnimationStarted, isNavItemsAnimationStarted } = this.state;
    return (
      <nav className="navbar navbar-expand navbar-dark navbar-bg">
        {isLogoAnimationStarted && (
          <a className="navbar-brand" href="/">
            <img src={logo} alt="l-logo"/>
          </a>
        )}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {isNavItemsAnimationStarted && (
            <div className="navbar-nav">
              <button className="nav-item nav-link" >
                CV
              </button>
              <button className="nav-item nav-link" onClick={this.handleScrollToContactMe}>
                Contact Me
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
