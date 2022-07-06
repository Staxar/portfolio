import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import meter from "../assets/img/meter1.svg";

// Import Swiper styles
import "swiper/css";
import { CircularProgress } from "@mui/material";

function Skills() {
  return (
    <section id="skills" className="">
      <div className="m-auto px-5 w-3/4 py-5">
        <div className="flex flex-wrap m-auto">
          <div className="w-full">
            <div className="text-center border-solid border-2 rounded-3xl p-12">
              <h2 className="text-6xl font-bold tracking-wide leading-none mb-5 block">
                Skills
              </h2>
              <p className="text-lg tracking-wide my-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <div className="my-9">
                <Swiper spaceBetween={50} slidesPerView={3} autoplay={true}>
                  <SwiperSlide>
                    <div className="flex flex-col items-center">
                      <img src={meter} alt="1" className="w-1/2"></img>
                      <p>Web development</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center">
                      <CircularProgress variant="determinate" value={25} />
                      <p>Web development</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center">
                      <img src={meter} alt="3" className="w-1/2"></img>
                      <p>Web development</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center">
                      <img src={meter} alt="4" className="w-1/2"></img>
                      <p>Web development</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
