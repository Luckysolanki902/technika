import React from "react";
import styles from "./compstyles/text.module.css";

const Text = ({ prop, areFirstThree }) => {
  return <div>
    <div className={`${styles.txt} ${areFirstThree ? styles.forThree:''} `}>
      {prop}
    </div>
  </div>
};

export default Text;