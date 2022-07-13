// import CircularProgressBar from "./index";
import { useState, useEffect } from "react";
import "swiper/css";
import "../App.css";
const SkillCard = ({
  w,
  h,
  marginTop,
  value,
  src,
  alt,
  fontSize,
  marginBottom,
}) => {
  const [style, setStyle] = useState(`rotate(${0}deg)`);

  useEffect(() => {
    setStyle(`rotate(${360 * (value / 100)}deg)`);
  }, [value]);
  console.log("style", style);
  const styles = {
    transform: style,
  };

  return (
    <div className="block_dot">
      <div className="box">
        <p className="w-1/2">
          <span className="num">
            <img src={src} alt={alt}></img>
          </span>
        </p>
        <p className="title">{alt}</p>
      </div>
      <span className="dots" style={styles}></span>
      <svg className="svg">
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
