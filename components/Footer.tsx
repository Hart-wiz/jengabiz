import React from "react";
import { Terminal, Github, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-slate-950 border-t border-white/10 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-4">
              <Terminal className="h-6 w-6 text-jenga-500 mr-2" />
              <span className="text-xl font-bold">
                JENGA<span className="text-jenga-500">TECH</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Software Development</li>
              <li>Cybersecurity</li>
              <li>Robotics</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-350 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-350 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-350 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Jenga Tech Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
