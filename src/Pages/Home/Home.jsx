import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from "../../api/api";

const Home = () => {
  // State management for all data types
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]); // Initialize with "All" tab

  /**
   * Orchestrates all API calls needed for the landing page.
   * This centralizes the data fetching for better maintainability.
   */
  const generateData = async () => {
    try {
      // 1. Fetch Top Albums
      const topAlbums = await fetchTopAlbums();
      setTopAlbumData(topAlbums);

      // 2. Fetch New Albums
      const newAlbums = await fetchNewAlbums();
      setNewAlbumData(newAlbums);

      // 3. Fetch Songs for the Filter Section
      const songs = await fetchSongs();
      setSongData(songs);

      // 4. Fetch Genre labels for the Tabs
      const genreData = await fetchGenres();
      if (genreData && genreData.data) {
        // Requirements: Default "All" tab followed by dynamic genres
        setGenres([{ key: "all", label: "All" }, ...genreData.data]);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section */}
      <Hero />

      <div className={styles.sectionContainer}>
        {/* Top Albums Section - Type 'album' displays 'Follows' chip */}
        <Section 
          title="Top Albums" 
          data={topAlbumData} 
          type="album" 
        />

        {/* New Albums Section - Reuses Section and Card logic */}
        <Section 
          title="New Albums" 
          data={newAlbumData} 
          type="album" 
        />

        <hr className={styles.divider} />

        {/* Songs Section Requirements:
          1. Title "Songs"
          2. Type "song" (switches 'Follows' to 'Likes')
          3. filterSource (provides the Tabs data)
          4. No 'Show All' button (handled inside Section via type prop)
        */}
        <Section
          title="Songs"
          data={songData}
          type="song"
          filterSource={genres}
        />
      </div>
    </div>
  );
};

export default Home;