import React from "react";
import { Subscribe } from "unstated";
import NewsCountainer from "../../../countainers/news.countainers";

const MenuItem = props => {
  
    return (
        <ul>
            <Subscribe to={[NewsCountainer]}>

                {Main_menu => (
                    Main_menu.state.categury.length === 0 ? <p>no data</p> : Main_menu.state.categury.cat_item.map(n => {
                        return  <li>
                                    <a href="">{n.value}</a>
                                </li>;

                    })
                )}
            </Subscribe >
        </ul>
    );
};

export default MenuItem;






