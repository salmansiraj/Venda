import React, { Component } from 'react';
import add from "../Assets/add.png";
import qrCode from "../Assets/qr-code.png";
import { Button } from "reactstrap";
import { Card } from "reactstrap";

class OwnerMenus extends Component {
    render() {
        return (
          <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
            <h2> My Menus </h2>
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

                  <div style={{ padding: "5%", height: "40%" }}>
                    <h4> <a href={"menupage"}  style={{color: "midnightblue"}}> Menu Name </a> </h4>
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
                    <h5 style={{padding: "5px", color: "#fd795a"}}> Download QR Code </h5>
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

              <Card
                style={{
                  width: "33%",
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
          </div>
        );
    }
}

export default OwnerMenus;