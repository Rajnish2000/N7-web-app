import "@fontsource/archivo/400.css";
import Frame54 from "../assets/Frame54.svg";


const OutlineButton = ({ children, fullWidth = false }) => {
  return (
    <button
      className={`group relative overflow-hidden rounded-[10px] border border-white/40 bg-transparent px-10 py-3 text-sm tracking-[0.18em] text-white transition-all duration-300 hover:border-[#00B8FF] hover:text-[#00B8FF] hover:shadow-[0_0_30px_rgba(0,184,255,0.18)] ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const InsightCard = ({ featured = false, title, author, date }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-[22px] border border-white/3 bg-[#07141D]/95 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(0,184,255,0.08)] ${
        featured
          ? "flex flex-col gap-8 p-6 md:flex-row md:items-center"
          : "flex min-h-80 flex-col justify-between p-8"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,184,255,0.06),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {featured && (
        <div className="relative flex h-67.5 w-full items-center justify-center overflow-hidden rounded-[18px] bg-linear-to-br from-[#081B55] to-[#071734] md:w-[320px]">
          <img src={Frame54} className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,184,255,0.08),transparent_70%)]" />
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col text-archivo">
        <span className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#00B8FF]">
          Getting Started
        </span>

        <h3
          className={`max-w-105 font-light leading-[1.08] tracking-tight text-white ${
            featured ? "text-3xl" : "text-[1.65rem]"
          }`}
        >
          {title}
        </h3>

        <div className="mt-6 flex items-center gap-5 text-[15px] text-[#5FA4C8] text-archivo">
          <span>{author}</span>
          <span>{date}</span>
        </div>

          <button className="group mt-10 flex h-10 w-full max-w-md items-center justify-center rounded-xl border border-[#4B6178] bg-transparent text-sm font-medium tracking-[0.2em] text-[#94A3B8] transition-all duration-300 hover:border-[#00B4FD] hover:text-white hover:shadow-[0_0_30px_rgba(0,180,253,0.25)]">
            READ MORE
          </button>
      </div>
    </article>
  );
};

const FintechInsightsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020B12] py-20 text-white text-archivo">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="flex flex-col pt-6 lg:pt-2">
          <h3 className="max-w-110 text-4xl font-normal leading-[120%] tracking-tight text-white md:text-4xl text-archivo">
            Get yourself up-to-speed on all the things happening in fintech
          </h3>

          <div className="mt-12">
            <OutlineButton>INSIGHTS</OutlineButton>
          </div>
          <div className="w-130 h-130 rounded-full bg-[linear-gradient(to_right,#00B4FD,#003ACE)] opacity-10 blur-3xl relative -top-30"></div>
        </div>

        <div className="flex flex-col">
          <InsightCard
            featured
            title="How to transition from a traditional to a digital bank"
            author="David Grohl"
            date="17/08/24"
          />

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <InsightCard
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />

            <InsightCard
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />
          </div>

          <div className="mt-10 flex justify-end">
            <a
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-[#00B8FF]"
            >
              <span>
              <span className="border-b border-[#00B4FD] pb-1 transition-all duration-300 group-hover:border-white">
                Read
              </span>{" "}
              All Insights
            </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
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
      </div>
    </section>
  );
};

export default FintechInsightsSection;
