import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { SiAlby } from "react-icons/si";

const Career = () => {
  return (
    <Fade cascade damping={0.1} duration={2000}>
      <div>
        <Helmet>
          <title>Mahisur | Home | Career</title>
        </Helmet>
        <SiAlby className="text-9xl font-RussoOne my-5 ml-5"></SiAlby>
        <h1 className="bg-gradient-to-r from-[#148662] rounded-s-full px-[2vw] flex items-center font-RussoOne text-[2vw]">
          2024 MERN STACK Developer
        </h1>
        <p className="text-[1.2vw] font-RussoOne mt-5 ml-10">{`Being a MERN STACK developer, I can handle both the Front-End also the Back-End of the application, without any hassle. Besides I can play around / manipulate your data according to your business benefits. `}</p>
      </div>
    </Fade>
  );
};

export default Career;
