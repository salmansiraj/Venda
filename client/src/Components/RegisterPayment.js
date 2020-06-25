import React, { Component } from 'react';


import { Form, Button } from "react-bootstrap";
import { FormGroup, Label, Input, Card } from "reactstrap";

import logo from "../Assets/logo.png";
import next from "../Assets/next.png";
import RightSideImage from "./RightSideImage"

class RegisterPayment extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            widthSize: window.innerWidth
        }

        window.addEventListener("resize", this.update);
    }

    componentDidMount() { 
        this.update();
    }

    update = () => { 
        this.setState({
            widthSize: window.innerWidth
        });
    };


    render() {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams.get('name'))

        return (
          <Card className="card-group">
            <div
              className="container"
              style={{ width: "45%", borderRadius: "20px", padding: "2%" }}
            >
              <br />
              <div className="text-center">
                <img
                  src={logo}
                  style={{
                    width: "300px",
                    height: "90px",
                  }}
                  alt="login"
                />
              </div>

              <Form className="login-form" style={{ padding: "10px" }}>
                <h2 className="text-center">
                  <span
                    style={{ textShadow: "#f3f3f3 5px 5px" }}
                    className="font-weight-bold"
                  >
                    Sign In
                  </span>
                </h2>

                <FormGroup>
                  <Label for="ccn">Credit Card Number:</Label>
                  <Input
                    id="ccn"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                  ></Input>
                </FormGroup>

                <FormGroup>
                  <Label> Phone Number </Label>
                  <Input
                    type="number"
                    placeholder="e.g. 7182348274"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <div
                    class="input-group mb-3"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  >
                    <div class="input-group-prepend">
                      <label
                        class="input-group-text"
                        for="inputGroupSelect01"
                        style={{ boxShadow: "#f3f3f3 2px 2px" }}
                      >
                        Subscription
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected value="10">
                        Monthly Fee{" "}
                      </option>
                      <option value="80">Annual Fee </option>
                    </select>
                  </div>
                  <small className="form-text text-muted">
                    Chelnr Monthly Subscription is $10 and Annual subscription
                    is $80.
                  </small>
                </FormGroup>

                <br />
                <Button
                  className="btn-lg btn-block btn-info"
                  style={{ boxShadow: "#f3f3f3 5px 5px" }}
                >
                  Sign In
                  <img
                    src={next}
                    className="text-center"
                    style={{
                      height: "30px",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    alt=""
                  />
                </Button>

                <br />
                <br />
              </Form>
            </div>
            {this.state.widthSize > 1000 && <RightSideImage />}
          </Card>
        );
    }
}

export default RegisterPayment;