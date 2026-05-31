
import { Zap } from "lucide-react";
import Frame54 from "../assets/Frame54.svg";
const CaseStudiesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050B12] py-24 text-white text-archivo">
    
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
      
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-normal tracking-tight text-white md:text-6xl">
            Our Case Studies
          </h2>
        </div>

      
        <div className="relative flex items-center justify-center">
        
          <div className="absolute left-0 top-1/2 hidden h-97.5 w-190 -translate-y-1/2 rounded-[28px] bg-[#07131D]/60 opacity-30 blur-[1px] lg:block" />

        
          <div className="absolute right-0 top-1/2 hidden h-97.5 w-190 -translate-y-1/2 rounded-[28px] bg-[#07131D]/60 opacity-30 blur-[1px] lg:block" />

        
          <article className="relative z-10 flex w-full max-w-5xl items-center gap-10 rounded-xl border border-white/5 bg-[#01141B] p-4 shadow-[0_0_60px_rgba(0,180,253,0.08)] backdrop-blur-xl">
          
            <div className="relative flex h-90 w-105 shrink-0 items-center justify-center overflow-hidden rounded-[22px] bg-linear-to-br from-[#081B4A] to-[#061A38]">
              <img src={Frame54} className="h-full w-full object-cover" />
            </div>

          
            <div className="px-10 flex flex-1 flex-col justify-center">
              <span className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#2490BB]">
                Getting Started
              </span>

              <h3 className="max-w-xl text-5xl font-normal leading-[1.1] tracking-tight text-white">
                How we help brand reach out to more people
              </h3>

            
              <div className="mt-8 flex items-center gap-3 text-[#94A3B8]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#586E84]">
                  <Zap />
                </div>
    
                <span className="text-[22px] font-semibold text-[#586E84]">
                  Zoomerr
                </span>
              </div>

            
              <button className="group mt-10 flex h-14 w-full max-w-md items-center justify-center rounded-full border border-[#4B6178] bg-transparent text-sm font-medium tracking-[0.2em] text-[#94A3B8] transition-all duration-300 hover:border-[#00B4FD] hover:text-white hover:shadow-[0_0_30px_rgba(0,180,253,0.25)]">
                READ MORE
              </button>
            </div>
          </article>
        </div>

      
        <div className="mt-14 flex items-center justify-between">
          <div />

        
          <div className="flex items-center gap-8">
          
            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:bg-[#00B4FD]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

          
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full border border-[#00B4FD]/60" />
              <span className="h-3 w-10 rounded-full bg-[#00B4FD]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#00B4FD]/60" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#00B4FD]/60" />
            </div>

            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:bg-[#00B4FD]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

        
          <a
            href="/"
            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#00B4FD]"
          >
            <span className="border-b border-[#00B4FD] pb-1 transition-all duration-300 group-hover:border-white">
              View All
            </span>

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
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;