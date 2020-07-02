import React, { Component } from 'react';
import add from "../Assets/add.png";
import db from "../Firebase/firebaseDB";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";

class OwnerRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      restaurants: [],
    };

    window.addEventListener("model", this.update);
  }

  componentDidMount() {
    db.ref("restaurants")
      .child(window.location.href.split("/").pop())
      .on(
        "value",
        (snapshot) => {
          let snapVals = snapshot.val()
          let valArray = Object.keys(snapVals).map(key => {
            return snapVals[key]
          })
          this.setState({
            restaurants: valArray,
          });

          console.log(this.state.restaurants);
        },
        (error) => {
          alert(error);
        }
      )
  }

  update = () => { 
    this.setState({ open: true });
  }

  cancel = () => {
    this.setState({ open: false });
  };

  addRestaurant = (e) => {
    e.preventDefault();
    const { rest_name, address, seating } = e.target.elements;
    // console.log(rest_name.value, address.value)

    const userid = window.location.href.split("/").pop()

    db.ref().child("restaurants").child(userid).push()

    db.ref("restaurants")
      .child(userid)
      .push({
        rest_name: rest_name.value,
        address: address.value,
        created_on: Date.parse(new Date()),
        seating_occupancy: seating.value,
        menus: [],
      })

    this.cancel();
  }

  render() {
    // console.log('rfom inside',this.state.restaurants);
    return (
      <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
        <h2> My Restaurants </h2>
        <div style={{ display:"flex", flexWrap: "wrap" }}>
          {
            this.state.restaurants.length &&
            (this.state.restaurants.map((currRest, ind) => {
              return (
                <Card
                key = {ind}
                  style={{
                    width: "30%",
                    height: "250px",
                    boxShadow: "#f3f3f3 5px 5px 5px 5px",
                    margin: "10px",
                    overflow: "auto",
                  }}
                >
                  <div style={{ padding: "5%", height: "50%" }}>
                    <h4 style={{ color: "#fd795a" }}> {currRest.rest_name} </h4>
                    <h4 style={{ color: "#fd795a" }}> {currRest.address} </h4>
                  </div>
                  <div
                    style={{
                      padding: "5%",
                      backgroundColor: "#edf4ff",
                      height: "100%",
                    }}
                  >
                    <h4> Menus </h4>
                    <p> Summer Menu </p>
                    <p> Late Night Menu </p>
                  </div>
                </Card>
              )
            })
          )
          }

          <Card
            style={{
              width: "30%",
              height: "250px",
              backgroundColor: "#edf4ff",
              boxShadow: "#f3f3f3 5px 5px 5px 5px",
              margin: "10px",
              overflow: "auto",
            }}
          >
            {this.state.open === false && (
              <div className="text-center" style={{ paddingTop: "20%" }}>
                <a onClick={this.update}>
                  <img
                    src={add}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                    alt="add-rest"
                  />
                </a>
              </div>
            )}
            {this.state.open === true && (
              <Form style={{ margin: "5%" }} onSubmit={this.addRestaurant}>
                <Button style={{ float: "right" }} onClick={this.cancel}>
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
                  <Input name="seating" type="text" placeholder="e.g. 50 " />
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
        </div>
      </div>
    );
  }
}

export default OwnerRestaurants;