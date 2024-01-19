import React, { useState, useEffect } from 'react';
import styles from './compstyles/sidebar.module.css';
import Image from 'next/image';
import Menu from './Menu';
import { useRouter } from 'next/router';
import { width } from '@mui/system';
import { Link } from '@mui/material';

const Navbar = () => {
  const router = useRouter()


  const img = '/images/logo.png'
 
  return (
    <div  style={{width:"100%",color:"white",height:"100%",fontStyle:"italic",fontSize:"1.6rem",fontFamily:"sans-serif",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
   
   
  <div style={{padding:"5px",paddingRight:"10px"}}>
  <Link href={"/"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
  <img src='https://drive.google.com/thumbnail?id=1TsjTx3RNK5TzRmmYOzen-ZgLt6YrDvtB' height={"40px"}/>
    </Link>
</div>

  <div style={{padding:"5px",paddingRight:"10px"}}>
  <Link href={"/events"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
  <img src='https://drive.google.com/thumbnail?id=1kv88VtTDbPkW5iciCs33hTJVKQ_9LJaI' height={"40px"}/>
    </Link>
    
    
    </div>
  <div style={{padding:"5px",paddingRight:"10px"}} >
    <Link href={"/team"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
    <img src='https://drive.google.com/thumbnail?id=1hGzk6993fPsu6YB0qjTzndf2ZGKoTFUn' height={"40px"}/>
    </Link>
    
    </div>
  <div style={{padding:"5px",paddingRight:"10px"}}>
  <Link href={"/about"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
  <img loading="eager" src='https://drive.google.com/thumbnail?id=1J4szZfqqDzVGvUDASbMTy05R0sHS24Nt' height={"40px"}/>
    
    </Link>
    
  </div>
  <div style={{padding:"5px",paddingRight:"10px"}}>
  <Link href={"/sponsors"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
  <img src="https://drive.google.com/thumbnail?id=108j70VZnWLgngkGHdMA5vAnfuxREVp-z" height={"40px"}/>
    </Link>
    
  </div>
  <div style={{padding:"5px",paddingRight:"10px"}}>
  <Link href={"/merchandise"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
  <img src='https://drive.google.com/thumbnail?id=1ZDGceR_ef_8uXo5Pn4db0KxmHRvMIQK5' height={"40px"}/>
    </Link>
</div>

  <div style={{padding:"5px",paddingRight:"10px"}}>
  <Link href={"/admin/dashboard"} style={{outline:"none !important",textDecoration:"none",color:"white"}}>
  <img src='https://drive.google.com/thumbnail?id=1C0rcGbRPwWnkqbKB7llA49TJ91OZdw6_' height={"40px"}/>
    </Link>
    
  </div>

    </div>
  );
};

export default Navbar;
