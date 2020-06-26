import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Nav, Form } from "react-bootstrap"
import logo from "../Assets/logo.png";
import OwnerRestaurants from './OwnerRestaurants';


class AppNavbar extends Component {
    render() {
        return (
          <Navbar variant="light">
            <Navbar.Brand href="/homepage">
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
              <Nav.Link href="/homepage"
              style={{color: "#002141" }}
              > Dashboard </Nav.Link>
              <Nav.Link href="settings/profile"
              style={{color: "#002141" }}
              > Settings </Nav.Link>
            </Nav>
            <Form inline>
              <Nav.Link 
                href="login"
                style={{color: "#002141" }}
              > Sign Out</Nav.Link>
            </Form>
          </Navbar>
        );
    }
}

export default AppNavbar;