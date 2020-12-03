import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Movie DB
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#jccj"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Movies
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="trending" className="dropdown-item">
                Trending Movies
              </Link>
              <Link to="toprated" className="dropdown-item">
                TopRated Movies
              </Link>
              <Link to="popular" className="dropdown-item">
                Popular Movies
              </Link>
              <Link to="upcoming" className="dropdown-item">
                UpComing Movies
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#kacjc"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Series
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/topRatedSeries" className="dropdown-item">
                TopRated Series
              </Link>

              <Link to="/popularSeries" className="dropdown-item">
                Popular Series
              </Link>

              <Link to="/airingToday" className="dropdown-item">
                Airing Today
              </Link>

              <Link to="/aboutToAir" className="dropdown-item">
                About To Air
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
