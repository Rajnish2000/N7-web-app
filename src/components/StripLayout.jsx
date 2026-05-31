import FrameStrip from "../assets/FrameStrip.svg";
const StripLayout = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl">
        <img src={FrameStrip} alt="Frame Strip" className="w-full h-full object-cover" />
    </div>
  );
};

export default StripLayout;