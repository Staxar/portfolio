import React from "react";
import SkillCard from "./SkillCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import react from "../assets/img/webp/react.webp";
import php from "../assets/img/webp/php.webp";
import javascript from "../assets/img/webp/javascript.webp";
import html from "../assets/img/webp/html.webp";
import ai from "../assets/img/webp/AI.webp";
import cpp from "../assets/img/webp/cpp.webp";
import css from "../assets/img/webp/css.webp";
import excel from "../assets/img/webp/excel.webp";
// import mongodb from "../assets/img/webp/mongodb.webp";
import mysql from "../assets/img/webp/mysql.webp";
import prestashop from "../assets/img/webp/prestashop.webp";
import python from "../assets/img/webp/python.webp";
import shp from "../assets/img/webp/sharepoint.webp";
// Import Swiper styles
import "swiper/css";
SwiperCore.use([Autoplay]);
function Skills() {
  const skillz = [
    {
      value: 85,
      src: javascript,
      alt: "JavaScript",
    },
    {
      value: 70,
      src: react,
      alt: "React",
    },
    {
      value: 60,
      src: php,
      alt: "PHP",
    },
    {
      value: 85,
      src: html,
      alt: "HTML",
    },
    {
      value: 60,
      src: ai,
      alt: "AI",
    },
    {
      value: 70,
      src: cpp,
      alt: "C++",
    },
    {
      value: 85,
      src: css,
      alt: "CSS / SASS",
    },
    {
      value: 100,
      src: excel,
      alt: "Excel",
    },
    {
      value: 85,
      src: mysql,
      alt: "SQL",
    },
    {
      value: 85,
      src: prestashop,
      alt: "PrestaShop",
    },
    {
      value: 60,
      src: python,
      alt: "Python",
    },
    {
      value: 70,
      src: shp,
      alt: "Sharepoint",
    },
  ];

  return (
    <section id="skills" className="">
      <div className="w-3/4 px-5 py-5 m-auto">
        <div className="flex flex-wrap m-auto">
          <div className="w-full">
            <div className="p-12 text-center border-2 border-solid rounded-3xl">
              <h2 className="mb-5 text-6xl font-bold leading-none tracking-wide">
                Skills
              </h2>
              <p className="text-lg tracking-wide my-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <div className="my-9">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={4}
                  autoplay={{
                    delay: 2500,
                  }}
                  loop={true}
                  loopFillGroupWithBlank={true}
                >
                  {skillz.map((skill, index) => {
                    return (
                      <SwiperSlide data-swiper-autoplay="2000" key={index}>
                        <SkillCard key={index} {...skill} />
                      </SwiperSlide>
                    );
                  })}
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
