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
      .getElementById("my-skills")
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
      <div className="lu-header-container clearfix">
        <div className="image-bg">
          <div className="lu-header-bg">
            <img src={photo} alt="Luai" />
            {isCodeMessageAnimationStarted && (
              <div className="container" id="code-messsage">
                <p>
                  <span className="luCodeBlue">console</span>
                  <span className="luCodeBrown">.</span>
                  <span className="luCodeRed">log</span>
                  <span>(</span>
                  <span className="luCodeGreen">'Hello There'</span>
                  <span>);</span>
                </p>

                <p className="no-margin">
                  <span className="luCodeBrown">let</span> messege
                  <span className="luCodeBrown"> = </span>
                  <span className="luCodeGreen">
                    `<br />
                  </span>
                </p>
                <p className="no-margin">
                  <span className="luCodeGreen">My name is Luai. I’m a</span>
                </p>
                <p className="no-margin">
                  <span className="luCodeGreen">Computer Engineer and a</span>
                </p>
                <p className="no-margin">
                  <span className="luCodeGreen">
                    Web Developer. Please scroll
                  </span>
                </p>
                <p className="no-margin">
                  <span className="luCodeGreen">to find more about me.</span>
                </p>
                <p>
                  <span className="luCodeGreen">`</span>
                </p>
              </div>
            )}
            {isArrowAnimationStarted && (
              <div className="arrow-icon">
                <button onClick={this.handleScrollToSkills}>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
