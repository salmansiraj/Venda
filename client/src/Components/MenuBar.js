import React, { Component } from "react";
import { Form, Input, Button, FormGroup } from "reactstrap";
import trash from "../Assets/trash.png";
import edit from "../Assets/edit.png";
import db from "../Firebase/firebaseDB";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currMenu: "",
      currRest: "",
      menuName: "",
      editClicked: false,
      deleteClicked: false,
    };
  }

  componentDidMount() {
    let link = window.location.href.split("/");
    let menuid = link[link.length - 2];
    let restid = link[link.length - 3];

    db.ref("menus")
      .child(restid)
      .child(menuid)
      .on("value", (snapshot) => {
        let currName = snapshot.val().menu_name;
        // console.log(currName);

        this.setState({
          currMenu: menuid,
          currRest: restid,
          menuName: currName,
        });
      });
  }

  updateEdit = () => {
    this.setState({
      editClicked: true,
    });
  };

  updateDelete = () => {
    this.setState({
      deleteClicked: true,
    });
  };

  editMenu = (e) => {
    e.preventDefault();
    let { menuName } = e.target.elements;

    let link = window.location.href.split("/");
    let menuid = link[link.length - 2];
    let restid = link[link.length - 3];
    // console.log(menuName.value);

    let currJson = db.ref("menus").child(restid).child(menuid);

    currJson.update({
      menu_name: menuName.value,
    });

    this.setState({
      editClicked: false,
    });
  };

  updateDelete = () => {
    let link = window.location.href.split("/");
    let userid = link[link.length - 1];
    let menuid = link[link.length - 2];
    let restid = link[link.length - 3];

    let currJson = db.ref("menus").child(restid).child(menuid);
    currJson.remove();

    window.location.href = "/homepage/" + userid;
  };

  render() {
    return (
      <div style={{ padding: "5%", backgroundColor: "#f8f9fa" }}>
        {this.state.editClicked === false ? (
          <h2>
            {this.state.menuName}
            <Button
              style={{ background: "none", border: "none" }}
              onClick={this.updateEdit}
            >
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
            </Button>
            <Button style={{ background: "none", border: "none" }}>
              <img
                src={trash}
                style={{
                  width: "20px",
                  height: "20px",
                }}
                alt="delete"
                onClick={this.updateDelete}
              />
            </Button>
          </h2>
        ) : (
          <h2>
            <Form onSubmit={this.editMenu}>
              <FormGroup>
                <Input name="menuName" type="text" required />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#3b6597", marginTop: "10px" }}
                >
                  {" "}
                  Edit Menu{" "}
                </button>
              </FormGroup>
            </Form>
          </h2>
        )}
      </div>
    );
  }
}

export default MenuBar;
