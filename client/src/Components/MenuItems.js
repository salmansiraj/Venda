import React, { Component } from 'react';
import add from "../Assets/add.png";
import { Card } from "reactstrap";
import trash from "../Assets/trash.png";
import edit from "../Assets/edit.png";
import burger from "../Assets/burger.png";


class MenuItems extends Component {
    render() {
        return (
          <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
            <h5> Category </h5>
            <div style={{ display: "flex" }}>
              <Card
                style={{
                  width: "33%",
                  height: "250px",
                  boxShadow: "#f3f3f3 5px 5px 5px 5px",
                  margin: "10px",
                  overflow: "auto",
                  display: "-webkit-inline-box",
                }}
              >
                <div style={{ padding: "5%", width: "50%", height: "100%" }}>
                  <img
                    src={burger}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    alt="burger-example"
                  />
                </div>
                <div
                  style={{
                    padding: "5%",
                    backgroundColor: "#edf4ff",
                    width: "50%",
                    height: "100%",
                  }}
                >
                  <div style={{ float: "right" }}>
                    <img
                      src={edit}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "15px",
                      }}
                      alt="edit"
                    />
                    <img
                      src={trash}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      alt="delete"
                    />
                  </div>
                  <br />
                  <br />
                  <h5> Item Name </h5>
                  <p> Description </p>
                  <p> Price </p>
                  <p> Tag </p>
                </div>
              </Card>

              <Card
                style={{
                  width: "30%",
                  height: "250px",
                  backgroundColor: "#edf4ff",
                  boxShadow: "#f3f3f3 5px 5px 5px 5px",
                  margin: "10px",
                }}
              >
                <div className="text-center" style={{ paddingTop: "20%" }}>
                  <img
                    src={add}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                    alt="add-rest"
                  />
                </div>
              </Card>
            </div>

            <div
              style={{
                width: "100%",
                height: "100px",
              }}
            ></div>
          </div>
        );
    }
}

export default MenuItems;