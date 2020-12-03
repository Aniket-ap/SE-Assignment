import React, { Component } from "react";
import Card from "./Card";
import Loader from "react-loader-spinner";
import { Consumer } from "../context/Context";

export default class Trending extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  funGetDetails = (id) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { trendingMovies } = value;

          if (trendingMovies.length === 0) {
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
                  Movies Trending this week <i className="fa fa-line-chart"></i>
                </div>
                <div className="row">
                  {trendingMovies.map((movie) => (
                    <Card
                      key={movie.id}
                      movie={movie}
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
