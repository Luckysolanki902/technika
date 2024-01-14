import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules';
register();

const TeamCardsEffect = () => {
    return (
        <>
            <Swiper style={{ height: 'auto', borderRadius: '2rem' }}
                effect='cards'
                modules={[EffectCards]}
                perSlideOffset={80}
                // replace the divs i made with the Card of yours
                loop={true} speed={500} simulateTouch={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                <SwiperSlide ><div style={{ border: '1px solid white', width: '20rem', height: '24rem', color: 'black', margin: '3rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', cursor: 'pointer', background: 'white' }}>Card</div></SwiperSlide>
                <SwiperSlide ><div style={{ border: '1px solid white', width: '20rem', height: '24rem', color: 'black', margin: '3rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', cursor: 'pointer', background: 'white' }}>Card</div></SwiperSlide>
                <SwiperSlide ><div style={{ border: '1px solid white', width: '20rem', height: '24rem', color: 'black', margin: '3rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', cursor: 'pointer', background: 'white' }}>Card</div></SwiperSlide>
                <SwiperSlide ><div style={{ border: '1px solid white', width: '20rem', height: '24rem', color: 'black', margin: '3rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', cursor: 'pointer', background: 'white' }}>Card</div></SwiperSlide>
                <SwiperSlide ><div style={{ border: '1px solid white', width: '20rem', height: '24rem', color: 'black', margin: '3rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', cursor: 'pointer', background: 'white' }}>Card</div></SwiperSlide>
            </Swiper>
        </>
    )
}
export default TeamCardsEffect;