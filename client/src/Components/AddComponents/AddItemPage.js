import React, { Component } from "react";
import AppNavbar from "../AppNavbar";
import { Card, FormGroup, Form, Label, Input, Button } from "reactstrap";
import { Image, ProgressBar, Col } from "react-bootstrap";
import storage from "../../Firebase/firebaseStorage";
import defaultImage from "../../Assets/default.jpg";
import db from "../../Firebase/firebaseDB";

class AddItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: "",
      currMenu: "",
      menuSet: [],
      spicy: false,
      vegan: false,
      image: null,
      progress: 0,
      url: "",
      currCategories: [],
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

  handleProfileChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({
        image,
      }));
    }
  };

  handleProfileUpload = () => {
    if (this.state.image) {
      const { image } = this.state;
      const uploadTask = storage.ref(`Desktop/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        (error) => {
          // error function
          console.log(error);
        },
        () => {
          // complete function
          storage
            .ref("Desktop")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({
                url,
                progress: 0,
              });
            });
        }
      );
    } else {
      alert("Error: Image not uploaded. Please try again!");
    }
  };

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

  async componentDidMount() {
    let link = window.location.href.split("/");
    let currCategories = [];
    db.ref("categories")
      .child(link[link.length - 2])
      .on("value", async (snapshot) => {
        console.log(snapshot.val());
        let snapVals = snapshot.val();
        Object.keys(snapVals).map(async (key) => {
          // console.log(snapVals[key].categoryName);
          // return <option> {snapVals[key].categoryName} </option>;
          currCategories.push(snapVals[key].categoryName);
        });
        this.setState({ currCategories: currCategories });
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

  addItemToMenu = (e) => {
    e.preventDefault();
    const { itemMenu, description, price, spicy, vegan } = e.target.elements;
    let tags = {
      spicy: spicy.value,
      vegan: vegan.value,
    };

    if (this.state.currUser !== "") {
    }

    // console.log(this.state.url, itemMenu.value, description.value, price.value);

    for (const tagKey of Object.keys(tags)) {
      if (tags[tagKey] === true) {
        // add to final tag object
      }
    }
  };

  getCategory = () => {
    return <option> wtf </option>;
    // console.log(categories);
    // if (categories.length > 0) {
    //   categories.forEach((category) => {
    //     return <option> {category} </option>;
    //   });
    // }
  };

  render() {
    return (
      <div>
        <AppNavbar />
        {this.state.currCategories.length > 0 && (
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
              Currently adding new item
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
                  <Col style={{ textAlign: "-webkit-center" }}>
                    <p> Item Photo </p>
                    <Image
                      src={this.state.url || defaultImage}
                      rounded
                      style={{
                        width: "150px",
                        height: "150px",
                        marginBottom: "20px",
                        boxShadow: "2px 2px 2px 2px rgb(207, 207, 207)",
                      }}
                    />
                    <br />
                    <input
                      type="file"
                      onChange={this.handleProfileChange}
                      required
                    />
                    <button
                      className="btn btn-info"
                      onClick={this.handleProfileUpload}
                    >
                      Upload Image
                    </button>
                    {this.state.progress > 0 && (
                      <ProgressBar
                        animated
                        now={this.state.progress}
                        style={{ width: "60%", marginTop: "10px" }}
                        label={`${this.state.progress}%`}
                      />
                    )}
                  </Col>
                </FormGroup>
                <br />
                <FormGroup>
                  <select className="form-control" name="categoryChosen">
                    {this.state.currCategories.map((category, ind) => {
                      return <option key={ind}> {category} </option>;
                    })}
                  </select>
                  <br />
                  <Label> Category</Label>
                  <Input
                    name="category"
                    type="text"
                    placeholder="e.g. Appetizer"
                    required
                  />
                  <p className="text-muted" style={{ fontSize: "smaller" }}>
                    What category do you want to add the new item to?{" "}
                  </p>
                  <Label> Item Name </Label>
                  <Input
                    name="itemMenu"
                    type="text"
                    placeholder="e.g. Beef Brisket Burger"
                    required
                  />
                </FormGroup>
                <br />

                <FormGroup>
                  <Label> Item Description </Label>
                  <Input
                    name="description"
                    type="text"
                    placeholder="e.g. Lean, 100% grass fed beef with onions, pickles, and brioche buns"
                    required
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
                    required
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
                    <Label
                      style={{ padding: "5px" }}
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
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
                    <Label
                      style={{ padding: "5px" }}
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
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
        )}
      </div>
    );
  }
}

export default AddItemPage;
