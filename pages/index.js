import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.audienceImgDiv} style={{opacity:'1'}}>
        <Image width={5184 / 2} height={3456 / 2} src={'/images/hometop.jpg'} alt='' style={{ width: '100%', height: 'auto' }} className={styles.audienceImg}></Image>
        <div className={styles.logoInAudience}>
          <Image src={'/images/technika_logo.png'} width={342} height={598} alt='logo'></Image>
          <div className={styles.echnikatf}>
            <div className={styles.echnika}>echnika</div>
            <div className={styles.twentyfour}>24</div>
          </div>
        </div>
      </div>
      <div className={styles.gradientOverlay}></div>
    </div>
  )
}
