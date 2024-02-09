import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { SiAircanada } from "react-icons/si";

const Education = () => {
  return (
    <Fade cascade damping={0.5} duration={2000}>
      <div>
        <Helmet>
          <title>Mahisur | Home | Education</title>
        </Helmet>
        <SiAircanada className="text-9xl font-RussoOne my-5 ml-5"></SiAircanada>
        <h1 className="bg-gradient-to-r from-[#1f8fd0] rounded-s-full px-[2vw] flex items-center font-RussoOne text-[2vw]">{`2022 Bachelors Drop-Out`}</h1>
        <p className="text-[1.2vw] font-RussoOne mt-5 ml-10">{`Apart from my Bachelor's, I pursued my SEO, WordPress, Blogger career, all by own. But gradually, I found my insterest into coding stuffs. Hence, I self-learned MERN STACK and punched myself into the practical field with a bunch of real-life projects `}</p>
      </div>
    </Fade>
  );
};

export default Education;
