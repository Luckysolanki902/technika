import React from 'react'
import Image from 'next/image'

const Tshirtmodel = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100vw', height:'auto'}} >
        <Image data-cursor-color='rgba(0, 0, 0, 0.1)' data-cursor-size='300px' src={'/images/tshirtdummy.png'} width={2968} height={3507} alt='tshrit' style={{width:'50vw', height:'auto'}}></Image>
    </div>
  )
}

export default Tshirtmodel;