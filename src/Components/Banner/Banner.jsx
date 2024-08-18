import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import wooden1 from "../../../public/wood1.avif";
import wooden2 from "../../../public/wood2.avif";
import wooden3 from "../../../public/wooden3.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        className="mySwiper"
        style={{ width: "100vw", height: "60vh" }}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <img className="w-full h-[60vh]" src={wooden1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[60vh]" src={wooden2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[60vh]" src={wooden3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
