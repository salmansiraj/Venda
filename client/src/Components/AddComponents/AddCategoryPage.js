import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Card, FormGroup, Form, Label, Input } from "reactstrap";

class AddCategoryPage extends Component {

    goBack = () => { 
            window.location.href = "/menupage"
        }


    render() {
        return (
            <div>
                <AppNavbar />
                <div style={{width: "100%", padding: "0 0 100% 0", backgroundColor: "#042143" }}>
                    <h3 className="text-center" style={{color: "white", paddingTop: "2%"}}> Currently adding new category to: Lunch Menu </h3>
                    <Card style={{ marginLeft: "15%", marginRight: "15%", marginTop: "5%", height: "300px", padding: "50px", borderRadius: "40px", boxShadow: "#dce9ff 5px 5px 5px 5px"}}> 
                        <button onClick={this.goBack} style={{width: "100px", placeSelf: "flex-end"}} type="button" className="btn btn-sm btn-outline-danger"> cancel </button><br />
                        <Form>
                            <FormGroup>
                                <Label> Category Name </Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. Lunch"
                                > </Input>
                            </FormGroup>
                        </Form>
                        <button type="button" class="btn btn-info"> Add Category </button>
                    </Card>
                </div>
            </div>
        );
    }
}

export default AddCategoryPage;