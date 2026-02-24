import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import AlbumPage from "./Pages/AlbumPage/AlbumPage";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [allData, setAllData] = useState([]); 
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  
  useEffect(() => {
    const getAllData = async () => {
      try {
        const top = await fetchTopAlbums();
        const newAlb = await fetchNewAlbums();
        const songs = await fetchSongs();
        
        setTopAlbums(top);
        setNewAlbums(newAlb);
        
        setAllData([...top, ...newAlb, ...songs]);
      } catch (e) {
        console.error("Failed to fetch App data", e);
      }
    };
    getAllData();
  }, []);

  return (
    <div className={styles.appWrapper}>
      <BrowserRouter>
        <Navbar data={allData} />
        <Routes>
          <Route 
            path="/" 
            element={<Home topAlbums={topAlbums} newAlbums={newAlbums} />} 
          />
          
          <Route path="/album/:slug" element={<AlbumPage />} />
        </Routes>
     
        <MusicPlayer />
      </BrowserRouter>
    </div>
  );
}

export default App;