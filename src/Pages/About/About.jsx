/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import displayImage from "../../assets/imageNine.png";

const About = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("personal");

  const updateActiveNav = () => {
    const pathname = location.pathname.split("/")[1];
    setActiveNav(pathname);
  };

  useEffect(() => {
    updateActiveNav();
  }, [location]);

  return (
    <div className="px-[5vw]">
      <div className=" grid grid-cols-8 items-center">
        <div className=" col-span-2 flex flex-col gap-4 items-end text-right font-RussoOne">
          <NavLink to="">
            <button
              className={`px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2.5vw] duration-700 ${
                activeNav === ""
                  ? "bg-gradient-to-l from-[#4E024B] text-[3.5vw] duration-700 hover:bg-[#1f8fd0]"
                  : ""
              }`}
            >
              Personal
            </button>
          </NavLink>
          <NavLink to="/education">
            <button
              className={`px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2.5vw] duration-700 ${
                activeNav === "education"
                  ? "bg-gradient-to-l from-[#1f8fd0] text-[3.5vw] duration-700 hover:bg-[#1f8fd0]"
                  : ""
              }`}
            >
              Education
            </button>
          </NavLink>
          <NavLink to="/career">
            <button
              className={`px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2vw] duration-700 ${
                activeNav === "career"
                  ? "bg-gradient-to-l from-[#148662] text-[3.5vw] duration-700 hover:bg-[#148662]"
                  : ""
              }`}
            >
              Career
            </button>
          </NavLink>
        </div>
        <div className="col-span-3 flex flex-col items-center justify-center">
          <img
            // src="https://react-ai-portfolio.netlify.app/static/media/avatar-image.63946d5de446b95d6126.png"
            src={displayImage}
            className="h-[32vw] object-fit"
            alt=""
          />
          <h1 className="font-RussoOne text-[3vw] font-bold px-10 py-2 rounded-lg bg-[#148662]">
            So Hello There !!!
          </h1>
        </div>
        <div className="col-span-3 flex flex-col items-start text-left">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default About;
