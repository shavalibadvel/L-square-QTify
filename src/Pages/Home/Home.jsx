import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from "../../api/api";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
  
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]); // Initialize with "All" tab

  
  const generateData = async () => {
    try {
      
      const topAlbums = await fetchTopAlbums();
      setTopAlbumData(topAlbums);

     
      const newAlbums = await fetchNewAlbums();
      setNewAlbumData(newAlbums);

      
      const songs = await fetchSongs();
      setSongData(songs);

     
      const genreData = await fetchGenres();
      if (genreData && genreData.data) {
       
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
      
      <Hero />

      <div className={styles.sectionContainer}>
        
        <Section 
          title="Top Albums" 
          data={topAlbumData} 
          type="album" 
        />

        
        <Section 
          title="New Albums" 
          data={newAlbumData} 
          type="album" 
        />

        <hr className={styles.divider} />

        
        <Section
          title="Songs"
          data={songData}
          type="song"
          filterSource={genres}
        />
      </div>
      <FAQ />
    </div>
  );
};

export default Home;