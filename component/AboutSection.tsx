"use client";

export default function AboutSection() {
  const values = [
    {
      title: "Future-Proof Solutions",
      description:
        "We build with React 19, Next.js, and cutting-edge tech. Our codebases are designed to scale and evolve as your business expands.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Design Excellence",
      description:
        "Every pixel matters. We construct modern, high-fidelity interfaces that captivate users and provide intuitive interactions.",
      icon: (
        <svg
          className="w-6 h-6 text-purple-600 dark:text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with databases, analytics, APIs, and microservices flawlessly. We construct unified software ecosystems.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-650 dark:text-indigo-400">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Empowering innovators with premium engineering
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              At <strong className="text-zinc-900 dark:text-white font-semibold">Ghadeer Future</strong>, we bridge the gap between creative vision and technical excellence. We build digital products that run fast, look beautiful, and deliver business results.
            </p>
            <p className="text-base text-zinc-550 dark:text-zinc-450 leading-relaxed">
              Whether you need to build a brand new web application or overhaul an existing platform, our team of dedicated software architects and designers are here to make your vision a success.
            </p>
            <div className="mt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-605 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors group"
              >
                See our case studies
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-6">
                  {values[0].icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                  {values[0].title}
                </h3>
                <p className="text-sm text-zinc-550 dark:text-zinc-455 leading-relaxed">
                  {values[0].description}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-6">
                  {values[2].icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                  {values[2].title}
                </h3>
                <p className="text-sm text-zinc-550 dark:text-zinc-455 leading-relaxed">
                  {values[2].description}
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:mt-10">
              {/* Card 3 */}
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center mb-6">
                  {values[1].icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                  {values[1].title}
                </h3>
                <p className="text-sm text-zinc-550 dark:text-zinc-455 leading-relaxed">
                  {values[1].description}
                </p>
              </div>

              {/* Dynamic visual badge */}
              <div className="p-8 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-650 text-white flex flex-col justify-between min-h-[220px] shadow-lg shadow-indigo-500/10">
                <div>
                  <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight mb-1">
                    Quality Guaranteed
                  </h4>
                  <p className="text-xs text-white/80 leading-normal">
                    We deliver zero-compromise production code, rigorous testing, and beautiful, responsive rendering on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
