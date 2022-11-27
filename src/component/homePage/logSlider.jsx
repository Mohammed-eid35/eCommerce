import React, { useRef, useState } from "react";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo5.png";
import logo6 from "./img/logo6.png";
import logo7 from "./img/logo7.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Grid } from "swiper";

import SwiperCore, { Autoplay } from "swiper";
// import required modules
SwiperCore.use([Autoplay]);
export const LogoSwiper = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            width: 400,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          900: {
            width: 900,
            slidesPerView: 3,
          },
        }}
        style={{ height: "100%", paddingBottom: "80px" }}
        slidesPerView={6}
        spaceBetween={12}
        modules={[Grid]}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        className="mySwiper container"
      >
        <SwiperSlide>
          <img src={logo1} className="logoSwip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} className="logoSwip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} className="logoSwip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} className="logoSwip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} className="logoSwip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo6} className="logoSwip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo7} className="logoSwip" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
