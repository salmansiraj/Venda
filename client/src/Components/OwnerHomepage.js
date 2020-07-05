import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import OwnerRestaurants from "./OwnerRestaurants";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
import add from "../Assets/add.png";
import db from "../Firebase/firebaseDB";

class OwnerHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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

  addRestaurant = (e) => {
    e.preventDefault();
    const { rest_name, address, seating } = e.target.elements;

    const userid = window.location.href.split("/").pop();

    db.ref().child("restaurants").child(userid).push();

    db.ref("restaurants")
      .child(userid)
      .push({
        rest_name: rest_name.value,
        address: address.value,
        created_on: Date.parse(new Date()),
        seating_occupancy: seating.value,
        menus: [""],
      });

    this.updateRestaurant();
    window.location.reload();
  };

  updateRestaurant = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <AppNavbar />
        <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
          {this.state.restaurants.length > 0 && (
            <>
              <OwnerRestaurants
                menus={this.state.menus}
                restaurants={this.state.restaurants}
              />

              <Card
                style={{
                  width: "27%",
                  height: "250px",
                  backgroundColor: "#edf4ff",
                  boxShadow: "#f3f3f3 5px 5px 5px 5px",
                  margin: "10px",
                  overflow: "auto",
                }}
              >
                {this.state.open === false && (
                  <div className="text-center" style={{ paddingTop: "20%" }}>
                    <a onClick={this.updateRestaurant}>
                      <img
                        src={add}
                        style={{
                          width: "60px",
                          height: "60px",
                          padding: "10px",
                        }}
                        alt="add-rest"
                      />
                      <br />
                      Add Restaurant
                    </a>
                  </div>
                )}
                {this.state.open === true && (
                  <Form style={{ margin: "5%" }} onSubmit={this.addRestaurant}>
                    <Button
                      style={{ float: "right" }}
                      onClick={this.updateRestaurant}
                    >
                      {" "}
                      x{" "}
                    </Button>
                    <br />
                    <br />
                    <FormGroup>
                      <Label style={{ color: "midnightblue" }}>
                        Restaurant Name
                      </Label>
                      <Input
                        name="rest_name"
                        type="text"
                        placeholder="e.g. Joe's Pizza Shop"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={{ color: "midnightblue" }}> Address </Label>
                      <Input
                        name="address"
                        type="text"
                        placeholder="e.g. 412 Times Square "
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={{ color: "midnightblue" }}>
                        {" "}
                        Seating Occupancy{" "}
                      </Label>
                      <Input
                        name="seating"
                        type="text"
                        placeholder="e.g. 50 "
                      />
                    </FormGroup>

                    <Button
                      type="submit"
                      style={{
                        marginTop: "20px",
                        backgroundColor: "midnightblue",
                      }}
                    >
                      Create Restaurant{" "}
                    </Button>
                  </Form>
                )}
              </Card>
            </>
          )}
          <div
            style={{
              width: "100%",
              padding: "0 0 100% 0",
            }}
          ></div>
        </div>
      </>
    );
  }
}

export default OwnerHomepage;
