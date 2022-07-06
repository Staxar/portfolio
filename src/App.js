import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
