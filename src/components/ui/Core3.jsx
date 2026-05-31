import Button from "./Button";
import CB7 from "../../assets/CB7.png";
const Core3 = ({ paddingX ,backGroundImage}) => {
  return (
    <div className={`w-full bg-[#000D12] overflow-hidden flex flex-row items-center justify-center py-${paddingX}`}>
      <div
        style={{
          backgroundImage: `${backGroundImage === "true" ? `linear-gradient(to right, rgba(3,30,42,0.4), rgba(0,13,18,0.2)),url(${CB7})` : ''}`,
        }}
        className={`bg-local bg-right bg-no-repeat flex flex-row items-center justify-center gap-10 px-20 py-28 rounded-3xl`}
      >
        <div className="justify-start flex flex-col px-10 w-140 gap-5">
          <h2 className="text-archivo font-normal text-[#E9F4F9] text-4xl">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="text-[#E9F4F9] text-archivo font-normal text-sm text-justify w-110">
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="flex flex-row justify-start gap-10">
          <Button name="Contact Us" textColor="#E9F4F9" border="#E9F4F9" />
          <Button
            name="Request Demo"
            bgColor={{ bg1: "#00B4FD", bg2: "#003ACE" }}
            textColor="#E9F4F9"
          />
        </div>
      </div>
    </div>
  );
};

export default Core3;
