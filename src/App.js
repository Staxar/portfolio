import "./style/index.scss";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
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
      <Contact />
    </div>
  );
}

export default App;
