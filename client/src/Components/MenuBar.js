import React, { Component } from 'react';
import { Button } from "reactstrap";
import trash from "../Assets/trash.png";
import edit from "../Assets/edit.png";

class MenuBar extends Component {
    render() {
        return (
          <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
            <h2> Menu Name
                    <img
                      src={edit}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "15px",
                        marginLeft: "15px",
                      }}
                      alt="edit"
                    />
                    <img
                      src={trash}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      alt="delete"
                    />
            </h2>
          </div>
        )
    }
}

export default MenuBar;