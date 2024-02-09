/* eslint-disable react-hooks/exhaustive-deps */
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import displayImage from "../../assets/imageNine.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Skills.css";
import { GiEagleEmblem } from "react-icons/gi";

const Skills = () => {
  const links = (
    <>
      <NavLink
        to="frontend"
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "bg-green-400 px-[2vw] rounded-full" : "duration-700 bg-[#ff0000] px-[2vw] rounded-full hover:bg-white hover:text-black hover:duration-700"
        }
      >
        Front End
      </NavLink>
      <NavLink
        to="backend"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-green-400 px-[2vw] rounded-full" : "duration-700 bg-[#23c0d4] px-[2vw] rounded-full hover:bg-white hover:text-black hover:duration-700"
        }
      >
        Back End
      </NavLink>
      
    </>
  );

  return (
    <Fade cascade damping={0.5} duration={2000}>
      <div className="px-[5vw]">
        <Helmet>
          <title>Mahisur | Skills</title>
        </Helmet>
        <div className="grid grid-cols-2 gap-[5vw] justify-between items-center">
          <Fade cascade damping={0.5} duration={2500}>
            <div className="flex flex-col">
              <img
                src={displayImage}
                className="h-[33vw] object-contain image-shadows"
                alt=""
              />
              <Link to={"/contact"}>
                <button className="duration-700 tracking-wider font-RussoOne text-[2vw] font-bold px-5 py-2 rounded-full text-white bg-[#ff0000] hover:text-black hover:cursor-pointer hover:duration-700">
                  Contact Me To Solve Your Queries
                </button>
              </Link>
            </div>
          </Fade>
          <div className="flex flex-col">
            <div className="flex gap-5 mb-[4vw] items-center">
              <div>
                <Link to="/"><GiEagleEmblem className="text-[10vw] image-shadows duration-700 hover:text-[#ff0000]"></GiEagleEmblem></Link>
              </div>
              <div className="flex flex-col font-RussoOne text-[3vw] gap-[1vw]">{links}</div>
            </div>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
