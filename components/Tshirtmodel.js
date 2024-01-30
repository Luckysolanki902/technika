import React from 'react'
import Mod from './Mod';
import styles from "./compstyles/team.module.css";
import Image from 'next/image'

const Tshirtmodel = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100vw', height:'auto', flexDirection:"column", alignItems:'center'}} >
        <div className={styles.top}>Merch</div>
        <Mod />
        <div style={{color:'#7f7f7f', textAlign:'center', fontSize:'2rem', fontFamily:'Jost', marginBottom:'3rem'}}>...COMING SOON...</div>
    </div>
  )
}

export default Tshirtmodel;
