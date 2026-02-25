import React from "react";
import styles from "./MusicPlayer.module.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Slider } from "@mui/material";

const MusicPlayer = ({ songData }) => {
  // Fallback data for testing if no song is active
  const { image, title, album } = songData || {
    image: "https://via.placeholder.com/50",
    title: "Song name",
    album: "Album name"
  };

  return (
    <div className={styles.playerWrapper}>
      <div className={styles.songInfo}>
        <img src={image} alt={title} className={styles.albumArt} />
        <div className={styles.textDetails}>
          <p className={styles.songTitle}>{title}</p>
          <p className={styles.albumName}>{album}</p>
        </div>
      </div>

      <div className={styles.controlsSection}>
        <div className={styles.playbackButtons}>
          <SkipPreviousIcon className={styles.icon} />
          <PlayCircleIcon sx={{ fontSize: 45 }} className={styles.icon} />
          <SkipNextIcon className={styles.icon} />
        </div>
        <div className={styles.progressArea}>
          <span>0:38</span>
          <Slider size="small" defaultValue={30} className={styles.progressBar} />
          <span>3:38</span>
        </div>
      </div>

      <div className={styles.volumeArea}>
       {/* here has to add the volume control and queue icons, but I ran out of time to implement those, so leaving this as a placeholder for now
      </div> */}
      <div className={styles.volumeControl}>
        <span>Volume</span>
        <Slider size="small" defaultValue={50} className={styles.volumeSlider} />
      </div>
      </div>
    </div>
  );
};

export default MusicPlayer;