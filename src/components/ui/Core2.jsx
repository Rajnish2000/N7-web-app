import { Check } from "lucide-react";
import dashboard from "../../assets/Maskgroup.png";

const Core2 = () => {
    const benefits = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const benefits2 = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];
  return (
    <div className="w-full flex bg-[#000D12] overflow-hidden flex-row items-center justify-between py-30">
      <div>
        <div className="w-100 h-85.25 relative right-2 flex border border-[#00B4FD] rounded-tr-xl p-2">
          <img src={dashboard} alt="dashboard" />
        </div>
        <div className="float-end rounded-br-[30px] p-px bg-linear-to-l from-[#00B4FD] to-[#003ACE]">
          <div className="h-5.25 w-112.75 rounded-br-[29px] bg-[#000D12]"></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start">
        <div className="w-151.75 h-36 text-archivo">
          <h2 className="text-[#E9F4F9] text-3xl font-normal md:text-3xl leading-tight max-w-2xl">
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </h2>
          <p className="mt-6 max-w-80 text-[#A7B3BE] text-[16px] leading-[170%] mb-6">
            What you will get:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 mt-1 px-30">
            
            <div className="space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0057FF] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>

                  <p className="text-archivo font-normal text-[14px] md:text-[14px] leading-[110%] text-[#B7C2CC]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {benefits2.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0057FF] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>

                  <p className="text-archivo font-normal text-[14px] md:text-[14px] leading-[110%] text-[#B7C2CC]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
      </div>
    </div>
  );
};

export default Core2;
