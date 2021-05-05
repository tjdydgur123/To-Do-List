import React, { PureComponent } from "react";
import "../app.css";

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="navbar-title">To Do List</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
