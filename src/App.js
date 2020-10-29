import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cars from "./components/Cars";
import About from "./components/about";
import AddCar from "./components/addCar"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="navBar">
                <li>
                  <Link to="/">Home</Link>
                </li> ||&nbsp;
               
                <li>
                  <Link to="/cars">Cars</Link>
                </li> ||&nbsp;
                <li>
                  <Link to="/about">About</Link>
                </li>
            </ul>
          </nav>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cars">
            <Cars />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/add-car">
            <AddCar/>
          </Route>
        </div>
      </Router>
    );
  }
}
