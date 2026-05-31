
import N7 from "../assets/N7.svg";
const ArrowRight = () => (
  <svg
    className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export default function N7Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#050B14] via-[#03070D] to-black text-white py-16 px-22">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-18">
        
        <div className="shrink-0 flex items-start">
          <img src={N7} className="leading-none font-extrabold tracking-tight bg-linear-to-b from-cyan-300 via-sky-500 to-blue-600 bg-clip-text text-transparent"/>
        </div>
        
        <div className="flex-1 flex flex-col gap-14 text-archivo">
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-[#E9F4F9] font-medium mb-2">London</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Linktia Infosystems Ltd – CB7,
                26 Main Road Sundridge, TN14 6EP,
                England, United Kingdom.
              </p>
            </div>

            <div>
              <h3 className="text-[#E9F4F9] font-medium mb-2">Dubai</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Linktia Infosystems Ltd – CB7,<br />
                Jumeirah Business Center 5,
                Cluster W, Jumeirah Lakes Towers,
                Dubai, United Arab Emirates
              </p>
            </div>

            <div>
              <h3 className="text-[#E9F4F9] font-medium mb-2">London</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Linktia Infosystems Ltd – CB7,<br />
                Nirmal, Anand Nagar,
                Suncity Road, Pune,
                Maharashtra, 411041, India
              </p>
            </div>
          </section>

          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10">

            
            <nav>
              <h4 className="text-[#E9F4F9] font-medium mb-4">Solutions</h4>
              <ul className="w-35 space-y-3 text-sm text-gray-400">
                {[
                  "Core Banking CB7",
                  "Digital Banking N7",
                  "Open Banking",
                  "Loan Origination System",
                  "Loan Management System",
                  "Digital Transformation",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center justify-between hover:text-white transition"
                    >
                      <span>{item}</span>
                      <ArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            
            <nav>
              <h4 className="text-[#E9F4F9] font-medium mb-4">N7 Banking</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "About Us",
                  "Solutions",
                  "Contact",
                  "Company",
                  "Careers",
                  "Insights",
                  "Core Team",
                  "Brand Center",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center justify-between hover:text-white transition"
                    >
                      <span>{item}</span>
                      <ArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            
            <div>
              <h4 className="text-[#E9F4F9] font-medium mb-4">Our Socials</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {["LinkedIn", "X"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center justify-between hover:text-white transition"
                    >
                      <span>{item}</span>
                      <ArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          
          <div className="pt-6 border-t border-white/5 text-start text-xs text-gray-500">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </div>
        </div>
      </div>
    </footer>
  );
}