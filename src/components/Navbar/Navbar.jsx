import React, { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Button from "../Button/Button"; // Your custom button component

import Logo from "../Logo/Logo";
import Search from "../Search/Search";

import styles from "./Navbar.module.css";

const Navbar = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      
      <div className={styles.searchWrapper}>
        <Search placeholder="Search a song of your choice" data={data} />
      </div>
      
      <Button 
        text="Give Feedback" 
        onClick={() => setIsModalOpen(true)} 
      />

      <Feedback
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
};
export default Navbar;