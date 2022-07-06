import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  return (
    <section className="navbar">
      <nav className="nav py-4 fixed w-full top-0 z-50 flex-wrap justify-start flex items-center">
        <div className="container mx-auto flex flex-wrap items-center justify-between w-full">
          <a href="/" className="w-2">
            <h1>Logo</h1>
          </a>
          <div className="flex basis-auto grow items-center">
            <div className="flex-row ml-auto flex pl-0 mb-0 list-none">
              <a
                href="#home"
                className="opacity-100 font-normal text-white text-lg tracking-wider mx-6"
              >
                Home
              </a>
              <a
                href="#skills"
                className="opacity-100 font-normal text-white text-lg tracking-wider mx-6"
              >
                Skills
              </a>
              <a
                href="#project"
                className="opacity-100 font-normal text-white text-lg tracking-wider mx-6"
              >
                Project
              </a>
            </div>
            <span className="flex items-center py-2">
              <div className="inline-block ml-3.5">
                <a
                  href="www.linkedin.com"
                  className="bg-slate-300 w-11 h-11 inline-flex rounded-full mr-1.5 justify-center border-1 border-white"
                >
                  <img
                    alt="linkedin"
                    src={navIcon1}
                    className="w-5/12 z-1"
                  ></img>
                </a>
                <a
                  href="www.linkedin.com"
                  className="bg-slate-300 w-11 h-11 inline-flex rounded-full mr-1.5 justify-center border-1 border-white"
                >
                  <img
                    alt="facebook"
                    src={navIcon2}
                    className="w-5/12 z-1"
                  ></img>
                </a>
                <a
                  href="www.linkedin.com"
                  className="bg-slate-300 w-11 h-11 inline-flex rounded-full mr-1.5 justify-center border-1 border-white"
                >
                  <img
                    alt="instagram"
                    src={navIcon3}
                    className="w-5/12 z-1"
                  ></img>
                </a>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
