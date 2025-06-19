import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "SaaS Startups",
    desc: "We help SaaS startups build scalable platforms, accelerate time to market, and create seamless user experiences that drive growth.",
    icon: "🚀",
    bg: "bg-grey-250",
    iconPos: "left",
  },
  {
    title: "Enterprise Solutions",
    desc: "Our team modernizes legacy systems, integrates complex software stacks, and supports digital transformation initiatives in large organizations.",
    icon: "🏢",
    bg: "bg-grey-200",
    iconPos: "right",
  },
  {
    title: "Government & Public Sector",
    desc: "We deliver secure, compliant, and accessible software solutions tailored for government agencies and public institutions.",
    icon: "🏛️",
    bg: "bg-grey-150",
    iconPos: "left",
  },
  {
    title: "Healthcare",
    desc: "From patient management systems to telemedicine platforms, we build HIPAA-compliant software solutions that improve healthcare delivery.",
    icon: "❤️‍🩹",
    bg: "bg-grey-50",
    iconPos: "right",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-indigo-100 via-amber-300 to-cyan-500 py-28 px-12 text-center rounded-b-3xl shadow-lg max-w-7xl mx-auto mt-8">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight max-w-4xl mx-auto">
          Industries We Serve
        </h1>
        <p className="text-2xl max-w-4xl mx-auto mb-10 text-indigo-900">
          Delivering innovative technology solutions tailored to your industry’s unique challenges and goals.
        </p>
        <Link
          to="/contact"
          className="bg-amber-50 hover:bg-amber-400 text-gray-900 font-semibold py-4 px-12 rounded-full shadow-md transition text-lg"
        >
          Book a Free Consultation
        </Link>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 py-20 space-y-20">

        {industries.map(({ title, desc, icon, bg, iconPos }, idx) => (
          <section
            key={title}
            className={`${bg} rounded-xl shadow-xl p-14 flex flex-col md:flex-row items-center
              ${iconPos === "right" ? "md:flex-row-reverse" : ""}
              transition-transform duration-300 hover:scale-[1.03]`}
          >
            <div
              className="flex items-center justify-center rounded-full text-6xl w-28 h-28 shadow-inner select-none
                text-indigo-900 bg-white"
            >
              {icon}
            </div>
            <div className="md:max-w-xl mt-8 md:mt-0 md:px-12">
              <h3 className="text-4xl font-extrabold mb-4 text-indigo-900 font-serif">{title}</h3>
              <p className="text-indigo-900 text-lg leading-relaxed">{desc}</p>
            </div>
          </section>
        ))}

      </main>
    </div>
  );
}
