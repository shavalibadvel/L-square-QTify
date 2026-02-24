import React from "react";
import styles from "./Search.module.css";
// Match the .svg extension shown in your sidebar
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg"; 

const Search = ({ placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input 
        name="search"
        className={styles.search} 
        placeholder={placeholder} 
        required
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;