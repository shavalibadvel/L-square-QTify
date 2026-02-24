import React from "react";
import styles from "./Search.module.css";
// Match the .svg extension shown in your sidebar
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg"; 

const Search = ({ placeholder }) => {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
  };

  return (
    // Attach the onSubmit handler here to fix the warning
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.search} placeholder={placeholder} required />
      <button className={styles.searchButton} type="submit">
        {/* Your Search Icon SVG component here */}
      </button>
    </form>
  );
};

export default Search;