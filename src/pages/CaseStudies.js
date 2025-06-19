import React from "react";
import Header from "../components/Header";

const caseStudies = [
  {
    title: "SaaS Startup Platform Launch",
    desc: "Helped a SaaS startup build a scalable cloud-based platform from scratch, reducing time to market by 40% and increasing user retention.",
    quote: "“COVERAGE’s team was a critical partner in our success, delivering quality and speed.” – Client CEO",
    accent: "bg-grey-100",
  },
  {
    title: "Enterprise Legacy Modernization",
    desc: "Modernized a legacy financial system with a microservices architecture and cloud migration, improving reliability and reducing maintenance costs by 30%.",
    quote: "“Their professionalism and expertise were top-notch.” – IT Director",
    accent: "bg-cyan-50",
  },
  {
    title: "DevOps Pipeline Automation",
    desc: "Implemented end-to-end CI/CD pipelines for a healthcare client, accelerating deployment cycles and ensuring HIPAA compliance.",
    quote: "“The DevOps improvements transformed our workflow.” – CTO",
    accent: "bg-grey-100",
  },
  {
    title: "Custom E-commerce Application",
    desc: "Built a custom e-commerce platform tailored to a retail brand’s specific needs, increasing sales by 25% in the first quarter.",
    quote: "“The new platform exceeded all expectations.” – Marketing Lead",
    accent: "bg-cyan-50",
  },
];

function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-12 py-16">
        <h2 className="text-5xl font-extrabold text-indigo-900 mb-14 text-center tracking-tight">
          Case Studies
        </h2>

        <div className="space-y-14">
          {caseStudies.map(({ title, desc, quote, accent }, idx) => (
            <article
              key={title}
              className={`flex border-l-8 ${accent} bg-white rounded-xl shadow-md p-10
                transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02]`}
              style={{ cursor: "default" }}
            >
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-900 mb-5 font-serif">{title}</h3>
                <p className="text-indigo-800 text-lg leading-relaxed mb-6 max-w-3xl">{desc}</p>
                <p className="italic text-indigo-600 max-w-3xl">{quote}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CaseStudies;
