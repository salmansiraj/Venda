import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import OwnerRestaurants from "./OwnerRestaurants";
import db from "../Firebase/firebaseDB";

class OwnerHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      menus: [],
      menuLoaded: false,
    };
  }

  componentDidMount() {
    db.ref("restaurants")
      .child(window.location.href.split("/").pop())
      .on(
        "value",
        async (snapshot) => {
          if (snapshot.val()) {
            let snapVals = snapshot.val();
            let valArray = Object.keys(snapVals).map(async (key) => {
              let obj = {};
              obj["restId"] = key;
              obj["restDetails"] = snapVals[key];
              let menus = await db.ref("menus").child(key).once("value");
              obj["menus"] = menus.toJSON();
              return obj;
            });
            this.setState({ restaurants: valArray });
          }
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
        {this.state.restaurants.length > 0 && (
          <OwnerRestaurants
            menus={this.state.menus}
            restaurants={this.state.restaurants}
          />
        )}
      </div>
    );
  }
}

export default OwnerHomepage;
