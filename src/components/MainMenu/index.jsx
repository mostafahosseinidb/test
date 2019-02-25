import React, { Component } from "react";
import MenuItem from './MenuItem';

class MainMenu extends Component {

    render() {
        return (
            <nav class="main_nav clearfix">
                <ul class="column_large_8 column_large_push_2">
                    <MenuItem />
                </ul>
            </nav>
        );
    }
}
export default MainMenu;

