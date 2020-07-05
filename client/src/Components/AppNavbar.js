import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form } from "react-bootstrap";
import logo from "../Assets/logo.png";
import app from "../Firebase/base";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: "",
    };
  }

  componentDidMount() {
    let page = window.location.href.split("/");
    this.setState({
      currUser: page[page.length - 1],
    });
  }

  render() {
    return (
      <Navbar variant="light">
        <Navbar.Brand href={"/homepage/" + this.state.currUser}>
          <img
            src={logo}
            style={{
              width: "160px",
              height: "45px",
            }}
            alt="login"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            href={"/homepage/" + this.state.currUser}
            style={{ color: "#002141" }}
          >
            {" "}
            Dashboard{" "}
          </Nav.Link>
          <Nav.Link
            href={"/settings/" + this.state.currUser}
            style={{ color: "#002141" }}
          >
            {" "}
            Settings{" "}
          </Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link href="login" style={{ color: "#002141" }}>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
          </Nav.Link>
        </Form>
      </Navbar>
    );
  }
}

export default AppNavbar;
