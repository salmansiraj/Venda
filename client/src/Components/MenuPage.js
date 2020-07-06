import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import MenuBar from "./MenuBar";
import MenuItems from "./MenuItems";
import db from "../Firebase/firebaseDB";

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuObj: [],
    };
  }

  componentDidMount() {
    let link = window.location.href.split("/");
    // let userid = link[link.length - 1];
    let menuid = link[link.length - 2];
    // let restid = link[link.length - 3];

    db.ref("categories")
      .child(menuid)
      .on(
        "value",
        async (snapshot) => {
          let categoryObj = snapshot.val();
          //   this.setState({ menuObj: categoryObj });
          let valArray = Object.keys(categoryObj).map(async (key) => {
            let obj = {};
            obj["categoryId"] = key;
            obj["categoryDetails"] = categoryObj[key];
            let menuItems = await db.ref("menu-items").child(key).once("value");
            obj["menuItems"] = menuItems.toJSON();
            return obj;
          });
          //   console.log(valArray);
          this.setState({ menuObj: valArray });
        },
        (error) => {
          alert(error);
        }
      );
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <MenuBar />
        {this.state.menuObj.length > 0 && (
          <MenuItems menuObj={this.state.menuObj} />
        )}
      </div>
    );
  }
}

export default MenuPage;
