import React from "react";
// import headerimg from "../assets/img/header-img.svg";
import astronaut from "../assets/img/astronaut.png";
import TypeAnimation from "react-type-animation";

function Home() {
  return (
    <section
      id="home"
      className="banner mt-0 bg-cover	bg-no-repeat bg-top-center pt-64 pb-60"
    >
      <div className="m-auto px-5 w-3/4">
        <div className="columns-2 w-full">
          <div className="w-auto flex flex-col">
            <span className="border-solid border-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-2.5 font-bold inline-block mb-4 text-lg text-center w-1/2">
              Welcome to my Portfolio
            </span>
            <h1 className="text-6xl font-bold tracking-wide leading-none mb-5 block">
              Hi! I'm Marcin
            </h1>
            <h1 className="text-6xl font-bold tracking-wide leading-none mb-5 block h-14">
              <TypeAnimation
                cursor={false}
                sequence={["Web developer", 2000, "software engineer", 2000]}
                wrapper="h2"
                repeat={Infinity}
              />
            </h1>

            <p className="text-lg tracking-wide	w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-3/4 flex m-auto">
            <img
              alt="banner"
              src={astronaut}
              className="animate-bounceslow"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
