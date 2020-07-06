import React, { Component } from "react";
import AppNavbar from "../AppNavbar";
import { Card, FormGroup, Form, Label, Input } from "reactstrap";

class AddItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: "",
      currMenu: "",
      menuSet: [],
      spicy: false,
      vegan: false,
    };

    /* 
        menuSet =   {
                        "category_id": {
                            "item_id" : { 
                                item data ...
                            },

                            "item_id" : {
                                item data ...
                            }
                        },
                        "category_id": {
                            "item_id" : {
                                item data ...
                            }
                        }
                    }
    */
  }

  handleSpicy = () => {
    this.setState({
      spicy: !this.state.spicy,
    });
  };

  handleVegan = () => {
    this.setState({
      vegan: !this.state.vegan,
    });
  };

  componentDidMount() {
    let link = window.location.href.split("/");
    this.setState({
      currUser: link[link.length - 1],
      currMenu: link[link.length - 2],
      currRest: link[link.length - 3],
    });

    // Addingg Category name and it's id
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

  addItemToMenu = (e) => {
    e.preventDefault();
    const { itemMenu, description, price, spicy, vegan } = e.target.elements;
    console.log(
      itemMenu.value,
      description.value,
      price.value,
      spicy.value,
      vegan.value
    );

    if (spicy === true) {
      if (vegan === true) {
      }
    } else {
    }
  };

  addItemToMenuHelper = () => {};

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
            Currently adding new item to: Category_name{" "}
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
              height: "fit-content",
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
            <Form onSubmit={this.addItemToMenu}>
              <FormGroup>
                <Label> Item Name </Label>
                <Input
                  name="itemMenu"
                  type="text"
                  placeholder="e.g. Beef Brisket Burger"
                />
              </FormGroup>
              <br />

              <FormGroup>
                <Label> Item Description </Label>
                <Input
                  name="description"
                  type="text"
                  placeholder="e.g. Lean, 100% grass fed beef with onions, pickles, and brioche buns"
                />
              </FormGroup>
              <br />

              <FormGroup>
                <Label> Item Price </Label>
                <Input
                  name="price"
                  type="number"
                  placeholder="$0.00"
                  min="0.00"
                  step="0.01"
                />
              </FormGroup>

              <br />
              <FormGroup>
                <Label> Food Tags </Label>
                <p className="text-muted" style={{ fontSize: "smaller" }}>
                  {" "}
                  Tags to help people identify foods they are allergic or
                  sensitive to, as well as to choose his/her own preferable
                  foods{" "}
                </p>
                <div className="form-check form-check-inline">
                  <Label className="form-check-label" htmlFor="inlineCheckbox1">
                    {" "}
                    Spicy{" "}
                  </Label>
                  <Input
                    name="spicy"
                    className="form-check-Input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value={this.state.spicy}
                    onChange={this.handleSpicy}
                  />
                </div>
                <div className="form-check form-check-inline">
                  <Label className="form-check-label" htmlFor="inlineCheckbox2">
                    {" "}
                    Vegan{" "}
                  </Label>
                  <Input
                    name="vegan"
                    className="form-check-Input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value={this.state.vegan}
                    onChange={this.handleVegan}
                  />
                </div>
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

export default AddItemPage;
