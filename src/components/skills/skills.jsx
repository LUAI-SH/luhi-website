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
      <li className="flex-item">
        <img src={node_icon} alt="node-icon" />
        NodeJS
      </li>,
      <li className="flex-item">
        <img src={react_icon} alt="react-icon" />
        ReactJs
      </li>,
      <li className="flex-item">
        <img src={bootstrap_icon} alt="bootstrap-icon" />
        Bootstrap 4
      </li>,
      <li className="flex-item">
        <img src={scss_icon} alt="scss-icon" />
        SCSS
      </li>
    ];

    const skillsListDb = [
      <li className="flex-item">
        <img src={mongoDb_icon} alt="mongodb-icon" />
        mongoDb
      </li>,
      <li className="flex-item">
        <img src={sqlserver_icon} alt="sqlserver-icon" />
        SQLServer
      </li>,
      <li className="flex-item">
        <img src={firebase_icon} alt="firebase-icon" />
        Firebase
      </li>
    ];

    const skillsListDesignSoftwares = [
      <li className="flex-item">
        <img src={photoshop_icon} alt="photoshop-icon" />
        Photoshop
      </li>,
      <li className="flex-item">
        <img src={illustrator_icon} alt="illustrator-icon" />
        Illustrator
      </li>,
      <li className="flex-item">
        <img src={affter_effects_icon} alt="after-effects-icon" />
        After Effects
      </li>
    ];

    return (
      <div id="my-skills" className="container">
        <ScrollAnimation
          offset={50}
          duration={0.5}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        >
          <h1>
            my
            <span className="lu-green">Skills</span>
          </h1>
          <div className="thin-line" />
        </ScrollAnimation>
        <ScrollAnimation
          offset={50}
          duration={0.75}
          delay={0.5}
          animateIn="pulse"
          animateOut="fadeOut"
        >
          <h2 className="lu-sub-title">Programming Languages</h2>
        </ScrollAnimation>
        <div className="row">
          <section className="lu-container col-sm-6">
            <ProgressBarOnScroll
              title={"HTML5 & CSS3"}
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="95"
            />
          </section>
          <section className="lu-container col-sm-6">
            <ProgressBarOnScroll
              title="ECMAScript 6"
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="95"
            />
          </section>
          <section className="lu-container col-sm-6">
            <ProgressBarOnScroll
              title="Python"
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="90"
            />
          </section>
          <section className="lu-container col-sm-6">
            <ProgressBarOnScroll
              title="CSharp"
              animateInType="fadeIn"
              animateOutType="fadeOut"
              percentage="85"
            />
          </section>
        </div>
        <ScrollAnimation
          offset={50}
          duration={0.75}
          delay={0.5}
          animateIn="pulse"
          animateOut="fadeOut"
        >
          <h2 className="lu-sub-title blue-bg">Libraries and Frameworks</h2>
        </ScrollAnimation>
        <ul id="skills-list-framworks" className="flex-container">
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
        </ul>
        <ScrollAnimation
          offset={50}
          duration={0.75}
          delay={0.5}
          animateIn="pulse"
          animateOut="fadeOut"
        >
          <h2 className="lu-sub-title no-margins violet-bg">Database</h2>
        </ScrollAnimation>
        <ul id="skills-list-Db" className="flex-container">
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
        </ul>
        <ScrollAnimation
          offset={50}
          duration={0.75}
          delay={0.5}
          animateIn="pulse"
          animateOut="fadeOut"
        >
          <h2 className="lu-sub-title no-margins red-bg">Design Softwares</h2>
        </ScrollAnimation>
        <ul id="skills-list-design-software" className="flex-container">
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
        </ul>
      </div>
    );
  }
}

export default Skills;
