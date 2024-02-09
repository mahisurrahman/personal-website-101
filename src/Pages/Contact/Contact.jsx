import { Fade } from "react-awesome-reveal";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <Fade cascade duration={1000}>
      <Helmet>
        <title>Mahisur | Contact</title>
      </Helmet>
      <div className="w-full py-[2vw] px-[5vw] flex justify-center items-center">
        <form className="flex flex-col ">
          <input
            className="bg-transparent border border-blue-600 rounded-lg font-RussoOne text-[1.2vw] tracking-wider placeholder:text-yellow-500 w-[30vw] px-[2vw] py-[1vw]"
            type="text"
            name="name"
            id=""
            placeholder="Name"
          />
          <br />
          <input
            className="bg-transparent border border-blue-600 rounded-lg font-RussoOne text-[1.2vw] tracking-wider placeholder:text-yellow-500 w-[30vw] px-[2vw] py-[1vw]"
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
          <br />
          <textarea
            className="bg-transparent border border-blue-600 rounded-lg font-RussoOne text-[1.2vw] tracking-wider placeholder:text-yellow-500 w-[30vw] h-[15vw] px-[2vw] py-[1vw]"
            type="text"
            name="email"
            id=""
            placeholder="Text Here"
          />
          <input className="duration-700 w-[30vw] py-[0.25vw] bg-blue-700 mt-[1vw] rounded-2xl text-yellow-500 text-[2vw] font-RussoOne hover:bg-[#ff0000] hover:text-white hover:duration-700 hover:cursor-pointer" type="submit" value="Submit" />
        </form>
      </div>
    </Fade>
  );
};

export default Contact;
