import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import displayImage from "../../assets/imageNine.png";
import { Link } from "react-router-dom";
import './Skills.css';

const Skills = () => {
  return (
    <Fade cascade damping={0.5} duration={2000}>
      <div className="px-[5vw]">
        <Helmet>
          <title>Mahisur | Skills</title>
        </Helmet>
        <div className="grid grid-cols-2 gap-2 justify-between items-center">
          <Fade cascade damping={0.5} duration={2500}>
            <div className="flex flex-col">
              <img
                src={displayImage}
                className="h-[33vw] object-contain image-shadows"
                alt=""
              />
              <Link to={"/contact"}>
                <button className="tracking-wider font-RussoOne text-[2vw] font-bold px-5 py-2 rounded-full text-white bg-[#ff0000] hover:text-black hover:cursor-pointer hover:duration-700">
                  Contact Me To Solve Your Queries
                </button>
              </Link>
            </div>
          </Fade>
          <div></div>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
