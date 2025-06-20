import React from "react";
import Header from "../components/Header";

const pricingPlans = [
  {
    title: "Consulting",
    desc: "Strategic guidance on technology adoption, architecture, and planning.",
    price: "$40 / hour",
    features: ["1:1 sessions", "Roadmap creation", "Technology audit"],
    accent: "from-indigo-200 to-indigo-100",
  },
  {
    title: "Development",
    desc: "Custom software engineering for web, mobile, and backend systems.",
    price: "$45 / hour",
    features: ["Full-stack development", "Agile workflows", "Testing & QA"],
    accent: "from-amber-300 to-amber-200",
  },
  {
    title: "DevOps & Cloud",
    desc: "Infrastructure automation, CI/CD, and cloud management services.",
    price: "$40 / hour",
    features: ["Cloud migration", "Monitoring & alerting", "Security & compliance"],
    accent: "from-cyan-300 to-cyan-200",
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-12 py-16 text-indigo-900">
        <h2 className="text-5xl font-extrabold mb-14 text-center tracking-tight relative inline-block">
          Pricing
          <span className="block h-1 w-24 bg-indigo-400 rounded mt-2 mx-auto"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {pricingPlans.map(({ title, desc, price, features, accent }) => (
            <div
              key={title}
              className={`bg-white rounded-xl shadow-md p-2 text-center
                border-4 border-transparent hover:shadow-2xl hover:scale-[1.04] transition-transform duration-300 cursor-pointer
                bg-gradient-to-br ${accent} bg-clip-border`}
              style={{ backgroundOrigin: "border-box" }}
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-5 font-serif">{title}</h3>
                <p className="text-indigo-700 mb-8 leading-relaxed">{desc}</p>
                <div
                  className={`bg-gradient-to-r ${accent} text-4xl font-extrabold mb-8 px-6 py-4 rounded-lg inline-block text-white`}
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                  // className={``}
                >
                  {price}
                </div>
                <ul className="list-disc list-inside space-y-3 text-indigo-700 text-left max-w-xs mx-auto">
                  {features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Pricing;
