import React, { Component } from 'react';

import { Card } from "reactstrap";

class ProfileCard extends Component {
    render() {
        return (
          <div>
            <Card
              className="text-center"
              style={{
                position: "absolute",
                zIndex: "1",
                width: "50%",
                height: "500px",
                marginBottom: "5%",
                marginRight: "25%",
                borderRadius: "15px",
                boxShadow: "#f3f3f3 5px 5px 5px 5px",
              }}
            >
              Hello
            </Card>
          </div>
        );
    }
}

export default ProfileCard;