import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white p-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          COVERAGE
          <span className="block text-sm font-light mt-1">Technology that covers what matters</span>
        </h1>
        <nav className="mt-4 md:mt-0 flex space-x-6 text-lg font-medium">
          {["Home", "Services", "Process", "Industries", "Case Studies", "Pricing", "Contact"].map((label) => (
            <Link
              key={label}
              to={label === "Home" ? "/" :`/${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative group text-white hover:text-cyan-300 transition"
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
