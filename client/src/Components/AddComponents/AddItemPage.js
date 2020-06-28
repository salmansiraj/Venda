import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Card, FormGroup, Form, Label, Input } from "reactstrap";

class AddItemPage extends Component {

    goBack = () => {
        window.location.href = "/menupage"
    }


    render() {
        return (
            <div>
                <AppNavbar />
                <div style={{ width: "100%", padding: "0 0 100% 0", backgroundColor: "#042143" }}>
                    <h3 className="text-center" style={{ color: "white", paddingTop: "2%" }}> Currently adding new item to: Category_name </h3>
                    <Card style={{ marginLeft: "15%", marginRight: "15%", marginTop: "5%", height: "300px", padding: "50px", borderRadius: "40px", boxShadow: "#dce9ff 5px 5px 5px 5px", height: "fit-content"}}>
                        <button onClick={this.goBack} style={{ width: "100px", placeSelf: "flex-end" }} type="button" className="btn btn-sm btn-outline-danger"> cancel </button><br />
                        <Form>
                            <FormGroup>
                                <Label> Item Name </Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. Beef Brisket Burger"
                                > </Input>
                                <br />
                                <Label> Item Description </Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. Lean, 100% grass fed beef with onions, pickles, and brioche buns"
                                > </Input>
                                <br />
                                <Label> Item Price </Label>
                                <Input
                                    type="text"
                                    placeholder="$0.00"
                                > </Input>
                                <br />

                                <Label> Food Tags </Label>
                                <p className="text-muted" style={{fontSize: "smaller"}}> Tags to help people identify foods they are allergic or sensitive to, as well as to choose his/her own preferable foods  </p>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1"> Spicy </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2"> Vegan </label>
                                </div>
                            </FormGroup>
                        </Form>
                        <button type="button" class="btn btn-info"> Add Category </button>
                    </Card>
                </div>
            </div>
        );
    }
}

export default AddItemPage;