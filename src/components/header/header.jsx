import React, { Component } from "react";
import photo from "../../images/luai-photo.png";
import arrow from "../../images/arrow.svg";

class Header extends Component {
  state = {
    isCodeMessageAnimationStarted: false,
    isArrowAnimationStarted: false
  };

  handleScrollToSkills = () => {
    document
      .getElementById("section-skills")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  componentDidMount() {
    let timeToStartCodeAnimation = 1500; // in milliseconds
    let timeToStartArrowAnimation = 16000; // in milliseconds

    setInterval(() => {
      this.setState({ isCodeMessageAnimationStarted: true });
    }, timeToStartCodeAnimation);
    setInterval(() => {
      this.setState({ isArrowAnimationStarted: true });
    }, timeToStartArrowAnimation);
  }

  render() {
    const {
      isCodeMessageAnimationStarted,
      isArrowAnimationStarted
    } = this.state;
    return (
      <header className="header">
        <div className="header__photo">
          <img src={photo} alt="Luai" />
        </div>
        {isCodeMessageAnimationStarted && (
          <div id="code-messsage" className="header__code-message">
            <p>
              <span className="color-code-blue">console</span>
              <span className="color-code-brown">.</span>
              <span className="color-code-red">log</span>
              <span>(</span>
              <span className="color-code-green">'Hello There'</span>
              <span>);</span>
            </p>

            <p>
              <span className="color-code-brown">let</span> messege
              <span className="color-code-brown"> = </span>
              <span className="color-code-green">
                `<br />
              </span>
            </p>
            <p>
              <span className="color-code-green u-padding-left-md">My name is Luai. I’m a</span>
            </p>
            <p>
              <span className="color-code-green u-padding-left-md">Computer Engineer and a</span>
            </p>
            <p>
              <span className="color-code-green u-padding-left-md">
                Web Developer. Please scroll
              </span>
            </p>
            <p>
              <span className="color-code-green u-padding-left-md">to find more about me.</span>
            </p>
            <p>
              <span className="color-code-green">`</span>
            </p>
          </div>
        )}
        <div className="header__arrow">
          {isArrowAnimationStarted && (
            <a className="btn-arrow" onClick={this.handleScrollToSkills}>
              <svg className="btn-arrow__icon">
                <use xlinkHref={`${arrow}#Capa_1`} />
              </svg>
            </a>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
