import { Link } from 'react-router-dom';
import displayImage from '../../assets/imageOne.png';

const About = () => {
    return (
        <div className="px-[10vw] py-[2vw]">
            <div className=" grid grid-cols-8 items-center">
                <div className=" col-span-2 flex flex-col gap-4 items-end text-right font-RussoOne">
                    <Link to="/personal"><button className='bg-gradient-to-l from-[#540351] px-[4vw] rounded-e-full text-[3.5vw] hover:bg-gradient-to-l hover:from-zinc-500'>Personal</button></Link>
                    <Link to="/education"><button className='px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2.5vw]'>Education</button></Link>
                    <Link to="/career"><button className='px-[4vw] rounded-e-full hover:bg-gradient-to-l hover:from-zinc-500 text-[2vw]'>Career</button></Link>
                </div>
                <div className="col-span-4">
                    <img src={displayImage} className='h-[73vh] w-[100vw] object-cover' alt="" />
                </div>
                <div className="col-span-2 flex flex-col items-start text-left">
                    <h1>About</h1>
                </div>
            </div>
        </div>
    );
};

export default About;