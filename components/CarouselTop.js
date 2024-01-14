import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import styles from './compstyles/carousel.module.css'
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
register();

const CarouselTop = () => {

    return (
        <>
            <Swiper style={{ height: 'auto', borderRadius: '2rem', "--swiper-pagination-color": "#C508A7", "--swiper-pagination-bullet-size": "0.8rem",
                "--swiper-pagination-bullet-horizontal-gap": "6px",  "--swiper-pagination-bullet-inactive-color": "#fff",
                "--swiper-pagination-bullet-inactive-opacity": "0.6", "--swiper-pagination-bottom": "20px",  }}
                className={styles.carbg}
                spaceBetween={5}
                effect="fade"
                modules={[EffectFade]} 
                pagination={{
                    type: 'bullets',
                    dynamicBullets:true,
                    dynamicMainBullets:2,
                }}
                loop={true} speed={1000} simulateTouch={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                <SwiperSlide style={{backgroundColor:'black', borderRadius:'2rem'}}> <div > <Image src="https://source.unsplash.com/random?animal" alt="image1" width={1600} height={900} className={styles.carImg} /></div></SwiperSlide>
                <SwiperSlide style={{backgroundColor:'black', borderRadius:'2rem'}}> <div > <Image src="https://source.unsplash.com/random?lion" alt="image2" width={1600} height={900} className={styles.carImg} /></div></SwiperSlide>
                <SwiperSlide style={{backgroundColor:'black', borderRadius:'2rem'}}> <div > <Image src="https://source.unsplash.com/random?zebra" alt="image3" width={1600} height={900} className={styles.carImg} /></div></SwiperSlide>
                <SwiperSlide style={{backgroundColor:'black', borderRadius:'2rem'}}> <div > <Image src="https://source.unsplash.com/random?rainbow" alt="image4" width={1600} height={900} className={styles.carImg} /></div></SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
        </>
    )
}
export default CarouselTop;