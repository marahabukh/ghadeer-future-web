"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <svg
                  className="w-4.5 h-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-white">
                Ghadeer <span className="text-indigo-400">Future</span>
              </span>
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal max-w-sm">
              Architecting state-of-the-art web products and intelligent design systems that elevate business and developer performance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-indigo-650 hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-indigo-650 hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-indigo-650 hover:text-white flex items-center justify-center transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-indigo-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h.01m-6.91-4.91A12.042 12.042 0 0019 19.4" />
                </svg>
                <span>hello@ghadeerfuture.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-indigo-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 019-2834</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-indigo-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Francisco, CA, USA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h4>
            <p className="text-xs leading-relaxed text-zinc-400 font-normal">
              Subscribe to our monthly newsletter for insight into new design methodologies and tech stacks.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Ghadeer Future Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
