import React, { Component } from "react";
import Service from "../service/Service";
import env from "../key/Environment";
import Loader from "react-loader-spinner";

export default class SeriesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.funGetDetails();
  }

  funGetDetails = () => {
    const method = "/tv/" + this.props.match.params.id;
    const data = new Service();
    data
      .funGetMethod(method)
      .then((res) => {
        this.setState({ series: res.data });
      })
      .catch(() => {
        this.props.history.push("/error");
      });
  };

  funGetSimilar = (id) => {
    this.props.history.push(`/seriesSimilar/${id}`);
  };

  render() {
    const { series } = this.state;
    if (this.state.series === "") {
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
        <div className="card">
          <div className="row m-0 py-2 px-1">
            <div className="col-md-4 p-2 text-center">
              <img
                className="detailimg w-100"
                src={env.imgPath + series.poster_path}
                alt={series.id}
              />
            </div>

            <div className="col-md-8 p-3">
              <div className="h1 mt-3 mb-5">{series.name}</div>
              <div className="h3 my-3">
                <i className="fa fa-star fa-fw text-warning"></i>{" "}
                {series.vote_average} / 10
              </div>
              <div className="h3 my-3">
                <i className="fa fa-thumbs-o-up fa-fw text-warning"></i>{" "}
                {series.vote_count}
              </div>
              <div className="h3 my-3">
                <i className="fa fa-language fa-fw text-warning"></i>{" "}
                {series.original_language.toUpperCase()}
              </div>
              <div className="h3 mt-3">
                <i className="fa fa-info-circle fa-fw text-warning"></i>{" "}
                {series.status}
              </div>
              <div className="h3 my-3">
                <i className="fa fa-calendar-o fa-fw text-warning"></i>{" "}
                {series.first_air_date}
              </div>
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Genre</div>
              {series.genres.map((genre) => (
                <button className="btn btn-light mr-3 mb-3" key={genre.name}>
                  {genre.name}
                </button>
              ))}
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Languages</div>
              {series.languages.map((lang) => (
                <button className="btn btn-light mr-3 mb-3" key={lang}>
                  {lang}
                </button>
              ))}
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Creator</div>
              {series.created_by.map((creator) => (
                <button className="btn btn-light mr-3 mb-3" key={creator.name}>
                  {creator.name}
                </button>
              ))}
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Type</div>
              <div className="h1">{series.type}</div>
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Original Title</div>
              <div className="h1">{series.original_name}</div>
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Episode Duration</div>
              <div className="h1">{series.episode_run_time[0]} mins.</div>
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Production Company</div>
              {series.production_companies.map((comp) => (
                <button className="btn btn-light mr-3 mb-3" key={comp.name}>
                  {comp.name}
                </button>
              ))}
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Origin Country</div>
              {series.origin_country.map((country) => (
                <button className="btn btn-light mr-3 mb-3" key={country}>
                  {country}
                </button>
              ))}
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Seasons</div>
              <div className="h1">{series.number_of_seasons}</div>
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Episodes</div>
              <div className="h1">{series.number_of_episodes}</div>
            </div>

            <div className="col-md-12 p-2 mt-3">
              <div className="h3 text-warning mb-3">Streaming on</div>
              {series.networks.map((network) => (
                <div
                  className="rounded bg-light w-50 p-4 mr-1"
                  key={network.name}
                >
                  <img
                    className="img-fluid"
                    alt={network.name}
                    src={env.imgPath + network.logo_path}
                  />
                </div>
              ))}
            </div>

            <div className="col-md-12 p-2 mt-3">
              <div className="h3 text-warning mb-3">Overview</div>
              <div className="h5 py-3">{series.overview}</div>
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Screenshot</div>
              <img
                className="img-fluid"
                alt={series.id}
                src={env.imgPath + series.backdrop_path}
              />
            </div>

            <div className="col-md-6 p-2 mt-3">
              <div className="h3 text-warning mb-3">Official Website</div>
              <a
                className="text-light text-decoration-none h5 py-3"
                href={series.homepage}
              >
                {series.homepage}
              </a>
            </div>

            <div className="col-md-12 p-2 mt-3">
              <div className="h3 text-warning mb-3">Last Episode</div>
              <div className="h5 py-3">
                {series.last_episode_to_air.overview}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
