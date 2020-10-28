import React, { Component } from "react";
import { Link, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cars from "./components/Cars";
import About from "./components/about"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/cars">
            <Cars/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </div>
      </Router>
    );
  }
}
