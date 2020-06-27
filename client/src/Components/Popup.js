import React from "react";
import "../App.css";
import { Card } from 'reactstrap';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div >
          <Card style={{ alignContent:"center", margin: "15%"}}>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close me</button>
          </Card>
        </div>
      </div>
    );
  }
}

export default Popup;
