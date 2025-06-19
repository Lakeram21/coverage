import React from "react";
import Header from "../components/Header";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: "tc",
    title: "Technology Consulting",
    description:
      "We provide strategic technology consulting to help your business leverage the right tools and practices for growth, scalability, and innovation. Our expert guidance ensures your technology roadmap aligns perfectly with your business objectives.",
    points: [
      "IT strategy and technology audits",
      "Cloud readiness and migration planning",
      "Architecture design and system integration",
      "Security & compliance advisory",
    ],
    bgColor: "bg-amber-200",
  },
  {
    id: "dc",
    title: "DevOps & Cloud Engineering",
    description:
      "Our DevOps and cloud engineering services streamline your software delivery lifecycle. We implement CI/CD pipelines, automate infrastructure, and optimize cloud environments for performance, reliability, and cost-efficiency.",
    points: [
      "Cloud architecture and migration",
      "Infrastructure as Code (IaC)",
      "Continuous Integration & Deployment (CI/CD)",
      "Monitoring, alerting, and incident management",
    ],
    bgColor: "bg-amber-300",
  },
  {
    id: "se",
    title: "Software Engineering",
    description:
      "We build scalable and maintainable applications tailored to your needs. Our expertise spans backend, frontend, and full-stack development, ensuring your software is robust, performant, and user-friendly.",
    points: [
      "Custom web and mobile app development",
      "Backend APIs and microservices",
      "Frontend UI/UX design and implementation",
      "Automation and integration solutions",
    ],
    bgColor: "bg-amber-400",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-cyan-100 via-amber-200 to-indigo-300 text-gray-900 py-20 px-6 text-center rounded-b-3xl shadow-lg max-w-7xl mx-auto mt-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Designing & Building Innovative Technology Solutions
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Crafting tailored software and infrastructure that empower your
          business to grow, adapt, and succeed.
        </p>
        <Link
          to="/contact"
          className="bg-amber-50 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md transition"
        >
          Book a Free Consultation
        </Link>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-28">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.section
              key={service.id}
              className={`flex flex-col md:flex-row items-center md:space-x-12 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Text Content */}
              <div className="flex-1 bg-white rounded-lg shadow-md p-10 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 max-w-xl mb-6">{service.description}</p>
                <ul className="space-y-3 text-gray-700 max-w-md">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-3"
                    >
                      <CheckIcon className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image/Box */}
              <div className="flex-1 mt-10 md:mt-0">
                <div
                  className={`${service.bgColor} rounded-lg shadow-inner flex items-center justify-center text-7xl font-extrabold text-white select-none h-64`}
                >
                  {service.id.toUpperCase()}
                </div>
              </div>
            </motion.section>
          );
        })}
      </main>
    </div>
  );
}
