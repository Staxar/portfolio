import astronaut from "../assets/img/webp/astronaut.webp";
import TypeAnimation from "react-type-animation";

function Home() {
  return (
    <section
      id="home"
      className="pt-64 mt-0 bg-no-repeat bg-cover banner bg-top-center pb-60"
    >
      <div className="w-3/4 px-5 m-auto">
        <div className="w-full columns-2">
          <div className="flex flex-col w-auto">
            <span className="border-solid border-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-2.5 font-bold inline-block mb-4 text-lg text-center w-1/2">
              Welcome to my Portfolio
            </span>
            <h1 className="block mb-5 text-6xl font-bold leading-none tracking-wide">
              Hi! I'm Marcin
            </h1>
            <span className="static block mb-5 text-6xl font-bold leading-none tracking-wide h-14 w-max">
              <TypeAnimation
                cursor={false}
                component={"span"}
                sequence={["Web Developer", 2000, "Software Engineer", 2000]}
                wrapper="h2"
                repeat={Infinity}
              />
            </span>

            <p className="w-full text-lg tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex w-3/4 m-auto">
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

export default Home;
