import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../images/logo.svg";

class Footer extends Component {
  render() {
    const contactMeLinks = {
      twitter: "https://twitter.com/LUAI_SJ",
      linkedIn: "https://www.linkedin.com/in/luaish/",
      email: "eng.luaish@gmail.com"
    };
    return (
      <footer id="footer" className="footer">
        <div className="footer__logo">
          <ScrollAnimation
            offset={50}
            duration={1}
            delay={0.75}
            animateIn="tada"
          >
            <svg>
              <use xlinkHref={`${logo}#lu-logo`} />
            </svg>
          </ScrollAnimation>
        </div>
        <div className="footer__contact-me">
          <div className="twitter">
            <a href={contactMeLinks.twitter} target="_blank">
              <FontAwesomeIcon
                className="twitter__icon"
                icon={["fab", "twitter"]}
                size="6x"
              />
            </a>
          </div>
          <div className="linkedin">
            <a href={contactMeLinks.linkedIn} target="_blank">
              <FontAwesomeIcon
                className="linkedin__icon"
                icon={["fab", "linkedin"]}
                size="6x"
              />
            </a>
          </div>
          <div className="mail">
            <a href={contactMeLinks.email}>
              <FontAwesomeIcon
                className="mail__icon"
                icon="envelope"
                size="6x"
              />
            </a>
          </div>
        </div>
        <div className="footer__all-rights-res">
          <p>Design by Luai - All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
