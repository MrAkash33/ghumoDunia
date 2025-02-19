"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({slides,className}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay, EffectFade]} // Add EffectFade module
    effect="fade" // Enables the fade effect
    fadeEffect={{ crossFade: true }} // Smooth crossfade between slides
    autoplay={{ delay: 1000 }}
    pagination={{ clickable: true }}
    loop={true} // Enables infinite scrolling
    className={className}
    >
      {slides?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ textAlign: "center" }}>
            <h1>{slide.title}</h1>
            {/* <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            /> */}
          </div>
          
        </SwiperSlide>
      ))}
      <p>a journey in which you go somewhere, usually for a <span> short time</span>, and come back again: <span>trip</span> from somewhere to somewhere The <span>trip</span> from York to Newcastle takes about an hour by train. on a <span>trip</span> We're going on a <span>trip</span> to Norway this summer.</p>
    </Swiper>
  );
};

export default Carousel;
