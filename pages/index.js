import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import CarouselTop from '@/components/CarouselTop'
import Events from '@/components/Events'
import Land from '@/components/Land'
import Sponsors from '@/components/Sponsors'
import Tshirtmodel from '@/components/Tshirtmodel'
import TeamCardsEffect from '@/components/TeamCardsEffect'
import ColorSmokeTrail from '@/components/Animations/ColorSmokeTrail'
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
        <div>
          <Tshirtmodel />

        </div>
        <Events />
        {/* <Sponsors/> */}
        {/* <TeamCardsEffect/> */}

      </div>
    </div>
  )
}
