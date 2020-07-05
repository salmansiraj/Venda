import React, { Component } from "react";
import { AuthProvider } from "./Firebase/Auth";
import PrivateRoute from "./PrivateRoute";

import Login from "./Components/Login";
import Register from "./Components/Register";
import RegisterPayment from "./Components/RegisterPayment";
import "./Firebase/base";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OwnerHomepage from "./Components/OwnerHomepage";
import MenuPage from "./Components/MenuPage";
import SettingsPage from "./Components/SettingComponents/SettingsPage";
import AddCategoryPage from "./Components/AddComponents/AddCategoryPage";
import AddItemPage from "./Components/AddComponents/AddItemPage";
import CustomerMenuPage from "./Components/CustomerComponents/CustomerMenuPage";

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Route path="/login" exact component={Login} />

            <Route path="/register" exact component={Register} />
            <Route path="/register2" exact component={RegisterPayment} />

            <PrivateRoute
              path="/homepage/:uid"
              exact
              component={OwnerHomepage}
            />
            <PrivateRoute
              path="/menupage/:uid/:mid"
              exact
              component={MenuPage}
            />

            <PrivateRoute
              path="/settings/:uid"
              exact
              component={SettingsPage}
            />

            <PrivateRoute
              path="/addCategory"
              exact
              component={AddCategoryPage}
            />
            <PrivateRoute path="/addItem" exact component={AddItemPage} />

            <PrivateRoute
              path="/customerMenu"
              exact
              component={CustomerMenuPage}
            />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}
