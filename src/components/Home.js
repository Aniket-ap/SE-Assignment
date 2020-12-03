import React, { Component } from "react";
import { Link } from "react-router-dom";
import env from "../key/Environment";
import Loader from "react-loader-spinner";
import { Consumer } from "../context/Context";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            trendingMovies,
            topRatedMovies,
            popularMovies,
            upcomingMovies,
            topRatedSeries,
            popularSeries,
            airingToday,
            aboutToAir,
          } = value;

          if (
            trendingMovies === "" ||
            topRatedMovies === "" ||
            popularMovies === "" ||
            upcomingMovies === "" ||
            topRatedSeries === "" ||
            popularSeries === "" ||
            aboutToAir === "" ||
            airingToday === ""
          ) {
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
                <div className="row">
                  <div className="display-4 mb-4 col-md-12">Movies</div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/trending"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="1"
                          src={env.imgPath + trendingMovies[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">
                          Trending Movies
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/toprated"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="2"
                          src={env.imgPath + topRatedMovies[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">
                          Top-Rated Movies
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/popular"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="3"
                          src={env.imgPath + popularMovies[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">
                          Popular Movies
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/upcoming"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="1"
                          src={env.imgPath + upcomingMovies[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">
                          Upcoming Movies
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="display-4 mb-4 col-md-12">Series</div>

                  <div className="col-md-3 mb-5">
                    <Link
                      to="/topRatedSeries"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="1"
                          src={env.imgPath + topRatedSeries[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">
                          Top-Rated Series
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/popularSeries"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="1"
                          src={env.imgPath + popularSeries[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">
                          Popular Series
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/airingToday"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="1"
                          src={env.imgPath + airingToday[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">Airing Today</div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-5">
                    <Link
                      to="/aboutToAir"
                      className="text-light text-decoration-none"
                    >
                      <div className="rounded holder p-2 m-0">
                        <img
                          className="homeimg rounded w-100"
                          alt="1"
                          src={env.imgPath + aboutToAir[0].poster_path}
                        />
                        <div className="h4 text-center mt-3">About to Air</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
