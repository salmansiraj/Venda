import React, { Component } from 'react';
import add from "../Assets/add.png";
import qrCode from "../Assets/qr-code.png";
import { Card, Form, FormGroup, Input, Label, Button } from "reactstrap";
import "../App.css"
import db from '../Firebase/firebaseDB';


class OwnerMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menus: []
    };
    window.addEventListener("model", this.update);
  }

  // componentDidMount() { 
  //   db.ref("menus")
  //     .child(window.location.href.split("/").pop())
  //     .on(
  //       "value",
  //       (snapshot) => {
  //         let snapVals = snapshot.val();
  //         let valArray = Object.keys(snapVals).map((key) => {
  //           return snapVals[key];
  //         });
  //         this.setState({
  //           menus: valArray,
  //         });

  //         console.log(this.state.menus);
  //       },
  //       (error) => {
  //         alert(error);
  //       }
  //     )
  // }

  update = () => {
    this.setState({ open: true });
  };

  cancel = () => {
    this.setState({ open: false });
  };

  // addMenu = (e) => { 
  //   e.preventDefault();
  //   const { menu_name } = e.target.elements;

  //   const userid = window.location.href.split("/").pop();

  // }

  render() {
    return (
      <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
        <h2> My Menus </h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.menus.length && 
            (this.state.menus.map((currMenu, ind) => { 
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
                  <div style={{ padding: "5%", height: "40%" }}>
                    <h4>
                      <a href={"menupage"} style={{ color: "midnightblue" }}>
                        {currMenu.menu_name}
                      </a>
                    </h4>
                    <p> Scans: </p>
                  </div>
                  <div
                    className="text-center"
                    style={{
                      padding: "5%",
                      backgroundColor: "#edf4ff",
                      height: "100%",
                    }}
                  >
                    <h5 style={{ padding: "5px", color: "#fd795a" }}>
                      {" "}
                      Download QR Code{" "}
                    </h5>
                    <img
                      src={qrCode}
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                      alt="qrCode"
                    />
                  </div>
                </Card>
              );
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
                  <Label style={{ color: "midnightblue" }}> Menu Name </Label>
                  <Input type="text" placeholder="e.g. Summer Menu"></Input>
                  <Button
                    style={{
                      marginTop: "20px",
                      backgroundColor: "midnightblue",
                    }}
                  >
                    {" "}
                    Create Menu{" "}
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

export default OwnerMenus;