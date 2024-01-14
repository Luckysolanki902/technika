import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import styles from './compstyles/sponsors.module.css';

register();

const SponsorCarousel = ({ sponsorsimgs, reversedirection }) => {
  const importAll = (r) => r.keys().map(r);
  const breakpoints = {
    320: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    650: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  };

  return (
    <Swiper
      loop
      speed={2000}
      simulateTouch={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
        reverseDirection:reversedirection,

      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      breakpoints={breakpoints}
    >
      {sponsorsimgs.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={styles.circle}>
            <Image
              width={1500 / 10}
              height={1000 / 10}
              src={image.default.src}
              alt={`Sponsor ${index}`}
              style={{ aspectRatio: '1', objectFit: 'contain', width: '80%', height: 'auto' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SponsorCarousel;
