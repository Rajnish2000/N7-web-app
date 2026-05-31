import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-[716.46px]">
  <div className="flex items-center justify-between px-2.5 py-2.25 rounded-xl bg-[rgba(47,47,47,0.7)] backdrop-blur-[7.5px] overflow-hidden">
    
    <div className="shrink-0 w-8 h-7.25 font-['Archivo'] font-medium text-[24px] leading-[120%] text-[#E9F4F9]">
      N7
    </div>

    <div className="flex items-center justify-end flex-1 min-w-0 gap-3 sm:gap-5 md:gap-8 lg:gap-20">
      
      <div className="hidden sm:flex min-w-0">
        <ul className="flex items-center gap-3 md:gap-4 lg:gap-6 text-[#E9F4F9] whitespace-nowrap">
          
          <li className="flex items-center gap-1 font-['Chivo_Mono'] font-normal text-[12px] leading-[130%] uppercase">
            SOLUTIONS
            <ChevronDown className="w-4 h-4 shrink-0" />
          </li>

          <li className="flex items-center gap-1 font-['Chivo_Mono'] font-normal text-[12px] leading-[130%] uppercase">
            RESOURCES
            <ChevronDown className="w-4 h-4 shrink-0" />
          </li>

          <li className="flex items-center font-['Chivo_Mono'] font-normal text-[12px] leading-[130%] uppercase">
            ABOUT US
          </li>

        </ul>
      </div>

      <div className="flex flex-row items-center p-0 gap-5 w-40.25 h-6.5 flex-none order-1 grow-0 shrink-0">
        <button className="box-border flex flex-row justify-center items-center px-9.25 py-1.25 gap-2 w-40.25 h-6.5 border border-[#E9F4F9] rounded-md text-[#E9F4F9] font-['Chivo_Mono'] font-normal text-[12px] leading-[130%] uppercase whitespace-nowrap">
          REQUEST DEMO
        </button>
      </div>

    </div>
  </div>
</div>
  );
};

export default Navbar;
