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
      <React.Fragment>
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
          <i>{title}</i>
          <div className="progress-bg">
            {isProgressBarAppeared && <div className={`progress progress-${percentage}`} />}
          </div>
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}

export default ProgressBarOnScroll;
