import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaUserAstronaut } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { GiFiles } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-lime-500"
            : "duration-700 flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700"
        }
      >
        <FaUserAstronaut></FaUserAstronaut>
      </NavLink>
      <NavLink
        to="skills"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-blue-500"
            : "duration-700 flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700"
        }
      >
        <GoGear></GoGear>
      </NavLink>
      <NavLink
        to="portfolio"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500"
            : "duration-700 flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700"
        }
      >
        <GiFiles></GiFiles>
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-500"
            : "duration-700 flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700"
        }
      >
        <FaEnvelopeOpenText></FaEnvelopeOpenText>
      </NavLink>
    </>
  );
  return (
    <Fade cascade damping={0.1} duration={2500}>
      <div className="px-[3vw] py-[2vw]">
        <div className="flex justify-between items-center">
          <div className="font-RussoOne">
            <h1 className="text-[2vw] dropping-shadow">Mahisur Rahaman</h1>
            <hr />
            <h1 className="text-[1vw] tracking-widest dropping-shadow-Two">MERN STACK APP DEVELOPER</h1>
          </div>
          <div className="text-[3vw] text-white font-semibold font-RussoOne flex gap-[4vw]">
            {links}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;
