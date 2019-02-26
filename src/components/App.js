import React, { Component } from "react";
import { Provider } from "unstated";
import Header from "./Header";
import TopNews from "./TopNews";
import MainMenu from "./MainMenu";
import News from "./news"
import NewsContainer from "../countainers/news.countainers";

import { BrowserRouter as Router,HashRouter , Route, NavLink } from "react-router-dom";
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
      <HashRouter  basename="">
        <div className="container">
          <Header />
          <TopNews />
          <MainMenu />
          <News />
        </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
