import { useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { ViewGrid, About, Fire, Home, Map, Close } from "../assets/Icons/Icons";
function NavBar() {
  const [active, setActive] = useState(false);

  function showMenu() {
    document
      .getElementById("nav-menu")
      .classList.add(active ? "" : "show-menu");
    setActive((a) => !a);
  }
  function closeMenu() {
    document.getElementById("nav-menu").classList.remove("show-menu");
    setActive((a) => !a);
  }
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1000) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <section className="header">
      <header
        className={`header ${
          colorChange ? "header__color" : "header__tranparent"
        }`}
        id="header"
      >
        <nav className="container nav">
          <div className="nav__menu" id="nav-menu">
            <ul className="grid nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="nav__icon">
                    <Home />
                  </i>{" "}
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="nav__icon">
                    <About />
                  </i>{" "}
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="nav__icon">
                    <Fire />
                  </i>{" "}
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="nav__icon">
                    <Map />
                  </i>{" "}
                  Contact
                </a>
              </li>
            </ul>
            <i className="nav__close" id="nav-close" onClick={closeMenu}>
              <Close />
            </i>
          </div>
          <div className="nav__pipe">|</div>
          <a
            href="https://www.linkedin.com/in/marcin-domaga%C5%82a-17a003251/"
            className="nav__logo"
          >
            <img alt="linkedin" src={navIcon1} className="nav__icons"></img>
          </a>
          <a href="/" className="nav__logo">
            <img alt="facebook" src={navIcon2} className="nav__icons"></img>
          </a>
          <a href="/" className="nav__logo">
            <img alt="instagram" src={navIcon3} className="nav__icons"></img>
          </a>
          <div className="nav__btns">
            <div className="nav__toggle" onClick={showMenu} id="nav-toggle">
              <i className="nav__icon">
                <ViewGrid />
              </i>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default NavBar;
