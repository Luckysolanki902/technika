import React from 'react'
import Mod from './Mod';
import styles from "./compstyles/team.module.css";
import Image from 'next/image'

const Tshirtmodel = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100vw', height:'auto', flexDirection:"column", alignItems:'center'}} >
        <div className={styles.top}>Merch</div>
        <Mod />
        // <Image data-cursor-color='rgba(0, 0, 0, 0.1)' data-cursor-size='300px' src={'/images/tshirtdummy.png'} width={2968} height={2808} alt='tshrit' style={{width:'50vw', height:'auto'}}></Image>
        <div style={{color:'#7f7f7f', textAlign:'center', fontSize:'2rem', fontFamily:'Jost', marginBottom:'3rem'}}>...COMING SOON...</div>
    </div>
  )
}

export default Tshirtmodel;
