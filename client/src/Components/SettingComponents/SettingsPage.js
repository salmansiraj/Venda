import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Form, FormGroup, Label, Input, Card, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faQuestionCircle, faWindowClose} from "@fortawesome/free-solid-svg-icons";

class SettingsPage extends Component {

    billingCard = () => { 
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
              <div id="nav-tab-card" class="tab-pane fade show active">
                <FormGroup>
                  <div class="form-group">
                    <label for="username">Full name (on the card)</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Jason Kim"
                      required
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="cardNumber">Card number</label>
                    <div class="input-group">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Your card number"
                        class="form-control"
                        required
                      />
                      <div class="input-group-append">
                        <span class="input-group-text text-muted">
                          <FontAwesomeIcon icon={faCreditCard} />
                        </span>
                      </div>
                    </div>
                  </div>
                </FormGroup>
                <div class="row">
                  <div class="col-sm-8">
                    <div class="form-group">
                      <label>
                        <span class="hidden-xs">Expiration</span>
                      </label>
                      <div class="input-group">
                        <input
                          type="number"
                          placeholder="MM"
                          name=""
                          class="form-control"
                          required
                        />
                        <input
                          type="number"
                          placeholder="YY"
                          name=""
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group mb-4">
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
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
                >
                  Confirm
                </button>
              </div>
            </Form>
          </Card>
        );
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
                  style={{ marginLeft: "1%", marginBottom: "30%" }}
                >
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="profile"
                    >
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="changePassword"
                    >
                      {" "}
                      Change Password{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="billing"
                    >
                      {" "}
                      Billing{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={{ color: "midnightblue", fontWeight: "800" }}
                      href="restaurants"
                    >
                      {" "}
                      My restaurants{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              {window.location.href.split('/').pop() === 'profile' && this.profileCard()}
              {window.location.href.split('/').pop() === 'billing' && this.billingCard()}
              {window.location.href.split('/').pop() === 'changePassword' && this.passwordCard()}
            </div>
          </div>
        );
    }
}

export default SettingsPage;