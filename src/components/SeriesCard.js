import React, { Component } from "react";
import env from "../key/Environment";

export default class SeriesCard extends Component {
  funSetId = (id) => {
    this.props.funGetDetails(id);
  };

  render() {
    const { series } = this.props;
    return (
      <React.Fragment>
        <div className="col-md-3 p-3 cardholder text-light">
          <div
            className="card"
            onClick={() => {
              this.funSetId(series.id);
            }}
          >
            <div className="imgholder">
              <img
                className="card-img-top"
                src={env.imgPath + series.poster_path}
                alt={series.name}
              />
            </div>
            <div className="card-body p-3">
              <div className="h6 mb-3">{series.name.slice(0, 20)}</div>
              <div className="h4">
                <i className="fa fa-star text-warning"></i>{" "}
                {series.vote_average} / 10
              </div>
            </div>
          </div>
        </div>

        {/* responsive */}

        <div className="col-12 p-2 rcardholder text-light">
          <div
            className="card"
            onClick={() => {
              this.funSetId(series.id);
            }}
          >
            <div className="row m-0">
              <div className="col-5 p-2">
                <div className="imgholder">
                  <img
                    className="card-img-top"
                    src={env.imgPath + series.poster_path}
                    alt={series.name}
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="card-body py-3 px-0">
                  <div className="mt-3 mb-4">{series.name}</div>
                  <div className="h3">
                    <i className="fa fa-star text-warning"></i>{" "}
                    {series.vote_average} / 10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
