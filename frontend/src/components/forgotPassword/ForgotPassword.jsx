import React from "react";
import { Link } from "react-router-dom";
import forgotPasswordStyles from "./ForgotPassword.module.css";

function ForgotPassword() {
  return (
    <div>
      <form className={forgotPasswordStyles.formInputs}>
        <h1>Forgot Password</h1>

        <input type="text" placeholder="Email" />

        <div className={forgotPasswordStyles.btnDiv}>
          <Link className={forgotPasswordStyles.link} to="/signinandsignup">
            Send
          </Link>

          <Link className={forgotPasswordStyles.link} to="/signinandsignup">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
