import React, { Component } from "react";
import AppNavbar from "../AppNavbar";
import { Card, FormGroup, Form, Label, Input } from "reactstrap";
import db from "../../Firebase/firebaseDB";

class AddCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: "",
      currMenu: "",
    };
  }

  componentDidMount() {
    let link = window.location.href.split("/");
    this.setState({
      currUser: link[link.length - 1],
      currMenu: link[link.length - 2],
      currRest: link[link.length - 3],
    });
  }

  goBack = () => {
    window.location.href =
      "/menupage/" +
      this.state.currRest +
      "/" +
      this.state.currMenu +
      "/" +
      this.state.currUser;
  };

  addCategoryToMenu = (e) => {
    e.preventDefault();
    const { categoryName } = e.target.elements;
    console.log(categoryName.value);

    if (this.state.currMenu !== "") {
      try {
        db.ref("categories").child(this.state.currMenu).push();

        db.ref("categories")
          .child(this.state.currMenu)
          .push({
            added_on: Date.parse(new Date()),
            categoryName: categoryName,
          });
      } catch {
        db.ref("categories")
          .child(this.state.currMenu)
          .push({
            added_on: Date.parse(new Date()),
            categoryName: categoryName.value,
          });
      }
    }

    window.location.reload();
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <div
          style={{
            width: "100%",
            padding: "0 0 100% 0",
            backgroundColor: "#042143",
          }}
        >
          <h3
            className="text-center"
            style={{ color: "white", paddingTop: "2%" }}
          >
            {" "}
            Currently adding new category to: Lunch Menu{" "}
          </h3>
          <Card
            style={{
              marginLeft: "15%",
              marginRight: "15%",
              marginTop: "5%",
              height: "300px",
              padding: "50px",
              borderRadius: "40px",
              boxShadow: "#dce9ff 5px 5px 5px 5px",
            }}
          >
            <button
              onClick={this.goBack}
              style={{ width: "100px", placeSelf: "flex-end" }}
              type="button"
              className="btn btn-sm btn-outline-danger"
            >
              {" "}
              cancel{" "}
            </button>
            <br />
            <Form onSubmit={this.addCategoryToMenu}>
              <FormGroup>
                <Label> Category Name </Label>
                <Input
                  name="categoryName"
                  type="text"
                  placeholder="e.g. Lunch"
                />
              </FormGroup>
              <button type="submit" className="btn btn-info">
                {" "}
                Add Category{" "}
              </button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default AddCategoryPage;
