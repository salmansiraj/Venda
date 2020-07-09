import React, { Component } from "react";
import {
  Card,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";
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
      editClicked: false,
      dataToEdit: "",
    };
  }

  async componentDidMount() {
    if (this.props.menuObj !== "n/a") {
      // Testing the menuList
      let menuObj = await Promise.all(this.props.menuObj);
      // console.log(menuObj);
      this.setState({ menuObj: menuObj });
    } else {
      this.setState({ menuObj: [] });
    }

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

  updateDelete = (currCategory, obj, ind) => {
    // console.log("update function", currCategory, obj);
    if (window.confirm("Are you sure you want to delete this item?")) {
      Object.keys(currCategory.menuItems).map((key) => {
        // console.log(currCategory.menuItems[key]);
        if (currCategory.menuItems[key] === obj) {
          let currJson = db
            .ref("menu-items")
            .child(currCategory.categoryId)
            .child(key);
          currJson.remove();
        }
      });
    }
    window.location.reload();
  };

  updateEdit = (currCategory, obj) => {
    this.setState({ editClicked: true, dataToEdit: [currCategory, obj] });
    // console.log("update function", currCategory, obj);
  };

  editRender = () => {
    // console.log(this.state.dataToEdit);
    let currItem = this.state.dataToEdit[1];
    return (
      <Card style={{ padding: "3%", marginLeft: "20%" }}>
        <button
          onClick={() => {
            this.setState({ editClicked: false });
          }}
          style={{ width: "100px", placeSelf: "flex-end" }}
          type="button"
          className="btn btn-sm btn-outline-danger"
        >
          {" "}
          cancel{" "}
        </button>
        <h3 style={{ textAlign: "center", fontWeight: "700" }}>
          {" "}
          Editing Menu Item
        </h3>
        <p className="text-muted text-center" style={{ fontSize: "smaller" }}>
          Leave input field blank if you choose not to change that specific
          context...
        </p>
        <Form onSubmit={this.changeItemData}>
          <FormGroup>
            <Row>
              <Col>
                <p style={{ fontWeight: "300" }}>
                  {" "}
                  <b> Current Item Name: </b>
                  {currItem.item_name}
                  <br />
                  <b> Current Description: </b>
                  {currItem.description}
                  <br />
                  <b> Current Price: </b>${currItem.price}
                </p>
              </Col>
              <Col>
                <Label> New Item Name </Label>
                <Input name="newItem" type="text" />

                <Label> New Description </Label>
                <Input name="newDesc" type="text" />
                <Label> New Price </Label>
                <Input
                  name="newPrice"
                  type="number"
                  placeholder="$0.00"
                  min="0.00"
                  step="0.01"
                />
              </Col>
            </Row>
            <button
              className="btn btn-block btn-outline-info"
              style={{
                marginTop: "15px",
              }}
            >
              Edit Item
            </button>
          </FormGroup>
        </Form>
      </Card>
    );
  };

  changeItemData = (e) => {
    e.preventDefault();
    const { newItem, newDesc, newPrice } = e.target.elements;
    let currCategory = this.state.dataToEdit[0];
    let obj = this.state.dataToEdit[1];
    // console.log(currCategory, obj);

    Object.keys(currCategory.menuItems).map((key) => {
      if (currCategory.menuItems[key] === obj) {
        let currJson = db
          .ref("menu-items")
          .child(currCategory.categoryId)
          .child(key);
        if (newItem.value !== "") {
          currJson.update({
            item_name: newItem.value,
          });
        }
        if (newDesc.value !== "") {
          currJson.update({
            description: newDesc.value,
          });
        }
        if (newPrice.value !== "") {
          currJson.update({
            price: newPrice.value,
          });
        }
      }
    });
    window.location.reload();
  };

  addCategory = () => {
    let link = window.location.href.split("/");
    let userid = link[link.length - 1];
    let menuid = link[link.length - 2];
    let restid = link[link.length - 3];

    window.location.href =
      "/addCategory/" + restid + "/" + menuid + "/" + userid;
    // Should be addCategory?to={menuName}
  };

  addItem = () => {
    let link = window.location.href.split("/");
    let userid = link[link.length - 1];
    let menuid = link[link.length - 2];
    let restid = link[link.length - 3];

    window.location.href = "/addItem/" + restid + "/" + menuid + "/" + userid;
    // Should be /addItem?to={menuName}
  };

  render() {
    // console.log(this.props);
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
        {this.state.editClicked === true && this.editRender()}

        {this.props.menuObj !== "n/a" &&
          this.state.menuObj.map((currCategory, ind) => {
            // console.log(currCategory["categoryDetails"].categoryName);
            // console.log(currCategory["menuItems"]);
            return (
              <div>
                <h3 style={{ fontWeight: "700" }}>
                  {currCategory["categoryDetails"].categoryName}
                </h3>
                <hr />
                <div
                  style={{
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  key={ind}
                >
                  {currCategory["menuItems"]
                    ? Object.keys(currCategory["menuItems"]).map((key, ind) => {
                        let obj = currCategory["menuItems"][key];
                        // console.log(obj.item_image);
                        // console.log(obj);
                        // console.log(currCategory)
                        return (
                          <>
                            <Card
                              style={{
                                width: "48%",
                                height: "250px",
                                boxShadow: "#f3f3f3 5px 5px 5px 5px",
                                margin: "10px",
                                overflow: "auto",
                                display: "-webkit-inline-box",
                              }}
                            >
                              <div
                                style={{
                                  width: "50%",
                                  height: "100%",
                                }}
                              >
                                <img
                                  src={obj.item_image}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                  }}
                                  alt="item-image"
                                />
                              </div>
                              <div
                                style={{
                                  padding: "2% 5% 0 5%",

                                  backgroundColor: "#edf4ff",
                                  width: "50%",
                                  height: "100%",
                                  overflowY: "auto",
                                }}
                              >
                                <div style={{ float: "right" }}>
                                  <Button
                                    style={{
                                      background: "none",
                                      border: "none",
                                    }}
                                    onClick={() => {
                                      this.updateEdit(currCategory, obj);
                                    }}
                                  >
                                    <img
                                      src={edit}
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "5px",
                                      }}
                                      alt="edit"
                                    />
                                  </Button>
                                  <Button
                                    style={{
                                      background: "none",
                                      border: "none",
                                    }}
                                    onClick={() => {
                                      this.updateDelete(currCategory, obj);
                                    }}
                                  >
                                    <img
                                      src={trash}
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                      }}
                                      alt="delete"
                                    />
                                  </Button>
                                </div>
                                <br />
                                <br />
                                <h5> {obj["item_name"]}</h5>
                                <p> {obj["description"]}</p>
                                <p> ${obj["price"]}</p>
                                <p> Tags </p>
                              </div>
                            </Card>
                          </>
                        );
                      })
                    : ""}
                </div>
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
