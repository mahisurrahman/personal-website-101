import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./MainLayout.css";
import backgroundVideo from "../../assets/backgroundVideoTwo.mp4";

const MainLayout = () => {
  return (
    <div className="layoutCss w-full h-screen text-white">
      <div className="background-video">
        <video autoPlay muted loop className="video">
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
        <div className="overlay"></div>
      </div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
