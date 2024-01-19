import React from 'react'
import Image from 'next/image'

const Tshirtmodel = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100vw', height:'auto', flexDirection:"column", alignItems:'center'}} >
        <Image data-cursor-color='rgba(0, 0, 0, 0.1)' data-cursor-size='300px' src={'/images/tshirtdummy.png'} width={2968} height={2808} alt='tshrit' style={{width:'50vw', height:'auto'}}></Image>
        <div style={{color:'#7f7f7f', textAlign:'center', fontSize:'2rem', fontFamily:'Jost'}}>...COMING SOON...</div>
    </div>
  )
}

export default Tshirtmodel;