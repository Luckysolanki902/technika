import React, {useState, useEffect} from 'react'
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
import Footer from '@/components/Footer'
import Team from '@/components/Team'
import Loading from '@/components/Loading'
export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className={styles.mainDiv}>
     {showLoading && <Loading />}
           <div>
        {/* <Events/> */}
        <Land />
        <div className='carouseldiv'>
          <CarouselTop />
        </div>
        <div style={{ marginTop: '5rem' }}>
          <Tshirtmodel />

        </div>
        <Events />
        <Team showThreeDepartments={true} />
        <Sponsors />
        <Footer />

      </div>
    </div>
  )
}
