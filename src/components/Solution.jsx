import coreBanking from "../assets/coreBanking.png";
import digitalBanking from "../assets/digitalBanking.png";
import openBanking from "../assets/openBanking.png";
import loanOrigination from "../assets/loanOrigination.png";
import loanManagement from "../assets/loanManagement.png";
import Button from "./ui/Button";

const Solution = () => {
  const solutions = [
    {
      id: 1,
      icon: coreBanking,
      title: 'Core Banking CB7',
      description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
      tag: '',
    },
    {
      id: 2,
      icon: digitalBanking,
      title: 'Digital Banking N7',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
      tag: '',
    },
    {
      id: 3,
      icon: openBanking,
      title: 'Open Banking',
      description: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
      tag: '',
    },
    {
      id: 4,
      icon: loanOrigination,
      title: 'Loan Origination System',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
      tag: 'NBFC',
    },
    {
      id: 5,
      icon: loanManagement,
      title: 'Loan Management System',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
      tag: 'NBFC',
    },
  ];

  const renderIcon = (icon) => {
    const iconClass = 'w-16 h-16 text-cyan-400 mb-8';
    return (
            <img src={icon} alt="Icon" className={iconClass} />
        )
  };

  return (
    <section className="relative w-full bg-[#000D12] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-360 mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 text-archivo">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 w-full lg:w-[42%] mb-8 lg:mb-0 pt-2">
          <div className="w-full">
            <h2 className="text-[#E9F4F9] text-4xl font-normal leading-tight max-w-2xl">
              All of our solutions are tailor-made to your needs
            </h2>
          </div>
          <Button name="REQUEST DEMO" textColor="#E9F4F9" border="#E9F4F9" />
        </div>

        <div className="absolute -z-10 rounded-full bg-[linear-gradient(to_right,#00B4FD,#003ACE)] opacity-10 blur-3xl right-4 top-24 w-72 h-72 sm:right-6 sm:top-28 sm:w-80 sm:h-80 md:right-10 md:top-32 lg:top-40 lg:w-[28rem] lg:h-[28rem]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full lg:w-[56%]">
          {solutions.slice(0, 5).map((solution) => (
            <div key={solution.id} className="px-6 sm:px-8 py-8 backdrop-blur-sm">
              <div className="mb-4 flex flex-row items-end justify-between gap-4">
                {renderIcon(solution.icon)}
                {solution.tag && (
                  <p className="text-[#A7B3BE] text-xs font-normal tracking-widest">{solution.tag}</p>
                )}
              </div>

              <h3 className="text-[#E9F4F9] text-2xl font-light mb-6">
                {solution.title}
              </h3>

              <p className="text-[#A7B3BE] text-sm leading-relaxed font-light mb-8">
                {solution.description}
              </p>

              <a href="#" className="text-cyan-400 text-xs font-semibold uppercase hover:text-cyan-300 transition-colors inline-flex items-center gap-2 tracking-wider">
                Learn More <span className="text-sm">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;