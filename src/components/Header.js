import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Services",
    "Process",
    "Industries",
    "Case Studies",
    "Pricing",
    "Contact",
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 text-cyan-300"
            animate={{ y: [0, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
            />
          </motion.svg>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">COVERAGE</h1>
            <p className="text-xs font-light">Technology that covers what matters</p>
          </div>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((label) => (
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-indigo-800 rounded-lg shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col space-y-2 p-4 text-lg">
              {navLinks.map((label) => (
                <li key={label}>
                  <Link
                    to={label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block w-full py-2 px-4 rounded hover:bg-indigo-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
