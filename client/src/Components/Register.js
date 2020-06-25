import React, { Component } from 'react';

import {  Card } from "reactstrap";

import RightSideImage from './RightSideImage';
import RegisterForm from './RegisterForm';

class Register extends Component {
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
    return (
      <Card className="card-group">
        <RegisterForm />
        {this.state.widthSize > 1000 && <RightSideImage />}
      </Card>
    );
  }
}

export default Register;