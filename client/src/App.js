import React, { Component } from "react";

import Login from "./Components/Login";
import Register from "./Components/Register";
import RegisterPayment from "./Components/RegisterPayment";

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  
  render() { 
    return (
      <div className="app">
        <Router>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/register2" exact component={RegisterPayment} />
        </Router>
      </div>
    );

  }
}
