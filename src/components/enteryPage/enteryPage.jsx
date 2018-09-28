import React, { Component } from "react";
import LoadingAnimation from "../common/loadingAnimation/loadingAnimation";

class EnteryPage extends Component {
  render() {
    return (
      <div id="preloading" className="entery-page">
        <LoadingAnimation />
      </div>
    );
  }
}

export default EnteryPage;
