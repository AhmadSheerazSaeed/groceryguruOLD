import React from "react";
import { Link } from "react-router-dom";
import navigationStyles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={navigationStyles.wrapper_navigation}>
      <Link className={navigationStyles.linkStyle} to="/categories">
        Categories
      </Link>
      <Link className={navigationStyles.linkStyle} to="/sale">
        Sale
      </Link>
      <Link className={navigationStyles.linkStyle} to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Navigation;
