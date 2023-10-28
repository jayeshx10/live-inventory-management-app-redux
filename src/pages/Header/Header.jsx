import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__heading">
        <h2>Inventory Management App</h2>
      </div>
      <nav>
        <NavLink to="/" className="header__nav-links">
          Dashboard
        </NavLink>
        <NavLink to="/inventory" className="header__nav-links">
          Inventory
        </NavLink>
        <NavLink to="/sales" className="header__nav-links">
          Sales
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
