import { Component } from "react";
import axios from "axios";
import env from "../key/Environment";

export default class Service extends Component {
  funGetMethod(method) {
    return axios
      .get(env.apiurl + method + env.apikey)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
