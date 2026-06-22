"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Nova Analytics",
      category: "SaaS Platform",
      description: "Real-time streaming dashboard detailing user acquisition, conversion funnels, and performance diagnostics.",
      color: "from-blue-600 to-cyan-500",
      tag: "SaaS",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Aether Luxury Retail",
      category: "E-Commerce",
      description: "Headless storefront utilizing advanced caching strategies, instant checkout flows, and crisp modern typography.",
      color: "from-purple-600 to-pink-500",
      tag: "Headless E-Com",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Vortex AI Studio",
      category: "Artificial Intelligence",
      description: "Custom user interface integrating multi-model LLM chat systems with high-throughput vector database embeddings.",
      color: "from-indigo-600 to-purple-500",
      tag: "AI Integrations",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Transformative digital products
          </h2>
          <p className="text-base text-zinc-550 dark:text-zinc-400 leading-relaxed font-normal">
            Take a look at a few premium solutions we've designed, engineered, and successfully delivered to clients worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 min-h-[460px]"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
              {/* Card visual top */}
              <div className={`relative h-56 w-full bg-gradient-to-br ${project.color} flex items-center justify-center p-8 transition-transform duration-500 overflow-hidden`}>
                {/* Visual grid inside graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1.5px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                
                {/* SVG Icon centered */}
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {project.icon}
                </div>

                {/* Tag floating */}
                <span className="absolute top-4 right-4 text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full">
                  {project.tag}
                </span>

                {/* Hover overlay glow */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content bottom */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-semibold text-zinc-800 hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-indigo-400 transition-colors group/btn"
                  >
                    View Project Case Study
                    <svg
                      className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
