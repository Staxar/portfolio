// import CircularProgressBar from "./index";
import { useState, useEffect } from "react";
import "swiper/css";
// import "../../style/components/skills.scss";
const SkillCard = ({ value, src, alt }) => {
  const [style, setStyle] = useState(`rotate(${0}deg)`);

  useEffect(() => {
    setStyle(`rotate(${360 * (value / 100)}deg)`);
  }, [value]);
  const styles = {
    transform: style,
  };

  return (
    <div className="skills__card">
      <div className="skills__box">
        <p className="skills__img">
          <span className="skills__text">
            <img src={src} alt={alt} width="600" height="400"></img>
          </span>
        </p>
        <p className="skills__text">{alt}</p>
      </div>
      <span className="skills__dots dots" style={styles}></span>
      <svg className="skills__svg">
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
