import React, { useState, useEffect } from 'react'
import styles from './compstyles/eventcard.module.css'
const Card = ({ text, prize }) => {
  return (
    <div className={styles.fullCard} >
      <div className={styles.cardBorderDiv} >
        <div class={styles.glow} />
        <div className={styles.black}>

          <div className={styles.cardDiv}>
            <div className={styles.border}>
              <p className={styles.mainText}>{text}</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.prize}>Prize:{prize}</p>
    </div>
  )
}

export default Card; 