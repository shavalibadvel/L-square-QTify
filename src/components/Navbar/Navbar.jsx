import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

// Accept 'data' as a prop from App.js
const Navbar = ({ data }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      {/* Pass the data prop here to fix the filter error */}
      <Search 
        placeholder="Search a song of your choice" 
        data={data} 
      />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;