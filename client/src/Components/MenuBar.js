import React, { Component } from 'react';
import { Button } from "reactstrap";

class MenuBar extends Component {
    render() {
        return (
          <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
            <h2> Menu Name
                <div style={{float: "right"}}>
                    <Button style={{margin: "5px", backgroundColor: "#dce9ff", color: "#052545", fontWeight: "600"}}> Edit </Button>
                    <Button style={{ backgroundColor: "#dce9ff", color: "#052545", fontWeight: "600"}}> Delete </Button>
                </div>
            </h2>
          </div>
        );
    }
}

export default MenuBar;