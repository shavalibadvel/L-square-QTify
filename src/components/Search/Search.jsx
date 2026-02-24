import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";


const Search = ({ placeholder, data = [] }) => {
  const [val, setVal] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  
  useEffect(() => {
   
    if (!val.trim()) {
      setFilteredOptions([]);
      return;
    }

    
    const timer = setTimeout(() => {
      if (data && data.length > 0) {
        const res = data.filter((item) =>
          item.title.toLowerCase().includes(val.toLowerCase())
        );
        setFilteredOptions(res);
      }
    }, 300);

    
    return () => clearTimeout(timer);
  }, [val,data]);

  const handleInputChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.searchContainer} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={val}
          onChange={handleInputChange}
          required
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>

      {val.length > 0 && (
        <div className={styles.dropdown}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((item) => (
              <div key={item.id} className={styles.option}>
                <div className={styles.optionContent}>
                  <img src={item.image} alt={item.title} className={styles.optionImg} />
                  <div className={styles.optionText}>
                    <p className={styles.optionTitle}>{item.title}</p>
                    <p className={styles.optionArtists}>
                      {item.songs ? `${item.songs.length} Songs` : `${item.follows} Follows`}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResult}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;