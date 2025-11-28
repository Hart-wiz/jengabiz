import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Together
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Ready to upgrade your infrastructure or start a new project? Reach
              out to our team of experts for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-jenga-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-jenga-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium text-lg">Email Us</h3>
                  <p className="text-gray-400">solutions@jengatech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-jenga-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-jenga-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium text-lg">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 012-3456</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-jenga-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-jenga-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium text-lg">Visit HQ</h3>
                  <p className="text-gray-400">
                    101 Tech Boulevard, Silicon Valley, CA 94000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tech-slate-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-tech-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jenga-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-tech-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jenga-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Interested Service
                </label>
                <select
                  id="service"
                  className="w-full bg-tech-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jenga-500 transition-colors"
                >
                  <option>Software Development</option>
                  <option>Robotics & Automation</option>
                  <option>Cybersecurity</option>
                  <option>Data Analysis</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-tech-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jenga-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-jenga-600 hover:bg-jenga-500 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
