import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";


class Footer extends Component {
  render() {
    const contactMeLinks = {
      twitter: "https://twitter.com/LUAI_SJ",
      linkedIn: "https://www.linkedin.com/in/luaish/",
      email: "eng.luaish@gmail.com"
    };
    return (
      <footer id="contact-me">
        <div className="container">
          <ScrollAnimation
            offset={50}
            duration={1}
            delay={0.75}
            animateIn="tada"
          >
            <h1>Contact me</h1>
          </ScrollAnimation>
          <div id="icons">
            <ul className="list-unstyled list-inline social text-center">
              <ScrollAnimation
                offset={50}
                duration={1}
                delay={2}
                animateIn="fadeInUp"
              >
                <li className="list-inline-item">
                  <a href={contactMeLinks.linkedIn} target="_blank">
                    <i className="fa fa-linkedin icon" />
                  </a>
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                offset={50}
                duration={1}
                delay={2}
                animateIn="fadeInUp"
              >
                <li className="list-inline-item">
                  <a href={contactMeLinks.twitter} target="_blank">
                    <i className="fa fa-twitter icon" />
                  </a>
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                offset={50}
                duration={1}
                delay={2}
                animateIn="fadeInUp"
              >
                <li className="list-inline-item">
                  <a href={`mailto:${contactMeLinks.email}`} target="_blank">
                    <i className="fa fa-envelope icon" />
                  </a>
                </li>
              </ScrollAnimation>
            </ul>
          </div>
        </div>
        <div className="note">
          <p>Design by Luai - All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
