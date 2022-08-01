import "./style/index.scss";
import Home from "./components/SCSS/Home";
import NavBar from "./components/SCSS/NavBar";
import Projects from "./components/SCSS/Projects";
import Skills from "./components/SCSS/Skills";
import Contact from "./components/Contact";
import Certificates from "./components/SCSS/Certificates";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Certificates />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
