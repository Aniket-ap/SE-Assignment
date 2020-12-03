import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className="display-2 holder p-4 text-center rounded my-5">
        <i className="fa fa-exclamation-triangle mt-3"></i>
        <div className="h6 my-3">Something went wrong!</div>
        <div className="h6 mt-3">Try navigating to other page</div>
      </div>
    );
  }
}

export default Error;
