import Navbar from "./Navbar";
import "@fontsource/archivo/500.css";
import homeImage from "../assets/Home.png";
import homeImage2 from "../assets/Home2.png";
import girlLaptop from "../assets/girllaptop.jpg";
import Group45 from "../assets/Group45.png";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Group46 from "../assets/Group46.png";
import Group47 from "../assets/Group47.png";
import Button from "./ui/Button";
const Hero = () => {
  return (
    <div className="w-full h-202.75 flex flex-col items-start justify-start gap-20 px-4 py-8 bg-[#000D12]">
      <Navbar />
      <div className="w-full grid lg:grid-cols-2 gap-20 items-center justify-end relative top-52.75 px-6">
        <div className="w-151.75 h-79.75 flex flex-col items-start justify-start gap-8">
          <div className="h-54.5">
            <div>
              <h1 className="max-w-151.75 font-archivo text-[64px] font-medium leading-[120%] text-[#E9F4F9]">
                The new foundation of modern banking
              </h1>
              <p className="mt-6 max-w-89.5 text-[#A7B3BE] text-[16px] leading-[170%]">
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </p>
            </div>
          </div>
          <div className="w-109.5 h-12.25 flex flex-col sm:flex-row gap-4 mt-8">
            <Button name="Request Demo" bgColor={{ bg1: "#00B4FD", bg2: "#003ACE" }} textColor="#E9F4F9" />
            <Button name="Contact Us" textColor="#E9F4F9" border="#E9F4F9" />
          </div>
        </div>
        <div className="w-140.5 h-75.25 relative flex justify-center">
          <div className="w-99.5 h-99.5 rounded-full bg-[linear-gradient(to_right,#00B4FD,#003ACE)] opacity-50 blur-3xl absolute left-22" />
          <div className="relative top-10">
            <img
              src={girlLaptop}
              alt=""
              className="relative w-90.5 h-75 object-cover rounded-4xl"
            />

            <img
              src={homeImage}
              alt=""
              className="absolute top-0 left-60 w-65 rounded-xl shadow-xl"
            />
            <img
              src={homeImage2}
              alt=""
              className="absolute bottom-6 -left-30 w-55 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="w-155.25 h-13.75 absolute top-163.75 left-4 flex flex-col justify-start gap-4 px-6">
        <h3 className="text-[#E9F4F9] text-archivo">Trusted By: </h3>
        <ul className="w-full grid grid-cols-6 gap-2 opacity-90">
          <li className="flex gap-1 leading-[110%]">
            <img src={Vector} alt="no images" className="w-4.75 h-4.5" />
            <span className="text-[#586E84] font-roboto font-bold text-[13px]">
              SHELLS
            </span>
          </li>
          <li className="flex gap-1 leading-[110%] justify-around">
            <img src={Group45} alt="no images" className="w-4.75 h-4.5" />
            <span className="text-[#586E84] font-roboto font-bold text-[13px]">
              SmartFinder
            </span>
          </li>
          <li className="flex gap-1 leading-[130%] justify-around">
            <img src={Vector2} alt="no images" className="w-4.75 h-4.5" />
            <span className="text-[#586E84] font-roboto font-bold text-[13px]">
              Zoomerr
            </span>
          </li>
          <li className="flex gap-1 leading-[130%] justify-around">
            <img src={Group46} alt="no images" className="w-4.75 h-4.5" />
            <span className="text-[#586E84] font-roboto font-bold text-[13px]">
              ArtVenue
            </span>
          </li>
          <li className="flex gap-1 leading-[130%] justify-around">
            <img src={Group47} alt="no images" className="w-4.75 h-4.5" />
            <span className="text-[#586E84] font-roboto font-bold text-[13px]">
              kontrastr
            </span>
          </li>
          <li className="flex gap-1 leading-[130%] justify-around">
            <img src={Vector3} alt="no images" className="w-4.75 h-4.5" />
            <span className="text-[#586E84] font-roboto font-bold text-[13px]">
              WAVESMARATHON
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
