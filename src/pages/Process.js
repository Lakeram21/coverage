import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const steps = [
  { title: "Discover", description: "We understand your needs and challenges through in-depth consultation.", icon: "🔍" },
  { title: "Design", description: "Crafting tailored software solutions with user-friendly design.", icon: "🎨" },
  { title: "Develop", description: "Building robust, scalable, and efficient applications.", icon: "💻" },
  { title: "Deploy & Support", description: "Launching your product with ongoing support and improvements.", icon: "🚀" },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-cyan-100 via-amber-200 to-indigo-300 text-gray-900 py-20 px-6 text-center rounded-b-3xl shadow-lg max-w-7xl mx-auto mt-6">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight max-w-4xl mx-auto">
          From Vision to Deployment — Our Trusted Process
        </h1>
        <p className="text-2xl max-w-4xl mx-auto mb-10">
          We guide you through every stage with clarity and collaboration, ensuring a seamless journey from idea to impact.
        </p>
        <Link
          to="/contact"
          className="bg-amber-50 hover:bg-amber-400 text-gray-900 font-semibold py-4 px-12 rounded-full shadow-md transition text-lg"
        >
          Book a Free Consultation
        </Link>
      </section>

      {/* Steps Section */}
      <main className="max-w-8xl mx-auto px-12 py-20 space-y-28">
        <div className="flex flex-col md:flex-row items-center space-y-16 md:space-y-0 md:space-x-32">
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_jtbfg2nb.json"
            style={{ height: "450px", width: "450px" }}
          />
          <div className="space-y-12 max-w-2xl">
            {steps.map(({ title, description, icon }, idx) => (
              <div
                key={title}
                className="flex space-x-6 items-center bg-white rounded-xl p-8 shadow-xl transform transition duration-500 hover:shadow-2xl hover:scale-105"
                style={{
                  animationDelay: `${idx * 0.3}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                  animationName: "fadeInUp"
                }}
              >
                <div className="text-5xl">{icon}</div>
                <div>
                  <h3 className="text-3xl font-semibold text-indigo-800">{title}</h3>
                  <p className="text-indigo-700 mt-2 text-lg">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-48 h-1 bg-indigo-300 rounded-full animate-pulse"></div>
        </div>
      </main>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
