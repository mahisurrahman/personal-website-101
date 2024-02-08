import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUserAstronaut } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { GiFiles } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <Link to="/" className="flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700">
        <FaUserAstronaut></FaUserAstronaut>
        <h1 className="text-[1vw] tracking-widest">About</h1>
      </Link>
      <Link to="skills" className="flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700">
        <GoGear></GoGear>
        <h1 className="text-[1vw] tracking-widest">Skills</h1>
      </Link>
      <Link to="portfolio" className="flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700">
        <GiFiles></GiFiles>
        <h1 className="text-[1vw] tracking-widest">Portfolio</h1>
      </Link>
      <Link to="contact" className="flex flex-col items-center hover:text-blue-500 hover:underline hover:cursor-pointer hover:duration-700">
        <FaEnvelopeOpenText></FaEnvelopeOpenText>
        <h1 className="text-[1vw] tracking-widest">Contact</h1>
      </Link>
    </>
  );
  return (
    <div className="px-[3vw] py-[2vw]">
      <div className="flex justify-between items-center">
        <div className="font-RussoOne">
            <h1 className="text-[2vw]">Mahisur Rahaman</h1>
            <hr />
            <h1 className="text-[1vw] tracking-widest">MERN STACK DEVELOPER</h1>
        </div>
        <div className="text-[2vw] text-white font-semibold font-RussoOne flex gap-[4vw]">
          {links}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
