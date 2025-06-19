import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/solid";
import { BoltIcon, CubeIcon, ArrowsRightLeftIcon, ShieldCheckIcon, UsersIcon, WrenchScrewdriverIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 via-amber-300 to-cyan-100 text-gray-900 py-24 px-8 text-center rounded-b-3xl shadow-lg max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Empowering Your Vision<br />Through Technology
            </h1>
            <p className="text-2xl mb-12 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
              We design and build software, infrastructure, and systems that move your business forward.
            </p>
            <Link
              to="/contact"
              className="bg-amber-50 hover:bg-amber-700 text-gray-900 font-semibold py-4 px-12 rounded-full shadow-lg transition"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* Our Core Expertise - Centered */}
        <motion.section
          className="bg-gray-100 rounded-xl shadow-lg p-16 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif font-semibold text-gray-900 mb-12 tracking-wide">
            Our Core Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-12 text-gray-700 font-light text-lg">
            {[
              {
                title: "Technology Consulting",
                desc: "Strategic guidance aligning tech decisions with your long-term business goals."
              },
              {
                title: "DevOps & Cloud Engineering",
                desc: "Cloud-native solutions, automation, and optimized infrastructure for performance and scale."
              },
              {
                title: "Software Engineering",
                desc: "Scalable full-stack applications tailored to your users and your mission."
              }
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                className="bg-white rounded-lg p-8 shadow hover:shadow-xl transition cursor-default"
                whileHover={{ scale: 1.07 }}
              >
                <h4 className="text-2xl font-semibold mb-3 text-indigo-800">{title}</h4>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services" className="text-indigo-700 font-semibold text-lg hover:underline">
              Explore Our Services →
            </Link>
          </div>
        </motion.section>

        {/* Why Coverage - Right aligned with icon */}
        <motion.section
          className="bg-white rounded-xl shadow-lg p-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-10 md:space-y-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-8 text-gray-900 text-lg max-w-xl font-light md:text-right">
            {[
              {
                title: "Proven Expertise",
                desc: "Deep experience across diverse industries and systems."
              },
              {
                title: "Tailored Solutions",
                desc: "Built specifically for your organization’s needs and goals."
              },
              {
                title: "Open Communication",
                desc: "You’re in the loop at every step of the process."
              },
              {
                title: "Full Lifecycle Support",
                desc: "From idea to launch — and beyond."
              }
            ].map(({ title, desc }, idx) => (
              <li key={idx} className="flex items-start space-x-4 justify-end">
                <CheckIcon className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-indigo-700">{title}:</span> {desc}
                </div>
              </li>
            ))}
          </ul>
          <div className="hidden md:block w-48 h-48 bg-amber-200 rounded-full shadow-md"></div>
        </motion.section>

        {/* Why Build, Not Buy - Left aligned with icons */}
        <motion.section
          className="bg-amber-50 rounded-xl shadow-lg p-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 text-gray-900 font-light text-lg">
            <div className="flex space-x-4 items-start">
              <BoltIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Built for You</h4>
                <p>Custom software aligns perfectly with your business logic, unlike off-the-shelf solutions that force you to adapt to them.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <CubeIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">No Licensing Headaches</h4>
                <p>Skip vendor lock-in and ongoing license fees—custom means you own everything, including your data.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <ArrowsRightLeftIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Scalable By Design</h4>
                <p>Your product can grow with you—modular development allows easy feature additions down the road.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <ShieldCheckIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Smarter Investment</h4>
                <p>Long-term ROI on custom software often outpaces boxed software due to tailored fit and efficiency gains.</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-48 h-48 bg-indigo-200 rounded-full shadow-lg"></div>
        </motion.section>

        {/* Cross-Functional Team Advantage - Centered cards */}
        <motion.section
          className="bg-white rounded-xl shadow-lg p-16 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif font-semibold text-indigo-900 mb-12 tracking-wide">Our Cross‑Functional Team</h3>
          <div className="grid md:grid-cols-3 gap-14 text-gray-700 font-light text-lg">
            <div className="flex flex-col items-center space-y-4 px-6">
              <UsersIcon className="w-16 h-16 text-indigo-700" />
              <h4 className="text-2xl font-semibold text-indigo-700 font-serif">Engineers</h4>
              <p>Front-end, back-end, and full-stack experts working together to deliver smart, scalable solutions.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 px-6">
              <Cog6ToothIcon className="w-16 h-16 text-indigo-700" />
              <h4 className="text-2xl font-semibold text-indigo-700 font-serif">DevOps & Cloud</h4>
              <p>Specialists in infrastructure, CI/CD pipelines, automation, and cloud-native operations.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 px-6">
              <WrenchScrewdriverIcon className="w-16 h-16 text-indigo-700" />
              <h4 className="text-2xl font-semibold text-indigo-700 font-serif">Project Managers</h4>
              <p>Keeping things on track, aligned with your business goals, and delivered on time and budget.</p>
            </div>
          </div>
        </motion.section>

        {/* Project Rescue - Right aligned text with colored bg */}
        <motion.section
          className="bg-indigo-50 rounded-xl shadow-lg p-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-10 md:space-y-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl text-gray-900 font-light text-lg md:text-right space-y-6">
            <h3 className="text-4xl font-serif font-semibold text-indigo-900 mb-6 tracking-wide">Project Rescue & Recovery</h3>
            <p>Is your project falling behind, over budget, or stuck in development hell? We specialize in taking over underperforming or stalled projects.</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Codebase audits and actionable reviews</li>
              <li>Restructuring teams and sprints for agility</li>
              <li>Replacing or rewriting unreliable modules</li>
              <li>Reestablishing trust and forward momentum</li>
            </ul>
          </div>
          <div className="hidden md:block w-48 h-48 bg-indigo-300 rounded-full shadow-md"></div>
        </motion.section>

        {/* Scalable Architecture - Left aligned with icons and color */}
        <motion.section
          className="bg-white rounded-xl shadow-lg p-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 text-gray-900 font-light text-lg">
            <div className="flex space-x-5 items-start">
              <CubeIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Modular Design</h4>
                <p>We structure systems so new features integrate without disruption.</p>
              </div>
            </div>
            <div className="flex space-x-5 items-start">
              <BoltIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Cloud-Ready</h4>
                <p>Our architectures support elastic scaling and microservice deployment when you need it most.</p>
              </div>
            </div>
            <div className="flex space-x-5 items-start">
              <ShieldCheckIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Performance Optimized</h4>
                <p>We fine-tune for responsiveness and throughput from day one.</p>
              </div>
            </div>
            <div className="flex space-x-5 items-start">
              <ArrowsRightLeftIcon className="w-10 h-10 text-indigo-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-semibold mb-2 font-serif">Secure Foundations</h4>
                <p>Security best practices are baked into our architecture, not patched in later.</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-48 h-48 bg-amber-200 rounded-full shadow-lg"></div>
        </motion.section>

        {/* Meet The Team - Centered but bigger images */}
        <motion.section
          className="bg-gradient-to-r from-indigo-600 via-blue-400 to-cyan-300 rounded-xl shadow-lg p-20 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif font-semibold text-white mb-16 text-center tracking-wider">Meet The Team</h3>
          <div className="flex flex-col md:flex-row justify-around space-y-16 md:space-y-0 md:space-x-12">
            {[
              {
                name: "Issac",
                role: "Software Developer & Project Manager",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                desc: "15+ years delivering high-impact software and leading projects across industries."
              },
              {
                name: "Enrique",
                role: "DevOps & Cloud Engineer",
                image: "https://randomuser.me/api/portraits/men/45.jpg",
                desc: "Expert in infrastructure automation, CI/CD, and scalable deployments."
              },
              {
                name: "Lakeram",
                role: "Full Stack Developer & Automation Specialist",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
                desc: "Focused on scalable apps and automation-driven productivity."
              }
            ].map(({ name, role, image, desc }) => (
              <div key={name} className="text-center max-w-xs">
                <img src={image} alt={name} className="mx-auto rounded-full w-32 h-32 mb-6 shadow-lg border-4 border-white" />
                <h4 className="text-2xl font-semibold text-white">{name}</h4>
                <p className="text-white text-sm font-light">{role}</p>
                <p className="text-white text-xs mt-3 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
