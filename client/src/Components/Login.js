import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import logo from "../Assets/logo.png";
import RightSideImage from "./RightSideImage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthSize: window.innerWidth,
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      widthSize: window.innerWidth,
    });
  };

  render() {
    return (
      <Card className="card-group">
        <div
          className="container"
          style={{ width: "45%", borderRadius: "20px", padding: "5%" }}
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

        {this.state.widthSize > 1000 && <RightSideImage />}
      </Card>
    );
  }
}

export default Login;