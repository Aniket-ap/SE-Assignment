import React, { Component } from "react";
import SeriesCard from "./SeriesCard";
import Loader from "react-loader-spinner";
import { Consumer } from "../context/Context";

export default class AboutToAir extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  funGetDetails = (id) => {
    this.props.history.push(`/seriesDetails/${id}`);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { aboutToAir } = value;

          if (aboutToAir.length === 0) {
            return (
              <div className="display-4 my-5 text-center">
                <Loader
                  type="BallTriangle"
                  color="#28abb9"
                  height={100}
                  width={100}
                />
              </div>
            );
          } else {
            return (
              <div>
                <div className="display-4 mb-3">
                  Series about to Air <i className="fa fa-clock-o"></i>
                </div>
                <div className="row">
                  {aboutToAir.map((series) => (
                    <SeriesCard
                      key={series.id}
                      series={series}
                      funGetDetails={this.funGetDetails}
                    />
                  ))}
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
