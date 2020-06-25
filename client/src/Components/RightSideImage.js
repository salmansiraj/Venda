import React, { Component } from 'react';
import sidepic from "../Assets/sidepic.jpg";

class RightSideImage extends Component {
    render() {
        return (
          <div
            className="container"
            style={{
              width: "55%",
              padding: "0",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <img
              src={sidepic}
              className="text-center"
              style={{
                height: "100%",
                width: "100%",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
              alt=""
            />
            <div
              style={{
                backgroundColor: "rgba(248, 240, 250, 0.35)",
                position: "absolute",
                top: "0",
                right: "0",
                width: "55%",
                height: "100%",
              }}
            >
            </div>
          </div>
        );
    }
}

export default RightSideImage;