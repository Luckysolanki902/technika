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

const TeamCardsEffect = ({ teamMembers }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
        loop={true}
        speed={500}
        simulateTouch={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            {<Card name={member.NAME} />} {/* Assuming the member object has a 'Name' property */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCardsEffect;
