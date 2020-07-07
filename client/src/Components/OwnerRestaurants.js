import React, { Component } from "react";
import db from "../Firebase/firebaseDB";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";

class OwnerRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuFlag: false,
      restaurants: [],
      menus: [],
      menuLoaded: false,
    };

    window.addEventListener("model", this.updateRestaurant);
  }

  async componentDidMount() {
    let resturants = await Promise.all(this.props.restaurants);
    this.setState({ restaurants: resturants });
    console.log(resturants);
  }

  // Adding Retaurants Feature
  updateRestaurant = () => {
    this.setState({ open: true });
  };

  menuFlag = () => {
    this.setState({ menuFlag: !this.state.menuFlag });
  };

  // Cancel retaurants Feature
  cancelRestaurant = () => {
    this.setState({ open: false });
  };

  cancelMenu = () => {
    this.setState({
      menuFlag: !this.state.menuFlag,
    });
  };

  updateMenu = () => {
    this.setState({ menuFlag: true });
  };

  addMenu = (e) => {
    e.preventDefault();
    const userid = window.location.href.split("/").pop();
    const { menu_name, rest_name } = e.target.elements;
    // console.log(menu_name.value, rest_name.value);

    // Adding Menu to menu node with respective retaurant ID
    db.ref("restaurants")
      .child(userid)
      .on(
        "value",
        (snapshot) => {
          let snapVals = snapshot.val();
          let valArray = Object.keys(snapVals).map((key) => {
            return [key, snapVals[key]];
          });

          valArray.forEach((restaurant) => {
            // console.log(restaurant[0], restaurant[1]);
            if (rest_name.value === restaurant[1].rest_name) {
              const rest_id = restaurant[0];

              try {
                db.ref().child("menus").child(rest_id).push();

                db.ref("menus")
                  .child(rest_id)
                  .push({
                    created_on: Date.parse(new Date()),
                    menu_name: menu_name.value,
                    qr_img: "TEST",
                    scans_total: 0,
                  });
              } catch {
                // The QR Image generator function will be called here
                db.ref("menus")
                  .child(rest_id)
                  .push({
                    created_on: Date.parse(new Date()),
                    menu_name: menu_name.val,
                    qr_img: "TEST",
                    scans_total: 0,
                  });
              }
            }
          });
        },
        (error) => {
          alert(error);
        }
      );
    this.cancelMenu();
    window.location.reload();
  };

  render() {
    // console.log("before return restarants", this.props.restaurants);

    return (
      <>
        <h2> My Restaurants </h2>
        {this.state.menuFlag && this.state.restaurants.length > 0 && (
          <Form onSubmit={this.addMenu}>
            <Button style={{ float: "right" }} onClick={this.cancelMenu}>
              x{" "}
            </Button>
            <br />
            <FormGroup>
              <Label style={{ color: "midnightblue" }}> Menu Name </Label>
              <Input
                name="menu_name"
                type="text"
                placeholder="e.g. Summer Menu"
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "midnightblue" }}> Restaurant Name </Label>
              <select className="form-control" name="rest_name">
                {this.state.restaurants.map((currMenu, ind) => {
                  return (
                    <option key={ind}>
                      {" "}
                      {currMenu.restDetails.rest_name}{" "}
                    </option>
                  );
                })}
              </select>
              <p
                className="text-muted"
                style={{ fontSize: "smaller", padding: "5px" }}
              >
                Which restaurant are you adding this menu to
              </p>
            </FormGroup>
            <Button
              type="submit"
              style={{
                marginTop: "20px",
                backgroundColor: "midnightblue",
              }}
            >
              Create Menu
            </Button>
          </Form>
        )}
        {this.state.menuFlag === false && (
          <Button
            type="button"
            className="btn btn-info"
            style={{ float: "right" }}
            onClick={this.updateMenu}
          >
            {" "}
            Add Menu{" "}
          </Button>
        )}
        <br />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.restaurants.map((currRest, ind) => {
            console.log(currRest);
            return (
              <Card
                key={ind}
                style={{
                  width: "30%",
                  height: "250px",
                  boxShadow: "#f3f3f3 5px 5px 5px 5px",
                  margin: "10px",
                  overflow: "auto",
                }}
              >
                <div style={{ padding: "5%", height: "50%" }}>
                  <h4 style={{ color: "#fd795a" }}>
                    {" "}
                    {currRest["restDetails"].rest_name}{" "}
                  </h4>
                  <h4 style={{ color: "#fd795a" }}>
                    {" "}
                    {currRest["restDetails"].address}{" "}
                  </h4>
                </div>
                <div
                  style={{
                    padding: "5%",
                    backgroundColor: "#edf4ff",
                    height: "100%",
                  }}
                >
                  <h4> Menus </h4>
                  {currRest["menus"]
                    ? Object.keys(currRest["menus"]).map((key, ind) => {
                        let obj = currRest["menus"][key];
                        // console.log(key);
                        return (
                          <div key={ind}>
                            <Button
                              onClick={() => {
                                window.location.href =
                                  "/menupage/" +
                                  currRest["restId"] +
                                  "/" +
                                  key +
                                  "/" +
                                  window.location.href.split("/").pop();
                              }}
                              style={{
                                margin: "3px",
                                background: "none",
                                border: "none",
                                color: "midnightblue",
                              }}
                            >
                              {obj.menu_name}
                            </Button>

                            <br />
                          </div>
                        );
                      })
                    : "No menus :("}
                </div>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
}

export default OwnerRestaurants;
