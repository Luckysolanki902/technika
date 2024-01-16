import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import CarouselTop from '@/components/CarouselTop'
import Events from '@/components/Events'
import Land from '@/components/Land'
import Tshirtmodel from '@/components/Tshirtmodel'
import TeamCardsEffect from '@/components/TeamCardsEffect'
import Sponsors from '@/components/Sponsors'
import 'react-creative-cursor/dist/styles.css';
export default function Home() {
  return (
    <div className={styles.mainDiv}>

      {/* <Sidebar /> */}
      <div>
        {/* <Events/> */}
        <Land />
        <div className='carouseldiv'>
          <CarouselTop />
        </div>
        <div style={{marginTop:'5rem'}}>
          <Tshirtmodel />

        </div>
        <Events />
<Sponsors/>

      </div>
    </div>
  )
}
