import React from "react";
import OneShot from "../assets/img/webp/OneShot.webp";
import TestYourSelf from "../assets/img/webp/testoursefl.webp";
import QuizFight from "../assets/img/webp/Quiz-Fight.webp";
import ecb from "../assets/img/webp/ecb.webp";
import ShP from "../assets/img/webp/ShP.webp";
import freevent from "../assets/img/webp/freevent.webp";
import axa from "../assets/img/webp/axa.webp";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Sharepoint FSDIGITAL",
      description:
        "Create dozen of pages in custom sharepoint for FSDIGITAL group",
      imgUrl: ShP,
    },
    {
      title: "European Central Bank",
      description: "Development and skill-up",
      imgUrl: ecb,
    },
    {
      title: "One-Shot CapSelf",
      description: "Development",
      imgUrl: OneShot,
    },
    {
      title: "TEST YourSelf",
      description: "Development",
      imgUrl: TestYourSelf,
    },
    {
      title: "Quiz Fight",
      description: "Development",
      imgUrl: QuizFight,
    },
    {
      title: "Freevent",
      description: "Design & Development",
      imgUrl: freevent,
    },
    {
      title: "AXA Japan",
      description: "Development",
      imgUrl: axa,
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">My projects</p>
        <div className="grid projects__grid">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
