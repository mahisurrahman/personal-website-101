import { Link } from "react-router-dom";
import displayImage from "../../assets/imageFour.png";
import "./About.css";
import { useRef } from "react";

const About = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const xAxis = (window.innerWidth / 10 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 20 - e.pageY) / 25;
    imageRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className="px-[10vw]">
      <div className=" grid grid-cols-8 items-center">
        <div className=" col-span-2 flex flex-col gap-4 items-end text-right font-RussoOne">
          <Link to="/personal">
            <button className="bg-gradient-to-l from-[#540351] px-[4vw] rounded-e-full text-[3.5vw] hover:bg-gradient-to-l hover:from-zinc-500">
              Personal
            </button>
          </Link>
          <Link to="/education">
            <button className="px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2.5vw]">
              Education
            </button>
          </Link>
          <Link to="/career">
            <button className="px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2vw]">
              Career
            </button>
          </Link>
        </div>
        <div
          className="col-span-4"
          id="imageContainer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={displayImage}
            className="h-[78vh] w-[100vw] object-cover"
            id="rotatingImage"
            ref={imageRef}
            alt=""
          />
        </div>
        <div className="col-span-2 flex flex-col items-start text-left">
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
