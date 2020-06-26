import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Form, FormGroup, Label, Input, Card, Button } from "reactstrap";

class SettingNavbar extends Component {

    billingCard = () => { 
        
    }

    passwordCard = () => {
        return (
          <Card
            style={{
              position: "absolute",
              zIndex: "1",
              width: "50%",
              height: "500px",
              marginTop: "5%",
              marginLeft: "25%",
              borderRadius: "15px",
              boxShadow: "#f3f3f3 5px 5px 5px 5px",
            }}
          >
            <div style={{ margin: "5%" }}>
              <h4 className="text-center"> Change Password </h4>
              <br />
              <Form>
                <FormGroup>
                  <Label> Current password </Label>
                  <Input
                    type="username"
                    placeholder="Username"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  />
                  <br />
                  <Label> New password </Label>
                  <Input
                    type="username"
                    placeholder="Username"
                    className="form-control"
                    style={{ boxShadow: "#f3f3f3 2px 2px" }}
                  />
                </FormGroup>
                <br />
                <Button style={{ backgroundColor: "midnightblue" }}>
                  {" "}
                  Save new password{" "}
                </Button>
              </Form>
            </div>
          </Card>
        );

    }

    profileCard = () => {
        return (
          <Card
            style={{
              position: "absolute",
              zIndex: "1",
              width: "50%",
              height: "500px",
              marginTop: "5%",
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
    }

    render() {
        return (
          <div>
            <AppNavbar />

            <div style={{ display: "flex" }}>
              <nav
                class="navbar bg-light"
                style={{ width: "100% ", height: "100vh", minHeight: "100vh" }}
              >
                <ul
                  class="navbar-nav"
                  style={{ marginLeft: "5%", marginBottom: "30%" }}
                >
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="settings/profile"
                    >
                      {" "}
                      Profile{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="settings/changePassword"
                    >
                      {" "}
                      Change Password{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="settings/billing"
                    >
                      {" "}
                      Billing{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="settings/restaurants"
                    >
                      {" "}
                      My restaurants{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <Card
                style={{
                  position: "absolute",
                  zIndex: "1",
                  width: "50%",
                  height: "500px",
                  marginTop: "5%",
                  marginLeft: "25%",
                  borderRadius: "15px",
                  boxShadow: "#f3f3f3 5px 5px 5px 5px",
                }}
              >
                <div style={{margin: "5%"}}>
                  <h4 className="text-center"> Change Password </h4><br />
                  <Form>
                    <FormGroup>
                      <Label> Current password </Label>
                      <Input
                        type="username"
                        placeholder="Username"
                        className="form-control"
                        style={{ boxShadow: "#f3f3f3 2px 2px" }}
                      />
                      <br />
                      <Label> New password </Label>
                      <Input
                        type="username"
                        placeholder="Username"
                        className="form-control"
                        style={{ boxShadow: "#f3f3f3 2px 2px" }}
                      />
                    </FormGroup>
                    <br />
                    <Button style={{ backgroundColor: "midnightblue" }}> Save new password </Button>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
        );
    }
}

export default SettingNavbar;