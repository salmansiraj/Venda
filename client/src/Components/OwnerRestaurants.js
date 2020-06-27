import React, { Component } from 'react';
import add from "../Assets/add.png";

import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";

class OwnerRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    window.addEventListener("model", this.update);
  }

  update = () => {
    this.setState({ open: true });
  };

  cancel = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
        <h2> My Restaurants </h2>
        <div style={{ display: "flex" }}>
          <Card
            style={{
              width: "33%",
              height: "250px",
              boxShadow: "#f3f3f3 5px 5px 5px 5px",
              margin: "10px",
              overflow: "auto",
            }}
          >
            <div style={{ padding: "5%", height: "50%" }}>
              <h4 style={{ color: "#fd795a" }}> Restaurant Name </h4>
              <h4 style={{ color: "#fd795a" }}> Address </h4>
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

          <Card
            style={{
              width: "33%",
              height: "250px",
              backgroundColor: "#edf4ff",
              boxShadow: "#f3f3f3 5px 5px 5px 5px",
              margin: "10px",
              overflow: "auto"
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
              <Form style={{ margin: "5%" }}>
                <Button style={{ float: "right" }} onClick={this.cancel}>
                  {" "}
                  x{" "}
                </Button>
                <br />
                <br />
                <FormGroup>
                  <Label style={{ color: "midnightblue" }}>
                    {" "}
                    Restaurant Name{" "}
                  </Label>
                  <Input
                    type="text"
                    placeholder="e.g. Joe's Pizza Shop"
                  ></Input>
                  
                  <Label style={{ color: "midnightblue" }}> Address </Label>
                  <Input type="text" placeholder="e.g. 412 "></Input>
                  <Button
                    style={{
                      marginTop: "20px",
                      backgroundColor: "midnightblue",
                    }}
                  >
                    {" "}
                    Create Restaurant{" "}
                  </Button>
                </FormGroup>
              </Form>
            )}
          </Card>
        </div>
      </div>
    );
  }
}

export default OwnerRestaurants;