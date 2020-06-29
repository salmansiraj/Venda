import React, { Component } from 'react';
import { Card } from 'reactstrap';
import chelnr from "../../Assets/chelnr.png";

import CustomerNavbar from './CustomerNavbar';

class CustomerMenuPage extends Component {


    render() {
        return (
          <div
            className="text-center"
            style={{ backgroundColor: "#002141", padding: "0 0 100% 0" }}
          >
            <img
              src={chelnr}
              style={{
                width: "170px",
                height: "45px",
                marginTop: "20px",
              }}
              alt="login"
            />
            <Card
              style={{
                width: "100%:",
                marginTop: "5%",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                padding: "0 0 100% 0",
              }}
            >
              <h1 style={{ marginTop: "2%", color: "#002141" }}> McDonalds </h1>
              <h4 className="text-muted"> Menu Name </h4>
              <br />
              <CustomerNavbar />
            </Card>
          </div>
        );
    }
}

export default CustomerMenuPage;