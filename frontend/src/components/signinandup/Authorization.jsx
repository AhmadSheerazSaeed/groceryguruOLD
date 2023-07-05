import React from "react";
import { Link } from "react-router-dom";
import authorizationStyle from "./Authorization.module.css";

function Authorization() {
  return (
    <div>
      <form className={authorizationStyle.formInputs}>
        <h1>Authorization</h1>

        <input
          className={authorizationStyle.email}
          type="text"
          placeholder="Email"
        />
        <input
          className={authorizationStyle.password}
          type="password"
          placeholder="Password"
        />

        <div className={authorizationStyle.btnDiv}>
          <Link className={authorizationStyle.link}>Send</Link>
          <div>
            <Link className={authorizationStyle.linkStyle} to="/forgotPassword">
              Forgot your password?
            </Link>
            <Link className={authorizationStyle.linkStyle} to="/newcustomer">
              Don't have an account yet?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Authorization;
