import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Section = ({ title, data, type, filterSource }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Filter logic: If 'All' is selected (index 0), show everything. 
  // Otherwise, filter by genre key.
  const filteredData = data.filter((item) => {
    if (selectedTab === 0) return true;
    return item.genre.key === filterSource[selectedTab - 1].key;
  });

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* Requirement: No 'Show All' button for songs section */}
        {type !== "song" && (
          <h4 className={styles.toggleText} onClick={() => setCarouselToggle(!carouselToggle)}>
            {carouselToggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>

      {/* Requirement: Use MUI Tabs with custom styling */}
      {type === "song" && (
        <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="songs filter"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#34c94b", // Qtify Green
          },
        }}
      >
        {filterSource.map((genre, index) => (
          <Tab 
            key={genre.key} 
            label={genre.label} 
            className={styles.tab} 
            {...a11yProps(index)} 
          />
        ))}
</Tabs>
      )}

      <div className={styles.cardWrapper}>
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