import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <div className={styles.faqWrapper}>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.accordionContainer}>
   
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.summary}
          >
            Is QTify free to use?
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            Yes! It is 100% free, and it has 0 ads!
          </AccordionDetails>
        </Accordion>

      
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel2-content"
            id="panel2-header"
            className={styles.summary}
          >
            Can I download and listen to songs offline?
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            Sorry, unfortunately we don't provide the service to download any songs.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;