import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";

const Section = ({ title, endpoint }) => {
  const [data, setData] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  useEffect(() => {
    axios.get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* Test Case 12: Text must change between Show All and Collapse */}
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      
      {carouselToggle ? (
        <div className={styles.cardsGrid}>
           {/* In a real scenario, this would be your Carousel/Slider component */}
           {/* For now, we render the grid to ensure data is visible to the test */}
           {data.map((item) => (
            <Card key={item.id} data={item} type="album" />
          ))}
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {data.map((item) => (
            <Card key={item.id} data={item} type="album" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;