import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import MenuBar from "./MenuBar";
import MenuItems from "./MenuItems";

class MenuPage extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <MenuBar />
        <MenuItems />
      </div>
    );
  }
}

export default MenuPage;
