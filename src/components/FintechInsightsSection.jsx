
const fintechIcons = [1, 2, 3, 4];

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {fintechIcons.map((item) => (
        <div
          key={item}
          className="relative h-24 w-24 rotate-45 rounded-[26px] border-[13px] border-[#00B8FF]"
        >
          <div className="absolute inset-0 rounded-[18px] border-[10px] border-transparent border-t-[#00B8FF] border-b-[#00B8FF]" />
        </div>
      ))}
    </div>
  );
};

const OutlineButton = ({ children, fullWidth = false }) => {
  return (
    <button
      className={`group relative overflow-hidden rounded-[14px] border border-white/40 bg-transparent px-10 py-4 text-sm tracking-[0.18em] text-white transition-all duration-300 hover:border-[#00B8FF] hover:text-[#00B8FF] hover:shadow-[0_0_30px_rgba(0,184,255,0.18)] ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <span className="relative z-10">{children}</span>

      <div className="absolute inset-0 bg-[#00B8FF]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
};

const InsightCard = ({
  featured = false,
  title,
  author,
  date,
}) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-[22px] border border-white/[0.03] bg-[#07141D]/95 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(0,184,255,0.08)] ${
        featured
          ? "flex flex-col gap-8 p-6 md:flex-row md:items-center"
          : "flex min-h-[320px] flex-col justify-between p-8"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,184,255,0.06),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {featured && (
        <div className="relative flex h-[270px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-[#081B55] to-[#071734] md:w-[320px]">
          <LogoGrid />

          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,184,255,0.08),transparent_70%)]" />
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        <span className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#00B8FF]">
          Getting Started
        </span>

        <h3
          className={`max-w-[420px] font-light leading-[1.08] tracking-tight text-white ${
            featured ? "text-4xl" : "text-[2rem]"
          }`}
        >
          {title}
        </h3>

        <div className="mt-6 flex items-center gap-5 text-[15px] text-[#5FA4C8]">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        <div className={`${featured ? "mt-12" : "mt-auto pt-10"}`}>
          <OutlineButton fullWidth>
            READ MORE
          </OutlineButton>
        </div>
      </div>
    </article>
  );
};

const FintechInsightsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020B12] py-20 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,184,255,0.06),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,184,255,0.04),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        {/* LEFT */}
        <div className="flex flex-col pt-6 lg:pt-2">
          <h2 className="max-w-[520px] text-5xl font-light leading-[1.12] tracking-tight text-white md:text-6xl">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>

          <div className="mt-16">
            <OutlineButton>INSIGHTS</OutlineButton>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          {/* Featured */}
          <InsightCard
            featured
            title="How to transition from a traditional to a digital bank"
            author="David Grohl"
            date="17/08/24"
          />

          {/* Bottom Cards */}
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

          {/* Bottom Link */}
          <div className="mt-10 flex justify-end">
            <a
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-[#00B8FF]"
            >
              <span className="border-b border-[#00B8FF] pb-1 transition-all duration-300 group-hover:border-white">
                Read All Insights
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