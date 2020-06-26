import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import OwnerRestaurants from './OwnerRestaurants';
import OwnerMenus from "./OwnerMenus";

class OwnerHomepage extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <OwnerRestaurants />
                <OwnerMenus />
            </div>
        );
    }
}

export default OwnerHomepage;