import { SiAircanada } from "react-icons/si";


const Education = () => {
    return (
        <div>
        <SiAircanada className="text-9xl font-RussoOne my-5 ml-5"></SiAircanada>
        <h1 className="animate-pulse bg-gradient-to-r from-[#1f8fd0] rounded-s-full px-[2vw] flex items-center font-RussoOne text-[2vw]">{`2022 Bachelors Drop-Out`}</h1>
        <p className="text-[1.2vw] font-RussoOne mt-5 ml-10">{`Apart from my Bachelor's, I pursued my SEO, WordPress, Blogger career, all by own. But gradually, I found my insterest into coding stuffs. Hence, I self-learned MERN STACK and punched myself into the practical field with a bunch of real-life projects `}</p>
    </div>
    );
};

export default Education;