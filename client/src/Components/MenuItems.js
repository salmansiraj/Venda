import React, { Component } from 'react';
import { Card, Button } from "reactstrap";
import trash from "../Assets/trash.png";
import edit from "../Assets/edit.png";
import burger from "../Assets/burger.png";


class MenuItems extends Component {

  addCategory = () => { 
      window.location.href = "/addCategory"
      // Should be addCategory?to={menuName}
  }

  addItem = () => { 
      window.location.href = "/addItem"
      // Should be /addItem?to={menuName}
  }

  render() {

    return (
      <div style={{ paddingLeft: "5%", backgroundColor: "#f8f9fa" }}>

        <div style={{ float: "right" }}>
          <Button onClick={this.addCategory} style={{ backgroundColor: "#3b6597" }}> Add Category </Button> 
          <Button onClick={this.addItem} style={{ margin: "20px", backgroundColor: "#3b6597" }}> Add Item </Button>
        </div>
        <br />
        <h2> Categories </h2>
        <div style={{ display: "flex" }}>
          <Card
            style={{
              width: "33%",
              height: "250px",
              boxShadow: "#f3f3f3 5px 5px 5px 5px",
              margin: "10px",
              overflow: "auto",
              display: "-webkit-inline-box",
            }}
          >
            <div style={{ padding: "5%", width: "50%", height: "100%" }}>
              <img
                src={burger}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt="burger-example"
              />
            </div>
            <div
              style={{
                padding: "5%",
                backgroundColor: "#edf4ff",
                width: "50%",
                height: "100%",
              }}
            >
              <div style={{ float: "right" }}>
                <img
                  src={edit}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "15px",
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
              </div>
              <br />
              <br />
              <h5> Item Name </h5>
              <p> Description </p>
              <p> Price </p>
              <p> Tag </p>
            </div>
          </Card>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 0 100% 0",
          }}
        ></div>
      </div>
    );
  }
}

export default MenuItems;