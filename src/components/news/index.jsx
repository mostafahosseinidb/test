import React, { Component } from "react";

import CateguryNews from "./CateguryNews";
import OtherNews from "./OtherNews"

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class News extends Component {

    render() {
        return (
            <main className="main column_large_8 column_large_push_2 clearfix">
           
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/">CateguryNews</NavLink>
                            </li>

                            <li>
                             

                            </li>
                        </ul>


                        <div>
                            <Route exact path="/" component={CateguryNews} />
                            <Route path="/OtherNews" component={OtherNews} />
                        </div>
                    </div>
               
            </main>
        );
    }
}
export default News;
