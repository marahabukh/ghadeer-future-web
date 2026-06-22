"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-20"
    >
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-12 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-12 pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col gap-6">
            {/* Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 dark:text-indigo-300 dark:bg-indigo-950/50 dark:border-indigo-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" />
                Innovating Beyond Limits
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Architecting the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Digital Future
              </span>{" "}
              for Your Brand
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-zinc-650 dark:text-zinc-400 leading-relaxed font-normal">
              We design and engineer bespoke web platforms, custom digital tools, and stunning design systems that propel high-performance enterprises forward.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all hover:scale-105 active:scale-95"
              >
                Explore Projects
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 dark:text-zinc-300 dark:hover:text-white dark:bg-zinc-900/50 dark:hover:bg-zinc-900 dark:border-zinc-800/80 transition-all hover:scale-105 active:scale-95"
              >
                Learn More
              </a>
            </div>

            {/* Highlight Metric Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-6 border-t border-zinc-100 dark:border-zinc-900 pt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl font-bold text-zinc-900 dark:text-white">99%</span>
                <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Client Delight</span>
              </div>
              <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
              <div>
                <span className="block text-2xl font-bold text-zinc-900 dark:text-white">100+</span>
                <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Deploys Done</span>
              </div>
              <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
              <div>
                <span className="block text-2xl font-bold text-zinc-900 dark:text-white">50k+</span>
                <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Hours Coded</span>
              </div>
            </div>
          </div>

          {/* Right Mockup/Graphic Content */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Visual Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-80 h-80 rounded-full border border-indigo-200/30 dark:border-indigo-800/20 animate-spin [animation-duration:40s]" />
              <div className="w-[420px] h-[420px] rounded-full border border-purple-200/20 dark:border-purple-800/10 absolute animate-spin [animation-duration:60s] [animation-direction:reverse]" />
            </div>

            {/* Glowing Card Dashboard Mockup */}
            <div className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 shadow-2xl">
              
              {/* Fake Terminal header */}
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono text-zinc-400 select-none">ghadeer-dashboard.config</span>
              </div>

              {/* Graphic stats */}
              <div className="space-y-4 font-sans">
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/55 dark:border-indigo-900/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-350">Active Users Peak</span>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 flex items-center gap-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      18.4%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100/55 dark:border-purple-900/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-350">Conversion Optimize</span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      12.9%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: "62%" }} />
                  </div>
                </div>

                {/* Animated preview grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/80 text-center">
                    <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-450 uppercase">Success Runs</span>
                    <span className="text-xl font-bold text-zinc-900 dark:text-white">4,812</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/80 text-center">
                    <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-450 uppercase">Server Ping</span>
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">14ms</span>
                  </div>
                </div>

                {/* Micro chart display */}
                <div className="pt-2">
                  <div className="flex justify-between items-end h-16 gap-1 px-1">
                    {[35, 45, 30, 60, 45, 55, 70, 65, 80, 75, 95, 90].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-t-sm h-full flex items-end">
                        <div 
                          className="w-full bg-indigo-500/70 hover:bg-indigo-500 rounded-t-sm transition-all duration-300"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-450 mt-1 px-1">
                    <span>00:00</span>
                    <span>12:00</span>
                    <span>24:00</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
