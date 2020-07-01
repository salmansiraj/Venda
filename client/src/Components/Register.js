import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Form, Button, Col } from "react-bootstrap";
import { FormGroup, Label, Input, Card } from "reactstrap";
import logo from "../Assets/logo.png";
import next from "../Assets/next.png";
import { Redirect } from 'react-router-dom'
import app from "../Firebase/base";
import RightSideImage from "./RightSideImage";
import "../App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { first, last, email, password } = event.target.elements;
    console.log(first.value, last.value)
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      
      const userData = { 
        "first": first.value, 
        "last": last.value, 
        "email": email.value, 
        "password": password.value 
      }
      history.push({ 
        pathname: "/register2",
        userData: userData
      })
    } catch (error) {
      alert(error);
    }
  }, [history]);

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
            alt="login"
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

        <Form onSubmit={handleSignUp}>
          <FormGroup>
            <Form.Row>
              <Col>
                <Label> First Name </Label>
                <Input name="first" type="text" placeholder="John" />
              </Col>
              <Col>
                <Label> Last Name </Label>
                <Input name="last" type="text" placeholder="Adams" />
              </Col>
            </Form.Row>
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" />
          </FormGroup>

          <Button
            type="submit"
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
              alt="next-button"
            />
          </Button>
        </Form>
      </div>
      <RightSideImage />
    </Card>
  );
};

export default withRouter(SignUp);
