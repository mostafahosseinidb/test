import React from "react";
import { Subscribe } from "unstated";
import NewsCountainer from "../../../countainers/news.countainers";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Menu = props => {
    const {
        item
    } = props;

    return (
        <ul>
            <li>
            <NavLink  to={`${this.props.match.url}#OtherNews`}>OtherNews</NavLink>
            </li>
            <Subscribe to={[NewsCountainer]}>

                {Main_menu => (
                    Main_menu.state.menu.length === 0 ? <p>no data</p> : Main_menu.state.menu.menu_item.map(n => {
                        return <li>
                            <a href="">{n.value}</a>
                        </li>;

                    })
                )}
            </Subscribe >
        </ul>
    );
};

export default Menu;






