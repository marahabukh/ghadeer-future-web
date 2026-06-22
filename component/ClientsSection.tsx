"use client";

import { useState } from "react";

export default function ClientsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const clients = [
    {
      name: "Acme Corp",
      logo: (
        <svg className="h-8 w-auto text-zinc-400 dark:text-zinc-650 hover:text-indigo-505 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 120 30">
          <path d="M15 5 L25 25 L5 25 Z" />
          <text x="35" y="20" fontSize="16" fontWeight="bold" fontFamily="sans-serif">ACME</text>
        </svg>
      )
    },
    {
      name: "Globex",
      logo: (
        <svg className="h-8 w-auto text-zinc-400 dark:text-zinc-650 hover:text-indigo-505 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 120 30">
          <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
          <circle cx="15" cy="15" r="4" />
          <text x="35" y="20" fontSize="16" fontWeight="bold" fontFamily="sans-serif">GLOBEX</text>
        </svg>
      )
    },
    {
      name: "Initech",
      logo: (
        <svg className="h-8 w-auto text-zinc-400 dark:text-zinc-650 hover:text-indigo-505 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 120 30">
          <rect x="5" y="5" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
          <line x1="15" y1="5" x2="15" y2="25" stroke="currentColor" strokeWidth="2" />
          <text x="35" y="20" fontSize="16" fontWeight="bold" fontFamily="sans-serif">INITECH</text>
        </svg>
      )
    },
    {
      name: "Umbrella",
      logo: (
        <svg className="h-8 w-auto text-zinc-400 dark:text-zinc-650 hover:text-indigo-505 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 120 30">
          <path d="M15 5 C 10 5, 5 10, 5 15 L 25 15 C 25 10, 20 5, 15 5" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="15" y1="15" x2="15" y2="25" stroke="currentColor" strokeWidth="2" />
          <text x="35" y="20" fontSize="16" fontWeight="bold" fontFamily="sans-serif">UMBRELLA</text>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Ghadeer Future exceeded our expectations in every way. The website they developed for us is not only incredibly beautiful but also operates lightning fast. Our conversion rates went up by 35% in the first month.",
      author: "Sarah Jenkins",
      role: "VP of Product, Globex",
      initials: "SJ"
    },
    {
      quote: "The team at Ghadeer Future are exceptional software architects. They took our legacy codebase and rewrote it into a modern React 19 app that has been a breeze to manage and scale.",
      author: "David Chen",
      role: "CTO, Initech",
      initials: "DC"
    },
    {
      quote: "A design and engineering standard that is rarely found. Ghadeer Future delivered our project ahead of schedule, with immaculate code and top-tier responsiveness across devices.",
      author: "Elena Rostova",
      role: "Founder, Acme Premium",
      initials: "ER"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Logo Banner */}
        <div className="border-b border-zinc-200/50 dark:border-zinc-800/60 pb-16">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-10">
            Trusted by Forward-Thinking Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex justify-center items-center">
                {client.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Showcase */}
        <div className="pt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-650 dark:text-indigo-400">
              Testimonials
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-2">
              What our clients say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white dark:bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/80 shadow-md">
            
            {/* Quote decoration */}
            <span className="absolute top-4 left-6 text-7xl font-serif text-indigo-100 dark:text-indigo-950/40 select-none">
              “
            </span>

            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal italic">
                {testimonials[activeTestimonial].quote}
              </p>

              {/* Author Details */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-550 to-purple-600 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="absolute right-8 bottom-8 flex gap-2">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-50/10 transition-all active:scale-90"
                aria-label="Previous Testimonial"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-50/10 transition-all active:scale-90"
                aria-label="Next Testimonial"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
