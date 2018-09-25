import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Education extends Component {
  render() {
    return (
      <div id="my-education" className="container lu-education-bg">
        <ScrollAnimation
          offset={50}
          duration={0.75}
          delay={0}
          animateIn="slideInRight"
          animateOut="slideOutLeft"
        >
          <h1>
            my
            <span>Education</span>
          </h1>
          <div className="edu-thin-line" />
        </ScrollAnimation>
        <div className="edu-details">
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0}
            animateIn="fadeInUp"
            animateOut="fadeOutDown"
          >
            <div className="container">
              <div className="row">
                <div className="col-4">2018</div>
                <div className="col-8">
                  {`Full Stack Developer Track (1 Million Arab Coders Initiative)
                  Udacity.com`}
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0}
            animateIn="fadeInUp"
            animateOut="fadeOutDown"
          >
            <div className="container">
              <div className="row">
                <div className="col-4">2015 - 2017</div>
                <div className="col-8">
                  {`Master of Electronic Engineering, Computer Department.\n
                  Universiti Teknikal Malaysia Melaka (UTeM).\n
                  Current GPA 3.81`}
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0}
            animateIn="fadeInUp"
            animateOut="fadeOutDown"
          >
            <div className="container">
              <div className="row">
                <div className="col-4">2009 -2014</div>
                <div className="col-8">
                  {`Bachelor of Electrical Engineering, Computer & Control
                  Department.\n
                  Sana’a University.`}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Education;
