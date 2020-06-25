import React, { Component } from 'react';

import { Form, Button, Col } from "react-bootstrap";
import { FormGroup, Label, Input, Card } from "reactstrap";

import logo from "../Assets/logo.png";
import next from "../Assets/next.png";
import RightSideImage from './RightSideImage';

class Register extends Component {
  render() {
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
              <Label> Full Name </Label>
              <Input
                type="name"
                placeholder="e.g. John Adams"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
              />
            </FormGroup>

            <FormGroup>
              <Form.Row>
                <Col>
                  <Label> Username </Label>
                  <Input
                    type="username"
                    placeholder="Username"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  />
                </Col>
                <Col>
                  <Label> Password </Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  />
                </Col>
              </Form.Row>
            </FormGroup>

            <FormGroup>
              <Label> Email </Label>
              <Input
                type="email"
                placeholder="your@email.com"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
              />
            </FormGroup>

            <br />
            <Button
              className="btn-lg btn-block btn-info"
              style={{ boxShadow: "#f3f3f3 5px 5px" }}
            >
              Next
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
        <RightSideImage />
      </Card>
    );
  }
}

export default Register;