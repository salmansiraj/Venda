import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import logo from "../Assets/logo.png";


class Register extends Component {
    render() {
        return (
            <div className="container">
                <img src={logo} className="text-center" width="400" height="160" alt="login" />

                <Form className="login-form">
                    <h2 className="text-center">
                        <span className="font-weight-bold"> Register </span>
                    </h2>


                    <FormGroup>
                        <Label> Username </Label>
                        <Input
                            type="username"
                            placeholder="Username"
                            className="form-control"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label> Password </Label>
                        <Input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                        />
                    </FormGroup>

                    <br />
                    <Button className="btn-lg btn-block btn-info"> Register </Button>

                    
                </Form>
            </div>
        );
    }
}

export default Register;