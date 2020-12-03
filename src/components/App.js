import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "../context/Context";
import Header from "../components/Header";
import Home from "../components/Home";
import Trending from "../components/Trending";
import TopRated from "../components/TopRated";
import Popular from "../components/Popular";
import UpComing from "../components/UpComing";
import Details from "../components/Details";
import Error from "../service/Error";
import TopRatedSeries from "../components/TopRatedSeries";
import PopularSeries from "../components/PopularSeries";
import AiringToday from "../components/AiringToday";
import AboutToAir from "../components/AboutToAir";
import SeriesDetails from "../components/SeriesDetails";
import Footer from "../components/Footer";

const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <div className="container-fluid px-1">
          <div className="container py-4">
            <Route exact path="/" component={Home} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/toprated" component={TopRated} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/upcoming" component={UpComing} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/error" component={Error} />
            <Route exact path="/topRatedSeries" component={TopRatedSeries} />
            <Route exact path="/popularSeries" component={PopularSeries} />
            <Route exact path="/airingToday" component={AiringToday} />
            <Route exact path="/aboutToAir" component={AboutToAir} />
            <Route exact path="/seriesDetails/:id" component={SeriesDetails} />
          </div>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
