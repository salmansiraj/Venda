import React, { Component } from 'react';
import add from "../Assets/add.png";

import { Card } from "reactstrap";

class OwnerRestaurants extends Component {
    render() {
        return (
            <div style={{padding: "5%", backgroundColor: "#f8f9fa"}}>
                <h2> My Restaurants </h2>
                <div style={{ display: "flex"}}>
                    <Card style={{width:"33%", height: "250px", boxShadow: "#f3f3f3 5px 5px 5px 5px", margin: "10px", overflow: "auto"}}>
                        <div style={{ padding: "5%", height: "50%"}}>
                            <h4 style={{ color: "#fd795a"}}> Restaurant Name </h4>
                            <h4 style={{ color: "#fd795a"}}> Address </h4>
                        </div>
                        <div style={{ padding: "5%", backgroundColor: "#edf4ff", height: "100%" }}>
                            <h4> Menus </h4>
                            <p> Summer Menu </p>
                            <p> Late Night Menu </p>
                        </div>
                    </Card>

                    <Card style={{width:"33%", height: "250px", backgroundColor: "#edf4ff", boxShadow: "#f3f3f3 5px 5px 5px 5px",  margin: "10px" }}>
                        <div className="text-center" style={{ paddingTop: "20%"}}>
                            <img
                                src={add}
                                style={{
                                width: "60px",
                                height: "60px",
                                }}
                                alt="add-rest"
                            />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default OwnerRestaurants;