import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  return (
    <section className="navbar">
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-start w-full py-4 nav">
        <div className="container flex flex-wrap items-center justify-between w-full mx-auto">
          <div className="flex items-center basis-auto grow">
            <div className="flex flex-row pl-0 mb-0 ml-auto list-none">
              <a
                href="#home"
                className="mx-6 text-lg font-normal tracking-wider text-white opacity-100"
              >
                Home
              </a>
              <a
                href="#skills"
                className="mx-6 text-lg font-normal tracking-wider text-white opacity-100"
              >
                Skills
              </a>
              <a
                href="#project"
                className="mx-6 text-lg font-normal tracking-wider text-white opacity-100"
              >
                Project
              </a>
              <a
                href="#contact"
                className="mx-6 text-lg font-normal tracking-wider text-white opacity-100"
              >
                Contact
              </a>
            </div>
            <span className="flex items-center py-2">
              <div className="inline-block ml-3.5">
                <a
                  href="https://www.linkedin.com"
                  className="w-11 h-11 inline-flex rounded-full mr-1.5 justify-center border-1 border-white linkedin"
                >
                  <img
                    alt="linkedin"
                    src={navIcon1}
                    className="w-5/12 z-1"
                    width="600"
                    height="400"
                  ></img>
                </a>
                <a
                  href="https://www.facebook.com"
                  className="w-11 h-11 inline-flex rounded-full mr-1.5 justify-center border-1 border-white facebook"
                >
                  <img
                    alt="facebook"
                    src={navIcon2}
                    className="w-5/12 z-1"
                    width="600"
                    height="400"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com"
                  className="w-11 h-11 inline-flex rounded-full mr-1.5 justify-center border-1 border-white instagram"
                >
                  <img
                    alt="instagram"
                    src={navIcon3}
                    className="w-5/12 z-1"
                    width="600"
                    height="400"
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
