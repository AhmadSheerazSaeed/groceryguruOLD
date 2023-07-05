import React from "react";
import { IoIosSearch } from "react-icons/io";
import searchStyles from "./Search.module.css";

function SearchBar() {
  return (
    <div className={searchStyles.form_wrapper}>
      <form className={searchStyles.form_wrapper}>
        <input placeholder="Search" />
        <IoIosSearch />
      </form>
    </div>
  );
}

export default SearchBar;
