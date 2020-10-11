import React, { Component } from "react";
import PropTypes from "prop-types";
import Jumbotron from "../components/Jumbotron";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Router from "../components/Router";
import "../assets/css/main.scss";
class App extends Component {
  render() {
    return (
      <section>
        <Router></Router>
      </section>
    );
  }
}
export default App;
