import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    const items = this.props.items;

    return (
      <div className="menu">
        <ul>
          {items.map((item) => (
            <li key={item.text}>
              <NavLink to={item.to}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
