import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../Firebase/base.js";
import { AuthContext } from "../Firebase/Auth.js";
import { Button, Card, Form, FormGroup, Label, Input } from "reactstrap";
import logo from "../Assets/logo.png";
import RightSideImage from "./RightSideImage";
import "../App.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/homepage/" + currentUser.uid);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser.uid);
    return <Redirect to={"/homepage/" + currentUser.uid} />;
  }

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
        <br />
        <h2 className="text-center">
          <span
            style={{ textShadow: "#f3f3f3 5px 5px" }}
            className="font-weight-bold"
          >
            Login
          </span>
        </h2>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="Email" />
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
            Log in
          </Button>
        </Form>
        <br />
        <div className="text-center">
          <span className="p-2"> Are you a new user? </span>
          <a href="/register"> Register </a>{" "}
        </div>
        <br />
      </div>
      <RightSideImage />
    </Card>
  );
};

export default withRouter(Login);