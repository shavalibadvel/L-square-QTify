
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [genres, setGenres] = useState([]);

  const generateData = async () => {
    const topData = await fetchTopAlbums();
    setTopAlbumData(topData);

    const newData = await fetchNewAlbums();
    setNewAlbumData(newData);

    const songs = await fetchSongs();
    setSongData(songs);

    const genreData = await fetchGenres();
    // API returns { data: [...] }, we need the inner array
    setGenres(genreData.data || []); 
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <Hero />
      <div className={styles.sectionContainer}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
        <Section title="New Albums" data={newAlbumData} type="album" />
        <hr className={styles.divider} />
        {/* Test Case 14: Songs Section with Genres */}
        <Section 
          title="Songs" 
          data={songData} 
          type="song" 
          filterSource={genres} 
        />
      </div>
    </div>
  );
}

export default App;