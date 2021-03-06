import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cars from "./components/Cars";
import About from "./components/about";
import AddCar from "./components/addCar"
import axios from 'axios';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    this.getAllCars()

  }
  getAllCars=()=>{
    axios
       .get("http://localhost:3001/cars")
       .then((response)=>{
         console.log("Response",response)
       })
       .catch((err)=>{
         console.log("Result",err)
       })
  }
  getAllUsers=()=>{
    axios
         .get("http://localhost:3001/users")
         .then((response)=>{
           if(response.status!==200){
             console.log("You need to login in first")
             this.setState({isLoggedIn:false})

             
           }
           else{
             console.log("Access granted")
             this.setState({isLoggedIn:true})
           }
         })
         .catch((err)=>{
           console.log("Result",err)
         })
  }

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
            <Cars getCars={this.getAllCars}/>
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
