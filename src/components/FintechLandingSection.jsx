import Button from "./ui/Button";
import Core3 from "./ui/Core3";
import iPhone13ProR from "../assets/iPhone13ProR.svg";
import iPhone13ProB from "../assets/iPhone13ProB.svg";
import iPhone13Pro from "../assets/iPhone13Pro.svg";
const featuresOne = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

const featuresTwo = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
];

const featuresThree = [
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
];

const BulletList = ({ items }) => {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start text-archivo gap-3 text-sm font-medium leading-relaxed text-[#4A5565]"
        >
          <span className="mt-1.25 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#156BFF] text-white shadow-[0_6px_18px_rgba(21,107,255,0.28)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const LearnLink = ({ children }) => {
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-[#156BFF]"
    >
      <span>{children}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14m-6-6l6 6-6 6"
        />
      </svg>
    </a>
  );
};

const FeatureSection = ({
  reverse = false,
  title,
  description,
  bullets,
  phoneType,
}) => {
  return (
    <div
      className={`grid items-center lg:grid-cols-2 ${
        reverse ? "" : "lg:grid-flow-col-dense"
      }`}
    >
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <img
          src={phoneType}
          alt="iPhone 13 Pro"
          className="h-120 w-full object-contain"
        />
      </div>

      <div className="max-w-md">
        <h3 className="text-xl text-archivo font-medium leading-tight text-[#111827]">
          {title}
        </h3>

        <p className="mt-6 text-sm text-archivo text-normal leading-relaxed text-[#5B6576]">
          {description}
        </p>

        <BulletList items={bullets} />
      </div>
    </div>
  );
};

const FintechLandingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#E9F4F9]">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="w-full flex flex-row lg:flex-row items-start gap-20">
        <div>
          <h1 className="max-w-md text-5xl text-archivo font-normal leading-[0.95] tracking-tight text-[#111827]">
            Digital banking out-of-the-box
          </h1>

          <p className="mt-4 text-archivo max-w-sm text-sm leading-relaxed text-[#667085]">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures
          </p>

          <div className="mt-10 flex flex-col items-start gap-6">
            <Button
              name="Request Demo"
              bgColor={{ bg1: "#00B4FD", bg2: "#003ACE" }}
              textColor="#E9F4F9"
            />

            <LearnLink>LEARN MORE</LearnLink>
          </div>
        </div>
        <div>
          <div className="mt-30">
            <FeatureSection
              phoneType={iPhone13Pro}
              title="Fully compliant with regulatory requirement"
              description="The governance of risk management with regulations is achieved by
              our risk management framework that is fully integrated to work
              with digital bank's operational-risk protocols and
              procedures."
              bullets={featuresOne}
            />
          </div>
          <div className="mt-30">
            <FeatureSection
              reverse
              phoneType={iPhone13ProR}
              title="No legacy IT systems"
              description="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
              bullets={featuresTwo}
            />
          </div>

          <div className="mt-30">
            <FeatureSection
              phoneType={iPhone13ProB}
              title="No traditional branches"
              description="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
              bullets={featuresThree}
            />
          </div>
        </div>
        </div>
        <div className="relative mt-40 overflow-hidden rounded-3xl">
          <Core3 backGroundImage="true" paddingX="0" />
        </div>
      </div>
    </section>
  );
};

export default FintechLandingSection;
