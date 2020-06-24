import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import logo from "../Assets/logo.png";
import sidepic from "../Assets/sidepic.jpg";


class Login extends Component {
    render() {
        return (
          <Card
            className="card-group"
            style={{
              margin: "4%",
              borderRadius: "20px",
              boxShadow: "#f3f3f3 5px 10px",
            }}
          >
            <div
              className="container"
              style={{ width: "45%", borderRadius: "20px" }}
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
              <br />

              <Form className="login-form">
                <h2 className="text-center">
                  <span
                    style={{ textShadow: "#f3f3f3 5px 5px" }}
                    className="font-weight-bold"
                  >
                    {" "}
                    Sign In{" "}
                  </span>
                </h2>

                <FormGroup>
                  <Label> Username </Label>
                  <Input
                    type="username"
                    placeholder="Username"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  />
                </FormGroup>

                <FormGroup>
                  <Label> Password </Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  />
                </FormGroup>

                <br />
                <Button
                  className="btn-lg btn-block btn-info"
                  style={{ boxShadow: "#f3f3f3 5px 5px" }}
                >
                  Sign In
                </Button>

                <br />
                <div className="text-center">
                  <span className="p-2"> Are you a new user? </span>
                  <a href="/register"> Register </a>
                </div>
                <br />
              </Form>
            </div>

            <div
              className="container"
              style={{
                width: "55%",
                padding: "0",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <img
                src={sidepic}
                className="text-center"
                style={{
                  height: "100%",
                  width: "100%",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
                alt=""
              />
            </div>
          </Card>
        );
    }
}

export default Login;