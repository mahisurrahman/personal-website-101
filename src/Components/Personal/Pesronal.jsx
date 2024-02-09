import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { AiFillCustomerService } from "react-icons/ai";

const Pesronal = () => {
  return (
    <Fade cascade damping={0.5} duration={2000}>
      <div>
        <Helmet>
          <title>Mahisur | Home | Personal</title>
        </Helmet>
        <AiFillCustomerService className="text-9xl font-RussoOne my-5 ml-5"></AiFillCustomerService>
        <h1 className="bg-gradient-to-r from-[#540351] rounded-s-full px-[2vw] flex items-center font-RussoOne text-[3vw]">
          Personal
        </h1>
        <p className="text-[1.2vw] font-RussoOne mt-5 ml-10">{`Hi, This is Mahisur Rahaman! Welcome to Website. I have providing MERN Stack web services for 3 years. Having friendly clients from all around the globe, I don't have any language barrier. Hence, feel free to communicate with me if you have any queries`}</p>
      </div>
    </Fade>
  );
};

export default Pesronal;
