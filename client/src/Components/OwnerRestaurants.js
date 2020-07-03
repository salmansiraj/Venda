import React, { Component } from 'react';
import add from "../Assets/add.png";
import db from "../Firebase/firebaseDB";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";

class OwnerRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuFlag: false,
      restaurants: [],
      menus: []
    };

    window.addEventListener("model", this.updateRestaurant);
  }

  componentDidMount() {
    db.ref("restaurants")
      .child(window.location.href.split("/").pop())
      .on(
        "value",
        (snapshot) => {
          if (snapshot.val()) {
            let snapVals = snapshot.val();
            let valArray = Object.keys(snapVals).map((key) => {
              return [key, snapVals[key]]
            })
            this.setState({
              restaurants: valArray,
            });
            
            valArray.forEach(restaurant => {
              let menuArray = {}
              db.ref("menus")
                .child(restaurant[0])
                .on("value", (snapshot) => {
                  let snapVals2 = snapshot.val();
                  // console.log(Object.keys(snapVals2))
                  try { 
                    if (snapVals2) {
                      Object.keys(snapVals2).map((key) => {
                        if (menuArray[key]) {
                          menuArray[key].push(snapVals2[key])
                        } else {

                          menuArray[key] = [snapVals2[key]]
                        }
                      })
                   }
                  } catch(error)  {
                    alert(error);
                  }
              
                })
                this.setState({ 
                  menus: [...this.state.menus, menuArray]
                })
            })
            // console.log(this.state.restaurants);
            console.log("wtf", this.state.menus)
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  // Adding Retaurants Feature
  updateRestaurant = () => {
    this.setState({ open: true });
  }

  menuFlag = () => {
    this.setState({ menuFlag: (!this.state.menuFlag) });
  }

  // Cancel retaurants Feature
  cancelRestaurant = () => {
    this.setState({ open: false });
  }

  addRestaurant = (e) => {
    e.preventDefault();
    const { rest_name, address, seating } = e.target.elements;
    // console.log(rest_name.value, address.value)

    const userid = window.location.href.split("/").pop();

    db.ref().child("restaurants").child(userid).push();

    db.ref("restaurants")
      .child(userid)
      .push({
        rest_name: rest_name.value,
        address: address.value,
        created_on: Date.parse(new Date()),
        seating_occupancy: seating.value,
        menus: [""],
      });
    this.cancelRestaurant();
  };

  displayMenus = (restid) => {
    // console.log(this.state.menus)
    if (this.state.menus.length > 0) { 
      this.state.menus.forEach((restMenus) => {
        try {
          Object.keys(restMenus).forEach((key) => {
            console.log(restMenus[key].menu_name);
            return <p> wtf </p>;
          });
        } catch (error) {
          console.log(error);
        }
      });
    }

    // db.ref("menus")
    //   .child(restid)
    //   .on("value", (snapshot) => { 
    //     console.log(snapshot.val())
    //     let restMenus = snapshot.val()

    //     try {
    //       Object.keys(restMenus).forEach((key) => { 
    //         console.log(restMenus[key].menu_name)
    //         return <p> wtf </p>
    
    //       })

    //     } catch(error) { 
    //       console.log(error)
    //     }

    //   })
  }


  cancelMenu = () => { 
    this.setState({ 
      menuFlag: (!this.state.menuFlag)
    })
  }

  updateMenu = () => {
    this.setState({ menuFlag: true })
  };

  addMenu = (e) => {
    e.preventDefault();
    const userid = window.location.href.split("/").pop();
    const { menu_name, rest_name } = e.target.elements;
    // console.log(menu_name.value, rest_name.value);
    

    // Adding Menu to menu node with respective retaurant ID
    db.ref("restaurants")
      .child(userid)
      .on("value", (snapshot) => {
          let snapVals = snapshot.val()
          let valArray = Object.keys(snapVals).map((key) => { 
            return [key, snapVals[key]]
          })

          console.log(valArray)
          valArray.forEach(restaurant => { 
            // console.log(restaurant[0], restaurant[1]);
            if (rest_name.value === restaurant[1].rest_name) { 
              const rest_id = restaurant[0]

              try { 
                db.ref().child("menus").child(rest_id).push();

                db.ref("menus")
                  .child(rest_id)
                  .push({
                    created_on: Date.parse(new Date()),
                    menu_name: menu_name.value,
                    qr_img: "TEST",
                    scans_total: 0,
                  });

              } catch { 
                // The QR Image generator function will be called here 
                db.ref("menus")
                  .child(rest_id)
                  .push({
                    created_on: Date.parse(new Date()),
                    menu_name: menu_name.val,
                    qr_img: "TEST",
                    scans_total: 0,
                  });
              }

            }

          })
        },
        (error) => {
          alert(error);
        }
      );
        this.cancelMenu()
    }


  render() {
    return (
      <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
        <h2> My Restaurants </h2>
        {this.state.menuFlag && (
          <Form onSubmit={this.addMenu}>
            <Button style={{ float: "right" }} onClick={this.cancelMenu}>
              x{" "}
            </Button>
            <br />
            <FormGroup>
              <Label style={{ color: "midnightblue" }}> Menu Name </Label>
              <Input
                name="menu_name"
                type="text"
                placeholder="e.g. Summer Menu"
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "midnightblue" }}> Restaurant Name </Label>
              <Input
                name="rest_name"
                type="text"
                placeholder="e.g. Joes Pizza"
              />
              <p className="text-muted" style={{fontSize: "smaller",padding: "5px"}}>
                Which restaurant are you adding this menu to
              </p>

              <Button
                type="submit"
                style={{
                  marginTop: "20px",
                  backgroundColor: "midnightblue",
                }}
              >
                Create Menu
              </Button>
            </FormGroup>
          </Form>
        )}
        {this.state.menuFlag === false && (
          <Button
            type="button"
            className="btn btn-info"
            style={{ float: "right" }}
            onClick={this.updateMenu}
          >
            {" "}
            Add Menu{" "}
          </Button>
        )}
        <br />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.restaurants.length &&
            this.state.restaurants.map((currRest, ind) => {
              return (
                <Card
                  key={ind}
                  style={{
                    width: "30%",
                    height: "250px",
                    boxShadow: "#f3f3f3 5px 5px 5px 5px",
                    margin: "10px",
                    overflow: "auto",
                  }}
                >
                  <div style={{ padding: "5%", height: "50%" }}>
                    <h4 style={{ color: "#fd795a" }}>
                      {" "}
                      {currRest[1].rest_name}{" "}
                    </h4>
                    <h4 style={{ color: "#fd795a" }}>
                      {" "}
                      {currRest[1].address}{" "}
                    </h4>
                  </div>
                  <div
                    style={{
                      padding: "5%",
                      backgroundColor: "#edf4ff",
                      height: "100%",
                    }}
                  >
                    <h4> Menus </h4>
                    {this.displayMenus()}

                  </div>
                </Card>
              );
            })}
          <Card
            style={{
              width: "30%",
              height: "250px",
              backgroundColor: "#edf4ff",
              boxShadow: "#f3f3f3 5px 5px 5px 5px",
              margin: "10px",
              overflow: "auto",
            }}
          >
            {this.state.open === false && (
              <div className="text-center" style={{ paddingTop: "20%" }}>
                <a onClick={this.updateRestaurant}>
                  <img
                    src={add}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                    alt="add-rest"
                  />
                </a>
              </div>
            )}
            {this.state.open === true && (
              <Form style={{ margin: "5%" }} onSubmit={this.addRestaurant}>
                <Button
                  style={{ float: "right" }}
                  onClick={this.cancelRestaurant}
                >
                  {" "}
                  x{" "}
                </Button>
                <br />
                <br />
                <FormGroup>
                  <Label style={{ color: "midnightblue" }}>
                    Restaurant Name
                  </Label>
                  <Input
                    name="rest_name"
                    type="text"
                    placeholder="e.g. Joe's Pizza Shop"
                  />
                </FormGroup>

                <FormGroup>
                  <Label style={{ color: "midnightblue" }}> Address </Label>
                  <Input
                    name="address"
                    type="text"
                    placeholder="e.g. 412 Times Square "
                  />
                </FormGroup>

                <FormGroup>
                  <Label style={{ color: "midnightblue" }}>
                    {" "}
                    Seating Occupancy{" "}
                  </Label>
                  <Input name="seating" type="text" placeholder="e.g. 50 " />
                </FormGroup>

                <Button
                  type="submit"
                  style={{
                    marginTop: "20px",
                    backgroundColor: "midnightblue",
                  }}
                >
                  Create Restaurant{" "}
                </Button>
              </Form>
            )}
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

export default OwnerRestaurants;