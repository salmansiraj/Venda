import React, { Component } from "react";
import add from "../Assets/add.png";
import qrCode from "../Assets/qr-code.png";
import { Card, Form, FormGroup, Input, Label, Button } from "reactstrap";
import "../App.css";
import db from "../Firebase/firebaseDB";

class OwnerMenus extends Component {
  menus = {};

  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  async componentDidMount() {
    await this.getMenus();
    console.log(this.state.menus);
    this.state.menus.forEach((menuList) => {
      console.log(menuList[0]);
    });
  }

  getMenus = () => {
    let menuArray = {};
    db.ref("menus")
      .child(this.props.restid)
      .on("value", (snapshot) => {
        let snapVals2 = snapshot.val();
        // console.log(Object.keys(snapVals2))
        try {
          if (snapVals2) {
            let restName = this.props.restid;
            Object.keys(snapVals2).map((key) => {
              if (menuArray[restName]) {
                menuArray[restName].push(snapVals2[key]);
              } else {
                menuArray[restName] = [snapVals2[key]];
              }
            });
          }
        } catch (error) {
          alert(error);
        }
      });

    this.setState({
      menus: [...this.state.menus, menuArray],
    });
  };

  render() {
    if (this.state.menus.length) {
    }

    return <div> Loading</div>;
  }
}

export default OwnerMenus;
