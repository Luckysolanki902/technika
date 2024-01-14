import React from 'react'
import Image from 'next/image'

const Tshirtmodel = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100vw', height:'auto'}}>
        <Image src={'/images/tshirtdummy.png'} width={2968} height={3507} alt='tshrit' style={{width:'40vw', height:'auto'}}></Image>
    </div>
  )
}

export default Tshirtmodel;