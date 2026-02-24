import React from "react";
import styles from "./Feedback.module.css";

const FeedbackModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Feedback</h3>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Full name" className={styles.input} required />
          <input type="email" placeholder="Email ID" className={styles.input} required />
          <input type="text" placeholder="Subject" className={styles.input} required />
          <textarea placeholder="Description" className={styles.textarea} required />
          <button type="submit" className={styles.submitBtn}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;