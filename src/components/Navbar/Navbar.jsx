import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      {/* Test Case 3: Must contain 'search' in placeholder */}
      <Search placeholder="Search a album of your choice" />
      {/* Test Case 1 & 4-8: Button must exist with correct text */}
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;