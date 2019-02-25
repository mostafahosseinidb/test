import React, { Component } from "react";
import { Provider } from "unstated";
import Header from "./Header";
import TopNews from "./TopNews";
import MainMenu from "./MainMenu";
import News from "./news"
import NewsContainer from "../countainers/news.countainers";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
class App extends Component {

  componentDidMount = async () => {
    await this.initial();
   }

  initial = async () => { 
    await NewsContainer.getNews();
  }

  render() {
    return (
      <Provider>
      <Router>
        <div className="container">
          <Header />
          <TopNews />
          <MainMenu />
          <News />
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
