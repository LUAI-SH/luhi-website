import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ProgressBarOnScroll from "../common/progressBarOnScroll/progressBarOnScroll";
import node_icon from "../../images/node.png";
import react_icon from "../../images/react.png";
import bootstrap_icon from "../../images/boot.png";
import scss_icon from "../../images/scss.png";
import mongoDb_icon from "../../images/mongo.png";
import sqlserver_icon from "../../images/sqlserver.png";
import firebase_icon from "../../images/firebase.png";
import photoshop_icon from "../../images/Ps.png";
import illustrator_icon from "../../images/Ai.png";
import affter_effects_icon from "../../images/Ae.png";

class Skills extends Component {
  state = {};

  render() {
    const skillsListFramworks = [
      <figure className="grid-item">
        <img className="grid-item__icon" src={node_icon} alt="node-icon" />
        <figcaption className="grid-item__caption">NodeJS</figcaption>
      </figure>,
      <figure className="grid-item">
        <img className="grid-item__icon" src={react_icon} alt="react-icon" />
        <figcaption className="grid-item__caption">ReactJs</figcaption>
      </figure>,
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={bootstrap_icon}
          alt="bootstrap-icon"
        />
        <figcaption className="grid-item__caption">Bootstrap 4</figcaption>
      </figure>,
      <figure className="grid-item">
        <img className="grid-item__icon" src={scss_icon} alt="scss-icon" />
        <figcaption className="grid-item__caption">SCSS</figcaption>
      </figure>
    ];

    const skillsListDb = [
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={mongoDb_icon}
          alt="mongodb-icon"
        />
        <figcaption className="grid-item__caption">mongoDb</figcaption>
      </figure>,
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={sqlserver_icon}
          alt="sqlserver-icon"
        />
        <figcaption className="grid-item__caption">SQLServer</figcaption>
      </figure>,
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={firebase_icon}
          alt="firebase-icon"
        />
        <figcaption className="grid-item__caption">Firebase</figcaption>
      </figure>
    ];

    const skillsListDesignSoftwares = [
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={photoshop_icon}
          alt="photoshop-icon"
        />
        <figcaption className="grid-item__caption">Photoshop</figcaption>
      </figure>,
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={illustrator_icon}
          alt="illustrator-icon"
        />
        <figcaption className="grid-item__caption">Illustrator</figcaption>
      </figure>,
      <figure className="grid-item">
        <img
          className="grid-item__icon"
          src={affter_effects_icon}
          alt="after-effects-icon"
        />
        <figcaption className="grid-item__caption">After Effects</figcaption>
      </figure>
    ];

    return (
      <section id="my-skills" className="section-skills my-skills">
        <ScrollAnimation
          offset={50}
          duration={0.5}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        >
          <div className="my-skills__title">
            <h2 className="header-2">
              my
              <span>Skills</span>
            </h2>
            <div className="thin-line" />
          </div>
        </ScrollAnimation>
        <div className="my-skills__languages">
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0.5}
            animateIn="pulse"
            animateOut="fadeOut"
          >
            <div className="languages__title">
              <h3 className="header-3">Programming Languages</h3>
            </div>
          </ScrollAnimation>
          <div className="languages__details">
            <ProgressBarOnScroll
              title={"HTML5 & CSS3"}
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="98"
            />
            <ProgressBarOnScroll
              title="Javascript (ES6)"
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="97"
            />

            <ProgressBarOnScroll
              title="Python"
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="92"
            />

            <ProgressBarOnScroll
              title="CSharp"
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="89"
            />
          </div>
        </div>
        <div className="my-skills__libraries">
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0.5}
            animateIn="pulse"
            animateOut="fadeOut"
          >
            <div className="libraries__title">
              <h3 className="header-3">Libraries and Frameworks</h3>
            </div>
          </ScrollAnimation>
          <div id="skills-list-framworks" className="libraries__details">
            {skillsListFramworks.map(item => {
              let toggle = true;
              const itemIndex = skillsListFramworks.indexOf(item);
              if (itemIndex % 2 === 0) toggle = false;
              return (
                <ScrollAnimation
                  key={itemIndex}
                  offset={50}
                  duration={0.5}
                  delay={0}
                  animateIn={
                    toggle ? "lu-slide-to-left-in" : "lu-slide-to-right-in"
                  }
                  animateOut={
                    toggle ? "lu-slide-to-left-out" : "lu-slide-to-right-out"
                  }
                >
                  {item}
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
        <div className="my-skills__database">
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0.5}
            animateIn="pulse"
            animateOut="fadeOut"
          >
            <div className="database__title">
              <h3 className="header-3">Database</h3>
            </div>
          </ScrollAnimation>
          <div className="database__details">
            {skillsListDb.map(item => {
              let toggle = true;
              const itemIndex = skillsListDb.indexOf(item);
              if (itemIndex % 2 === 0) toggle = false;
              return (
                <ScrollAnimation
                  key={itemIndex}
                  offset={50}
                  duration={0.5}
                  delay={0}
                  animateIn={
                    toggle ? "lu-slide-to-left-in" : "lu-slide-to-right-in"
                  }
                  animateOut={
                    toggle ? "lu-slide-to-left-out" : "lu-slide-to-right-out"
                  }
                >
                  {item}
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
        <div className="my-skills__design-apps">
          <ScrollAnimation
            offset={50}
            duration={0.75}
            delay={0.5}
            animateIn="pulse"
            animateOut="fadeOut"
          >
            <div className="design-apps__title">
              <h3 className="header-3">Design Softwares</h3>
            </div>
          </ScrollAnimation>
          <div className="design-apps__details">
            {skillsListDesignSoftwares.map(item => {
              let toggle = true;
              const itemIndex = skillsListDesignSoftwares.indexOf(item);
              if (itemIndex % 2 === 0) toggle = false;
              return (
                <ScrollAnimation
                  key={itemIndex}
                  offset={50}
                  duration={0.5}
                  delay={0}
                  animateIn={
                    toggle ? "lu-slide-to-left-in" : "lu-slide-to-right-in"
                  }
                  animateOut={
                    toggle ? "lu-slide-to-left-out" : "lu-slide-to-right-out"
                  }
                >
                  {item}
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
