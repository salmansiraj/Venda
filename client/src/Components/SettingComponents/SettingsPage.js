import React, { Component } from "react";
import AppNavbar from "../AppNavbar";
import { Form, FormGroup, Label, Input, Card, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faQuestionCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import db from "../../Firebase/firebaseDB";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currCard: "",
      currUser: "",
    };
  }

  billingCard = () => {
    return (
      <Card
        style={{
          position: "absolute",
          zIndex: "1",
          width: "50%",
          height: "500px",

          marginLeft: "25%",
          borderRadius: "15px",
          boxShadow: "#f3f3f3 5px 5px 5px 5px",
          height: "fit-content",
        }}
      >
        <Form style={{ padding: "40px" }}>
          <h3 className="text-center" style={{ color: "midnightblue" }}>
            {" "}
            Billing{" "}
          </h3>
          <br />
          <p className="text-muted"> Current card on file. </p>
          <p>
            <b> Type: </b> Visa
            <br /> <b>Last 4 digits: </b> XXXX
          </p>

          <h5 style={{ color: "midnightblue", textAlign: "right" }}>
            {" "}
            Update Credit Card{" "}
          </h5>
          <div id="nav-tab-card">
            <FormGroup>
              <div className="form-group">
                <label htmlFor="username">Full name (on the card)</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Jason Kim"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card number</label>
                <div className="input-group">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Your card number"
                    className="form-control"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text text-muted">
                      <FontAwesomeIcon icon={faCreditCard} />
                    </span>
                  </div>
                </div>
              </div>
            </FormGroup>
            <div className="row">
              <div className="col-sm-8">
                <div className="form-group">
                  <label>
                    <span className="hidden-xs">Expiration</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      placeholder="MM"
                      name=""
                      className="form-control"
                      required
                    />
                    <input
                      type="number"
                      placeholder="YY"
                      name=""
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group mb-4">
                  <label
                    data-toggle="tooltip"
                    title="Three-digits code on the back of your card"
                  >
                    CVV
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </label>
                  <input
                    type="text"
                    placeholder="XXX"
                    required
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
            >
              Confirm
            </button>
          </div>
        </Form>
      </Card>
    );
  };

  editPassword = (e) => {
    e.preventDefault();
    let userid = window.location.href.split("/").pop();
    let { currPass, newPass } = e.target.elements;

    db.ref("users")
      .child(userid)
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        if (snapshot.val().password === currPass.value) {
          let userJson = db.ref("users").child(userid);
          userJson.update({
            password: newPass.value,
          });
          window.confirm("Password Successfully changed");
        }
      });
  };

  passwordCard = () => {
    return (
      <Card
        style={{
          position: "absolute",
          zIndex: "1",
          width: "50%",
          height: "500px",

          marginLeft: "25%",
          borderRadius: "15px",
          boxShadow: "#f3f3f3 5px 5px 5px 5px",
        }}
      >
        <div style={{ margin: "5%" }}>
          <h4 className="text-center"> Change Password </h4>
          <br />
          <Form onSubmit={this.editPassword}>
            <FormGroup>
              <Label> Current password </Label>
              <Input
                name="currPass"
                type="password"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
              />
              <br />
              <Label> New password </Label>
              <Input
                name="newPass"
                type="password"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
              />
            </FormGroup>
            <br />
            <Button type="submit" style={{ backgroundColor: "midnightblue" }}>
              {" "}
              Save new password{" "}
            </Button>
          </Form>
        </div>
      </Card>
    );
  };

  profileCard = () => {
    return (
      <Card
        style={{
          position: "absolute",
          zIndex: "1",
          width: "50%",
          height: "500px",

          marginLeft: "25%",
          borderRadius: "15px",
          boxShadow: "#f3f3f3 5px 5px 5px 5px",
        }}
      >
        <div style={{ margin: "5%" }}>
          <h4 className="text-center"> Profile </h4>
          <br />
          <Form>
            <FormGroup>
              <Label> Email </Label>
              <Input
                name="email"
                type="username"
                placeholder="Username"
                className="form-control"
                style={{ boxShadow: "#f3f3f3 2px 2px" }}
              />
            </FormGroup>
          </Form>
        </div>
      </Card>
    );
  };

  render() {
    console.log(this.state.page);
    return (
      <div>
        <AppNavbar page="settings" />
        <nav
          className="navbar bg-light"
          style={{ width: "100% ", height: "100vh", minHeight: "100vh" }}
        >
          <ul
            className="navbar-nav"
            style={{ marginLeft: "1%", marginBottom: "30%" }}
          >
            <Button
              onClick={() => {
                this.setState({ currCard: "profile" });
              }}
              name="profile"
              className="nav-item"
              style={{
                color: "midnightblue",
                fontWeight: "800",
                background: "none",
                border: "none",
              }}
            >
              Profile
            </Button>
            <Button
              onClick={() => {
                this.setState({ currCard: "password" });
              }}
              name="Change Password"
              className="nav-item"
              style={{
                color: "midnightblue",
                fontWeight: "800",
                background: "none",
                border: "none",
              }}
            >
              Change Password
            </Button>
            <Button
              onClick={() => {
                this.setState({ currCard: "billing" });
              }}
              className="nav-item"
              style={{
                color: "midnightblue",
                fontWeight: "800",
                background: "none",
                border: "none",
              }}
            >
              Billing
            </Button>
          </ul>
          {this.state.currCard === "profile" && this.profileCard()}
          {this.state.currCard === "" && this.profileCard()}
          {this.state.currCard === "billing" && this.billingCard()}
          {this.state.currCard === "password" && this.passwordCard()}
        </nav>
      </div>
    );
  }
}

export default SettingsPage;
