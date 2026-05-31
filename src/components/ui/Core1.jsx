import laptop from "../../assets/Maskgroup.svg";
import Button from "./Button";
export default function Core1() {
  return (
    <div className="w-full flex bg-[#000D12] overflow-hidden flex-row items-center justify-around py-30 pl-20">
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-151.75 h-67.75">
          <h2 className="text-[#E9F4F9] text-6xl font-normal md:text-5xl leading-tight max-w-2xl">
            A complete cloud-based core banking.
          </h2>
          <p className="mt-6 max-w-80 text-[#A7B3BE] text-[16px] leading-[170%] mb-6">
            Faster time to market with our cloud-based core banking services
          </p>
          <Button
            name="Request Demo"
            bgColor={{ bg1: "#00B4FD", bg2: "#003ACE" }}
            textColor="#E9F4F9"
          />
        </div>
        <a
          href="#"
          className="text-cyan-400 text-xs font-semibold uppercase hover:text-cyan-300 transition-colors tracking-wider"
        >
          Learn More <span className="text-sm">→</span>
        </a>
      </div>
      <div>
        <div className="w-162.75 h-85.25 relative flex left-61.75 border border-[#00B4FD] rounded-tl-xl p-2">
          <img src={laptop} alt="laptop" />
        </div>
        <div className="float-end rounded-bl-[30px] p-px bg-linear-to-r from-[#00B4FD] to-[#003ACE]">
  <div className="h-5.25 w-112.75 rounded-bl-[29px] bg-[#000D12]"></div>
</div>
      </div>
    </div>
  );
}
