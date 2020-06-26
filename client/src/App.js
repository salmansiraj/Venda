import React, { Component } from "react";

import Login from "./Components/Login";
import Register from "./Components/Register";
import RegisterPayment from "./Components/RegisterPayment";

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import OwnerHomepage from "./Components/OwnerHomepage";
import MenuPage from "./Components/MenuPage";
import SettingsPage from "./Components/SettingComponents/SettingsPage";

export default class App extends Component {
  
  render() { 
    return (
      <div className="app">
        <Router>
          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />
          <Route path="/register2" exact component={RegisterPayment} />

          <Route path="/homepage" exact component={OwnerHomepage} />
          <Route path="/menupage" exact component={MenuPage} />
          
          <Route path="/settings/:name" exact component={SettingsPage} />
        </Router>
      </div>
    );

  }
}
