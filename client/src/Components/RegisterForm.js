import React, { Component } from 'react';

import { Form, Button, Col } from "react-bootstrap";
import { FormGroup, Label, Input } from "reactstrap";

import logo from "../Assets/logo.png";
import next from "../Assets/next.png";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      name: "",
      username: "",
      password: "",
      email: "",

      complete: false
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeFullName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  onChangeEmail = (e) => { 
      this.setState({ 
          email: e.target.value
      })
  }

  checkForm = () => { 
      return (this.state.username.length > 5 && this.state.password > 3) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
  }

  onSubmit = (e) => {
    if (this.state.name && this.checkForm()) { 
        e.preventDefault();
        const businessOwner = {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        };

        console.log(businessOwner);

        // Can change   userid or have this data added to the dB first, 
        //    and then add the rest in the next page by looking at the userid
        window.location = `/register2?name=` + this.state.name
        
    } else {
      alert("Error: Complete the form to continue!")
    }
  };

  render() {
    return (
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
                required
                type="name"
                placeholder="e.g. John Adams"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
                value={this.state.name}
                onChange={this.onChangeFullName}
            />
            </FormGroup>

            <FormGroup>
            <Form.Row>
                <Col>
                <Label> Username </Label>
                <Input
                    required
                    type="username"
                    placeholder="Username"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                </Col>
                <Col>
                <Label> Password </Label>
                <Input
                    required
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                </Col>
            </Form.Row>
            </FormGroup>

            <div className="form-group">
                <Label> Email </Label>
                <input
                required
                type="email"
                placeholder="your@email.com"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
            </div>

            <br />
            <Button
            type="submit"
            className="btn-lg btn-block btn-info"
            style={{ boxShadow: "#f3f3f3 5px 5px" }}
            onClick={this.onSubmit}
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
                alt="next-button"
            />
            </Button>

            <br />
            <br />
        </Form>
    </div>
    );
  }
}