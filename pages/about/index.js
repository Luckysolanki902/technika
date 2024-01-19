import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
const index = () => {
  return (
    <div className={styles.mainDiv}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Image src={'/images/techart.jpg'} width={4160} height={2773} alt='technika23' className={styles.techart}></Image>
<h1>About Us</h1>
        </div>
    </div>
  )
}

export default index