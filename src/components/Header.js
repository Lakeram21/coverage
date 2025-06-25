import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white p-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
  className="w-16 h-16 text-cyan-300"
  animate={{ y: [0, 15, 0] }}  // wiggle right and back
  transition={{
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut",
    // repeatDelay: 2.4,
  }}
>
  {/* Your original shield shape */}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
  />
</motion.svg>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              COVERAGE
            </h1>
            <p className="text-sm font-light">Technology that covers what matters</p>
          </div>
        </div>

        <nav className="mt-6 md:mt-0 flex flex-wrap justify-center space-x-6 text-lg font-medium">
          {["Home", "Services", "Process", "Industries", "Case Studies", "Pricing", "Contact"].map((label) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative group hover:text-cyan-300 transition"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
