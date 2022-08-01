// import CircularProgressBar from "./index";
import { useState, useEffect } from "react";
import "swiper/css";
const SkillCard = ({ value, src, alt }) => {
  const [style, setStyle] = useState(`rotate(${0}deg)`);

  useEffect(() => {
    setStyle(`rotate(${360 * (value / 100)}deg)`);
  }, [value]);
  const styles = {
    transform: style,
  };

  return (
    <div className="relative flex flex-col items-center justify-center rounded-full block_dot w-[11.25rem] h-[11.25rem] text-4xl font-bold">
      <div className="box relative flex flex-col items-center justify-center rounded-full bg-[#292929] before:absolute before:content-[''] before:rounded-full">
        <p className="w-1/2">
          <span className="text-4xl font-bold num">
            <img src={src} alt={alt} width="600" height="400"></img>
          </span>
        </p>
        <p className="text-base text-neutral-300">{alt}</p>
      </div>
      <span
        className="dots block absolute z-[2] w-full h-full rounded-full after:absolute after:content-[''] after:w-2.5 after:h-2.5 after:top-1 after:left-1/2 after:rounded-full after:bg-[#b7b5b5]  "
        style={styles}
      ></span>
      <svg className="absolute w-full h-full fill-[none] rotate-[-90deg]">
        <defs>
          <linearGradient id="gradientStyle">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          className="circle"
          cx="90"
          cy="90"
          r="80"
          style={{ strokeDashoffset: 503 - 503 * (value / 100) }}
        />
      </svg>
    </div>
  );
};

export default SkillCard;
