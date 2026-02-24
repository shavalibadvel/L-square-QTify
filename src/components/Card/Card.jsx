import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

const Card = ({ data, type }) => {
  const { image, follows, likes, title } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt="album" loading="lazy" />
        <div className={styles.banner}>
          <Chip
            /* Conditionally show Likes for songs and Follows for albums */
            label={type === "song" ? `${likes} Likes` : `${follows} Follows`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;