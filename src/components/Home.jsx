import astronaut from "../assets/img/webp/astronaut.webp";
import TypeAnimation from "react-type-animation";
function Home2() {
  return (
    <section id="home" className="home section">
      <div className="container">
        <div className="grid home__grid">
          <div className="grid-item">
            <span className="home__box home__subtitle">
              Welcome to my Portfolio
            </span>
            <h1 className="home__title home__spacing">Hi! I'm Marcin</h1>
            <span className="">
              <TypeAnimation
                cursor={false}
                component={"span"}
                sequence={["Web Developer", 2000, "Software Engineer", 2000]}
                wrapper="h2"
                repeat={Infinity}
                className="home__title"
              />
            </span>
          </div>
          <div className="grid-item">
            <img
              alt="banner"
              src={astronaut}
              className="animate-bounceslow"
              width="600"
              height="400"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
