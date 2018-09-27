import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Education extends Component {
  render() {
    return (
      <section id="section-education" className="education-history">
        <div className="education-history__title">
          <ScrollAnimation
            offset={30}
            duration={0.75}
            delay={0}
            animateIn="slideInRight"
            animateOut="slideOutLeft"
          >
            <h2 className="header-2">
              my
              <span className="color-gold">Education</span>
            </h2>
          </ScrollAnimation>
        </div>
        <div className="u-thin-line" />
        <div className="education-history__details">
          <div className="details__year y-1">
            <ScrollAnimation
              offset={30}
              duration={0.75}
              delay={0}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
            >
              <p>2018</p>
            </ScrollAnimation>
          </div>
          <div className="details__description d-1">
            <ScrollAnimation
              offset={30}
              duration={0.75}
              delay={0}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
            >
              <p>
                {`Full Stack Developer Track (1 Million Arab Coders Initiative)
                Udacity.com`}
              </p>
            </ScrollAnimation>
          </div>
          <div className="details__year y-2">
            <ScrollAnimation
              offset={30}
              duration={0.75}
              delay={0}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
            >
              <p>2015 - 2017</p>
            </ScrollAnimation>
          </div>
          <div className="details__description d-2">
            <ScrollAnimation
              offset={30}
              duration={0.75}
              delay={0}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
            >
              <p>
                {`Master of Electronic Engineering, Computer Department.\n
            Universiti Teknikal Malaysia Melaka (UTeM).\n
            Current GPA 3.81`}
              </p>
            </ScrollAnimation>
          </div>
          <div className="details__year y-3">
            <ScrollAnimation
              offset={30}
              duration={0.75}
              delay={0}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
            >
              <p>2009 -2014</p>
            </ScrollAnimation>
          </div>
          <div className="details__description d-3">
            <ScrollAnimation
              offset={30}
              duration={0.75}
              delay={0}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
            >
              <p>
                {`Bachelor of Electrical Engineering, Computer & Control
            Department.\n
            Sana’a University.`}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
