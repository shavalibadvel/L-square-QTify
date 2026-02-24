import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAlbumDetails } from "../../api/api";
import styles from "./AlbumPage.module.css";

const AlbumPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);
  const [page, setPage] = useState(1);
  const songsPerPage = 10;

  useEffect(() => {
    const getAlbumData = async () => {
      try {
        const data = await fetchAlbumDetails(slug);
        setAlbum(data);
      } catch (e) {
        console.error("Error loading album details:", e);
      }
    };
    getAlbumData();
  }, [slug]);

  // Prevent accessing properties of null 'album'
  if (!album) return <div className={styles.loading}>Loading...</div>;

  // Pagination Logic
  const totalPages = Math.ceil(album.songs.length / songsPerPage);
  const currentSongs = album.songs.slice((page - 1) * songsPerPage, page * songsPerPage);

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div className={styles.wrapper}>
      {/* Back Button */}
      <div className={styles.backButton} onClick={() => navigate(-1)}>
        <div className={styles.arrowCircle}>{"<"}</div>
      </div>

      {/* Album Header */}
      <div className={styles.header}>
        <img src={album.image} alt={album.title} className={styles.albumImage} />
        <div className={styles.info}>
          <h1>{album.title}</h1>
          <p className={styles.description}>{album.description}</p>
          <p className={styles.metadata}>
            {album.songs.length} songs • 3 hr 45 min • {album.follows} Follows
          </p>
          <div className={styles.btnGroup}>
            <button className={styles.shuffleBtn}>Shuffle</button>
            <button className={styles.libraryBtn}>Add to library</button>
          </div>
        </div>
      </div>

      <div className={styles.tableSection}>
        {/* Pagination Controls */}
        <div className={styles.pagination}>
          <button 
            className={styles.arrowBtn} 
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i + 1} 
              className={page === i + 1 ? styles.activePage : styles.pageBtn}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button 
            className={styles.arrowBtn} 
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            {">"}
          </button>
        </div>

        {/* Table Header */}
        <div className={styles.tableHeader}>
          <span>Title</span>
          <span>Artist</span>
          <span>Duration</span>
        </div>
        
        {/* Song Rows */}
        <div className={styles.songList}>
          {currentSongs.map((song) => (
            <div key={song.id} className={styles.songRow}>
              <div className={styles.songTitleInfo}>
                <img src={song.image} alt={song.title} />
                <p>{song.title}</p>
              </div>
              <p className={styles.artistName}>{song.artists.join(", ")}</p>
              <p className={styles.duration}>{formatDuration(song.durationInMs)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;