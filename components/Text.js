import React from "react";
import styles from "./compstyles/text.module.css";

const Text = ({ prop }) => {
  return <div className={styles.txt}>{prop}</div>;
};

export default Text;