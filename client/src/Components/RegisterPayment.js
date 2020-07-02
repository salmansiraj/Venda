import React, { Component } from 'react';

import { Form, Button } from "react-bootstrap";
import { FormGroup, Label, Input, Card } from "reactstrap";

import logo from "../Assets/logo.png";
import next from "../Assets/next.png";
import RightSideImage from "./RightSideImage"
import "../App.css";
import db from "../Firebase/firebaseDB";


class RegisterPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creditNumber: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      subscription: "",
    };
  }

  componentDidMount() {
    try {
      if (this.props.location.userData) {
        this.setState({
          firstName: this.props.location.userData.first,
          lastName: this.props.location.userData.last,
          email: this.props.location.userData.email,
          password: this.props.location.userData.password,
        });
      } else {
        window.location = "/register"
      }
    } catch (error) {
      alert(error);
    }
  }

  handleChange = (e) => {
    this.setState({ subscription: e.target.value });
  };

  handleCreditCard = (e) => {
    this.setState({ creditNumber: e.target.value });
  };

  handlePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  signupComplete = (e) => {
    e.preventDefault();
    if (this.state.creditNumber && this.state.phoneNumber && this.state.subscription) {
        // Add the state to the database now
        db.ref('users').push(this.state);

      window.location = "/homepage"
    } else {
      alert("Please fill out the fields to proceed!");
    }
  };

  render() {
    // console.log(this.state);
    return (
      <Card className="card-group">
        <div
          className="signupCard"
          style={{ width: "50%", borderRadius: "20px", padding: "2%" }}
        >
          <br />
          <div className="text-center">
            <img
              src={logo}
              style={{
                width: "300px",
                height: "90px",
              }}
              alt="signup"
            />
          </div>
          <h2 className="text-center">
            <span
              style={{ textShadow: "#f3f3f3 5px 5px" }}
              className="font-weight-bold"
            >
              Sign In
            </span>
          </h2>

          <Form onSubmit={this.signupComplete}>
            <FormGroup>
              <Label>Credit Card Number:</Label>
              <Input
                name="cardNum"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={this.handleCreditCard}
                required
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label> Phone Number </Label>
              <Input
                name="phoneNum"
                placeholder="e.g. 7182348274"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
                onChange={this.handlePhoneNumber}
                required
              />
            </FormGroup>

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label> Subscription Type </Form.Label>
              <Form.Control
                as="select"
                placeholder="Choose your subscription"
                value={this.state.subscription}
                onChange={this.handleChange}
              >
                <option></option>
                <option> Monthly ($10) </option>
                <option> Annual ($80) </option>
              </Form.Control>
            </Form.Group>

            <br />
            <Button
              className="btn-lg btn-block btn-info"
              style={{ boxShadow: "#f3f3f3 5px 5px" }}
              type="submit"
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
          </Form>
        </div>
        <RightSideImage />
      </Card>
    );
  }
}

export default RegisterPayment;