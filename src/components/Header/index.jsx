import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import Menu from './Menu';
import NewsCountainer from "../../countainers/news.countainers";




class Header extends Component {

  changelanguage = (e) => {

      NewsCountainer.changelanguage(e.target.value);
   
  }

  render() {
    return (
      <header className="main_header clearfix">
        <div className="column_large_8 column_large_push_2">
          <div className="row">
            <div className="logo column_large_1">
              <img src={logo} alt="" />
            </div>
            <div className="languge column_large_2 left">
              <select name="mosi" id="language_setting" className="input" onChange={this.changelanguage}>
                <option value="fa">فارسی</option>
                <option value="en">انگلیسی</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="column_large_12 header_nav">
              <Menu />
            </div>
          </div>
        </div>
      </header>

    );
  }
}
export default Header;

