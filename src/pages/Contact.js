import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-extrabold text-indigo-900 mb-14 text-center tracking-tight relative inline-block">
          Contact Us
          <span className="block h-1 w-24 bg-indigo-400 rounded mt-3 mx-auto"></span>
        </h2>

        {submitted ? (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-lg shadow-md max-w-xl mx-auto text-center
              animate-fadeIn"
          >
            <strong className="font-bold text-lg block mb-2">Thank you!</strong>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-12">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 bg-white rounded-xl shadow-lg p-12 space-y-8"
              noValidate
            >
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
              ].map(({ label, name, type }) => (
                <label key={name} className="block relative">
                  <input
                    type={type}
                    name={name}
                    required
                    value={formData[name]}
                    onChange={handleChange}
                    className="peer w-full rounded-md border border-gray-300 px-4 pt-6 pb-2 text-lg
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder=" "
                  />
                  <span
                    className="absolute left-4 top-2 text-indigo-600 text-sm font-semibold
                      transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                      peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm pointer-events-none"
                  >
                    {label}
                  </span>
                </label>
              ))}

              <label className="block relative">
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full rounded-md border border-gray-300 px-4 pt-6 pb-2 text-lg resize-y
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder=" "
                ></textarea>
                <span
                  className="absolute left-4 top-2 text-indigo-600 text-sm font-semibold
                    transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                    peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm pointer-events-none"
                >
                  Message
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-4 rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <aside className="flex-1 bg-indigo-100 rounded-xl p-10 text-indigo-900 shadow-inner">
              <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
              <p className="mb-6 text-lg leading-relaxed">
                Have questions or want to discuss your project? Reach out and we'll respond promptly.
              </p>
              <ul className="space-y-4 text-indigo-800 font-medium text-lg">
                <li>
                  📞 <a href="tel:+1234567890" className="underline hover:text-indigo-600">+1 (234) 567-890</a>
                </li>
                <li>
                  📧 <a href="mailto:contact@coverage.com" className="underline hover:text-indigo-600">contact@coverage.com</a>
                </li>
                <li>
                  📍 1234 Innovation Drive, Tech City, TX 75001
                </li>
              </ul>
              <div className="mt-10">
                <iframe
                  title="Office Location"
                  src="https://maps.google.com/maps?q=1234%20Innovation%20Drive%2C%20Tech%20City%2C%20TX%2075001&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ borderRadius: "12px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </aside>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Contact;
