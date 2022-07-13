import React from "react";
import OneShot from "../assets/img/webp/OneShot.webp";
import TestYourSelf from "../assets/img/webp/testoursefl.webp";
import QuizFight from "../assets/img/Quiz Fight.png";
import ecb from "../assets/img/webp/ecb.webp";
import ShP from "../assets/img/ShP.png";
import freevent from "../assets/img/freevent.png";
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
      description: "Working for ECB and skill-up",
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
  ];

  return (
    <section id="project" className="">
      <div className="m-auto px-5 w-3/4 py-5">
        <div className="flex flex-wrap m-auto">
          <div className="w-full">
            <div className="text-center p-12">
              <h2 className="text-6xl font-bold tracking-wide leading-none mb-5 block">
                Projects
              </h2>
              <p className="text-lg tracking-wide my-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
