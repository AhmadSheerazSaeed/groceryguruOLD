import React from "react";
import newCustomerStyle from "./NewCustomer.module.css";

function NewCustomer() {
  return (
    <div className={newCustomerStyle.wrapperNewCustomer}>
      <form>
        <h1>Registration</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default NewCustomer;
