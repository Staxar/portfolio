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
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">My technical skills</p>
        <div className="skills__container">
          <Swiper
            breakpoints={{
              400: {
                slidesPerView: 2,
              },
              568: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={5}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            className="swiper-container"
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
    </section>
  );
}

export default Skills;
