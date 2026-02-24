import React from "react";
import { Chip, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Only navigate if it's an album; songs might just play in the player
    if (type === "album") {
      navigate(`/album/${data.slug}`);
    }
  };

  const renderCard = () => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs, slug } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            <div className={styles.wrapper} onClick={handleClick}>
              <div className={styles.card}>
                <img src={image} alt="album" loading="lazy" />
                <div className={styles.banner}>
                  <Chip label={`${follows} Follows`} size="small" className={styles.chip} />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                {/* Specific requirement: Display 'Likes' for songs */}
                <Chip label={`${likes} Likes`} size="small" className={styles.chip} />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return renderCard();
};

export default Card;