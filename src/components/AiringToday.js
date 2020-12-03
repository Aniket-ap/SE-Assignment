import React, { Component } from "react";
import SeriesCard from "./SeriesCard";
import Loader from "react-loader-spinner";
import { Consumer } from "../context/Context";

export default class AiringToday extends Component {
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
          const { airingToday } = value;

          if (airingToday.length === 0) {
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
                  Series Airing Today <i className="fa fa fa-podcast"></i>
                </div>
                <div className="row">
                  {airingToday.map((series) => (
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
