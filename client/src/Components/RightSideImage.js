import React, { Component } from 'react';
import sidepic from '../Assets/sidepic.jpg'
import "../App.css";

class RightSideImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthSize: window.innerWidth,
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      widthSize: window.innerWidth,
    });
  };

  render() {
    console.log(this.state.widthSize)
    return (
      <div>
        {this.state.widthSize > 1000 && (
          <>
            <img
              src={sidepic}
              className="text-center"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "50%",
                height: "100%",
              }}
              alt=""
            />
            <div
              style={{
                backgroundColor: "rgba(248, 240, 250, 0.35)",
                position: "absolute",
                top: "0",
                right: "0",
                width: "50%",
                height: "100%",
              }}
            ></div>
          </>
        )}
      </div>
    );
  }
}

export default RightSideImage;