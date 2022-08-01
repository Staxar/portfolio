import astronaut from "../../assets/img/webp/astronaut.webp";
import TypeAnimation from "react-type-animation";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
function Home2() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: "transparent",
    color: "#ffff",
  }));
  return (
    <section id="home" className="home section">
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <span className="">Welcome to my Portfolio</span>
              <h1 className="block mb-5 font-bold leading-none tracking-wide md:text-6xl xl: sm:text-lg">
                Hi! I'm Marcin
              </h1>
              <span className="static block mb-5 font-bold leading-none tracking-wide xl:text-6xl h-14 w-max sm:text-lg">
                <TypeAnimation
                  cursor={false}
                  component={"span"}
                  sequence={["Web Developer", 2000, "Software Engineer", 2000]}
                  wrapper="h2"
                  repeat={Infinity}
                />
              </span>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img
                alt="banner"
                src={astronaut}
                className="animate-bounceslow"
                width="600"
                height="400"
              ></img>
            </Item>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Home2;
