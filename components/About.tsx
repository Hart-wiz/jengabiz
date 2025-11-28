import React from "react";
import { CheckCircle2 } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            {/* Decorative element resembling Jenga blocks */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/400/300?grayscale"
                alt="Team working"
                className="rounded-lg shadow-xl border border-white/10 opacity-80"
              />
              <img
                src="https://picsum.photos/400/300?random=10&grayscale"
                alt="Server room"
                className="rounded-lg shadow-xl border border-white/10 opacity-60 mt-8"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-jenga-600 rounded-full blur-[80px] opacity-20"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering Stability in a <br />
              <span className="text-jenga-400">Volatile Digital World</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Jenga Tech, we believe that great technology is like a
              perfectly balanced structure. It requires a strong foundation,
              precise execution, and the adaptability to withstand pressure.
            </p>
            <p className="text-gray-400 mb-8">
              Founded by a team of elite engineers and data scientists, we've
              helped over 500 businesses transition from legacy systems to
              future-proof digital ecosystems. Whether it's securing your data
              or automating your assembly line, we build it to last.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Certified Experts",
                "24/7 Support",
                "Global Network",
                "Agile Methodology",
              ].map((item) => (
                <div key={item} className="flex items-center text-white">
                  <CheckCircle2 className="w-5 h-5 text-jenga-500 mr-2" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
