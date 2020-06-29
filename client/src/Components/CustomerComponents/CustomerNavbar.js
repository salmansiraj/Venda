import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import { Card } from 'reactstrap';
import breakfast from "../../Assets/breakfast.jpg"
import "../../App.css";

class CustomerNavbar extends Component {

  render() {
    return (
      <div>
        <Scrollspy
          items={["section-1", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              padding: "0 0 0 0"
            }}
          >
            <button
              type="button"
              className="btn"
              style={{ background: "#fd795a", margin: "10px", borderRadius: "10px" }}
            >
              <a href="#section-1" style={{ color: "white" }}>
                {" "}
                Breakfast{" "}
              </a>
            </button>

            <button
              type="button"
              className="btn"
              style={{ background: "#fd795a", margin: "10px", borderRadius: "10px" }}
            >
              <a href="#section-2" style={{ color: "white" }}>
                {" "}
                Lunch{" "}
              </a>
            </button>
          </div>
        </Scrollspy>
        <div style={{ marginLeft: "2%", marginRight: "2%" }}>
          <section id="section-1" style={{ marginBottom: "5%" }}>
            <h5 style={{ float: "left" }}> Breakfast </h5>
            <div>
              <Card
                className="menuCard"
                style={{
                  height: "110px",
                  width: "100%",
                  boxShadow: "#f3f3f3 5px 5px 5px 5px",
                  display: "-webkit-inline-box",
                }}
              >
                <div style={{ width: "30%" }}>
                  <img
                    src={breakfast}
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "#f3f3f3 5px 5px 5px 5px",
                      borderRadius: "px",
                    }}
                    alt="burger-example"
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#edf4ff",
                    width: "70%",
                    overflow: "auto",
                    textAlignLast: "left",
                    padding: "2%",
                  }}
                >
                    <p className="cardTitle">
                    <b> Cheese Burger </b> &ensp; $15
                    </p>

                    <p style={{ fontSize: "small" }} className="text-muted cardTitle">
                        Lettuce, tomato, pickles, spicy mayo, for fries add +$5,
                        choice of sauce
                    <br />
                    </p>

                    <p
                    style={{
                        backgroundColor: "#de0302",
                        width: "fit-content",
                        borderRadius: "5px",
                        padding: "5px",
                        color: "white",
                    }}
                    > Spicy
                    </p>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CustomerNavbar;
