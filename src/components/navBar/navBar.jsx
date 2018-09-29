import React, { Component } from "react";
import logo from "../../images/logo.svg";

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
      .getElementById("footer")
      .scrollIntoView( { block: "end", inline: "end" ,behavior: "smooth" });
  };

  render() {
    let { isLogoAnimationStarted, isNavItemsAnimationStarted } = this.state;
    return (
      <nav className="lu-navbar">
        {isLogoAnimationStarted && (
          <a className="lu-navbar__logo" href="/">
            <svg className="lu-navbar__icon">
              <use xlinkHref={`${logo}#lu-logo`} />
            </svg>
          </a>
        )}
        {isNavItemsAnimationStarted && (
          <div className="lu-navbar__items">
            <a className="lu-navbar__item">CV</a>
            <a
              className="lu-navbar__item"
              onClick={this.handleScrollToContactMe}
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
