import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

const Section = ({ title, data, type, filterSource }) => {
  // Define these if you still want the toggle functionality for Albums
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Filter logic for Songs
  const filteredData = data.filter((item) => {
    if (selectedTab === 0) return true;
    return item.genre.key === filterSource[selectedTab - 1].key;
  });

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* Only show toggle if it's an album section */}
        {type !== "song" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>

      {/* Show Tabs only for Songs section */}
      {type === "song" && (
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          className={styles.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "#34c94b" } }}
        >
          <Tab label="All" className={styles.tab} />
          {filterSource?.map((genre) => (
            <Tab key={genre.key} label={genre.label} className={styles.tab} />
          ))}
        </Tabs>
      )}

      <div className={styles.cardWrapper}>
        {/* Conditional rendering between Carousel and Grid for Albums */}
        {carouselToggle ? (
          <Carousel
            data={type === "song" ? filteredData : data}
            renderComponent={(item) => <Card data={item} type={type} />}
          />
        ) : (
          <div className={styles.gridWrapper}>
            {data.map((item) => (
              <Card key={item.id} data={item} type={type} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;