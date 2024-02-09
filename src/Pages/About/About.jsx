/* eslint-disable react-hooks/exhaustive-deps */
import { Link, Outlet, useLocation } from "react-router-dom";
import displayImage from "../../assets/imageFive.png";
import { useEffect, useState } from "react";


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
          <Link to="/personal">
            <button className={`px-[4vw] rounded-e-full duration-700 ${activeNav === "personal" ? 'bg-gradient-to-l from-[#540351] text-[3.5vw] duration-700' : ''}`}>
              Personal
            </button>
          </Link>
          <Link to="/education">
            <button className={`px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2.5vw] duration-700 ${activeNav === "education" ? 'bg-gradient-to-l from-[#540351] text-[3.5vw] duration-700' : ''}`}>
              Education
            </button>
          </Link>
          <Link to="/career">
            <button className={`px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2vw] duration-700 ${activeNav === "career" ? 'bg-gradient-to-l from-[#540351] text-[3.5vw] duration-700' : ''}`}>
              Career
            </button>
          </Link>
        </div>
        <div
          className="col-span-3"
        >
          <img
            src={displayImage}
            className="h-fit object-cover"
            alt=""
          />
        </div>
        <div className="col-span-3 flex flex-col items-start text-left">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default About;
