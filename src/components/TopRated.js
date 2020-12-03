import React, { Component } from "react";
import Card from "./Card";
import Loader from "react-loader-spinner";
import { Consumer } from "../context/Context";

export default class TopRated extends Component {
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
          const { topRatedMovies } = value;
          if (topRatedMovies.length === 0) {
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
                  Top-Rated Movies of all time <i className="fa fa-film"></i>
                </div>
                <div className="row">
                  {topRatedMovies.map((movie) => (
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
