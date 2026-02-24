import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/vibrating-headphones.png"; // Export this from Figma

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={HeroImage} width={212} alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;