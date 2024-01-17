import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Card from "./Card";
register();

const TeamCardsEffect = () => {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <Swiper
        style={{
          height: "auto",
          borderRadius: "2rem",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        effect="cards"
        modules={[EffectCards]}
        perSlideOffset={80}
        // replace the divs i made with the Card of yours
        loop={true}
        speed={500}
        simulateTouch={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        <SwiperSlide>{<Card name={"Akki"} />}</SwiperSlide>
        <SwiperSlide>{<Card name={"Mem2"} />}</SwiperSlide>
        <SwiperSlide>{<Card name={"Mem3"} />}</SwiperSlide>
        <SwiperSlide>{<Card name={"Akkii"} />}</SwiperSlide>
        <SwiperSlide>{<Card name={"Akkiii"} />}</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default TeamCardsEffect;