import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class ProgressBarOnScroll extends Component {
  state = {
    isProgressBarAppeared: false
  };

  render() {
    const { title, animateInType, animateOutType, percentage } = this.props;
    const { isProgressBarAppeared } = this.state;
    return (
      <div className="progressbar">
        <ScrollAnimation
          animateIn={animateInType}
          duration={0.5}
          offset={50}
          afterAnimatedIn={() => {
            this.setState({ isProgressBarAppeared: true });
          }}
          animateOut={animateOutType}
          afterAnimatedOut={() => {
            this.setState({ isProgressBarAppeared: false });
          }}
        >
          <i className="progressbar__title">{title}</i>
          <div className="progressbar__load-line">
            <div className="load-line__back" />
            {isProgressBarAppeared && (
              <div className={`load-line__front to-${percentage}`} />
            )}
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default ProgressBarOnScroll;
