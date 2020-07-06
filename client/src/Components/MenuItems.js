import React, { Component } from "react";
import { Card, Button } from "reactstrap";
import trash from "../Assets/trash.png";
import edit from "../Assets/edit.png";
import burger from "../Assets/burger.png";
import db from "../Firebase/firebaseDB";

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      menuid: "",
      restid: "",
      menuObj: [],
    };
  }

  async componentDidMount() {
    let menuObj = await Promise.all(this.props.menuObj);
    console.log(menuObj);
    this.setState({ menuObj: menuObj });

    // Testing the menuList
    this.state.menuObj.map((currCategory) => {
      console.log(currCategory["categoryDetails"].categoryName);
      console.log(currCategory["menuItems"]);
    });

    let link = window.location.href.split("/");
    let userid = link[link.length - 1];
    let menuid = link[link.length - 2];
    let restid = link[link.length - 3];

    // console.log(this.state.menuid);

    this.setState({
      userid: userid,
      menuid: menuid,
      restid: restid,
    });
  }

  addCategory = () => {
    window.location.href =
      "/addCategory/" +
      this.state.currRest +
      "/" +
      this.state.currMenu +
      "/" +
      this.state.currUser;
    // Should be addCategory?to={menuName}
  };

  addItem = () => {
    window.location.href =
      "/addItem/" +
      this.state.currRest +
      "/" +
      this.state.currMenu +
      "/" +
      this.state.currUser;
    // Should be /addItem?to={menuName}
  };

  render() {
    console.log(this.props);
    return (
      <div style={{ paddingLeft: "2%", backgroundColor: "#f8f9fa" }}>
        <div style={{ float: "right" }}>
          <Button
            onClick={this.addCategory}
            style={{ backgroundColor: "#3b6597" }}
          >
            {" "}
            Add Category{" "}
          </Button>
          <Button
            onClick={this.addItem}
            style={{ margin: "20px", backgroundColor: "#3b6597" }}
          >
            {" "}
            Add Item{" "}
          </Button>
        </div>
        <br />
        <h2 style={{ fontWeight: "800" }}> Categories </h2>
        {this.state.menuObj.map((currCategory, ind) => {
          // console.log(currCategory["categoryDetails"].categoryName);
          // console.log(currCategory["menuItems"]);
          return (
            <div style={{ paddingLeft: "2%", marginTop: "2%" }} key={ind}>
              <h4> {currCategory["categoryDetails"].categoryName} </h4>
              {currCategory["menuItems"]
                ? Object.keys(currCategory["menuItems"]).map((key, ind) => {
                    let obj = currCategory["menuItems"][key];
                    console.log(obj);
                    return (
                      // <div key={ind}>
                      //   <p> {obj["item_name"]}</p>
                      //   <p> {obj["description"]}</p>
                      //   <p> {obj["price"]}</p>
                      // </div>
                      <div key={ind} style={{ display: "flex" }}>
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
                          <div
                            style={{
                              padding: "5%",
                              width: "50%",
                              height: "100%",
                            }}
                          >
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
                              overflowY: "auto",
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
                            <h5> {obj["item_name"]}</h5>
                            <p> {obj["description"]}</p>
                            <p> {obj["price"]}</p>
                            <p> Tags </p>
                          </div>
                        </Card>
                      </div>
                    );
                  })
                : ""}
            </div>
          );
        })}
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
