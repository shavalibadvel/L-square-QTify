import React from "react";
import styles from "./Search.module.css";
// 1. Regular import for PNG
import searchIcon from "../../assets/search-icon.svg"; 

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.searchButton}>
        {/* 2. Use an img tag instead of <SearchIcon /> */}
        <img src={searchIcon} alt="search icon" width={20} />
      </button>
    </form>
  );
};

export default Search;