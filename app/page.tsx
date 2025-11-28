"use client";
import React from "react";
import Link from "next/link";

import {
  Link as IconLink,
  ArrowRight,
  Code,
  Shield,
  BarChart,
  CheckCircle,
} from "lucide-react";

import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-slate-900 h-screen items-center flex">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Build Your Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              JengaTech
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
            Your partner in digital transformation. From mastering the latest
            tech skills to optimizing your business operations with drone tech
            and AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* 3. Use Link with 'href' attribute */}
            <Link
              href="/lms"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-teal-400 hover:bg-teal-500 transition-colors"
            >
              Start Learning
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Business Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-teal-400 tracking-wide uppercase">
              What We Offer
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Comprehensive Tech Ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Expert-Led LMS
              </h3>
              <p className="text-slate-400">
                Master Software Engineering, Data Analytics, and more with our
                curated curriculum designed by industry veterans.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-900 p-8 rounded-2xl border border-blue-800 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Business Scaling
              </h3>
              <p className="text-slate-400">
                Automate your inventory, manage operations, and scale your
                business with our custom software solutions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-purple-900 p-8 rounded-2xl border border-purple-800 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Secure & Innovative
              </h3>
              <p className="text-slate-400">
                From drone technology to cybersecurity audits, we bring the
                latest innovations securely to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Courses", value: "50+" },
              { label: "Students", value: "1,200+" },
              { label: "Enterprise Clients", value: "30+" },
              { label: "Solutions Deployed", value: "100+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-teal-400 font-medium uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      {/* <Testimonials /> */}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to elevate your tech journey?
          </h2>
          <p className="text-teal-100 mb-8">
            Join thousands of students and businesses leveraging JengaTech
            today.
          </p>
          {/* 4. Use Link with 'href' attribute */}
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
          >
            Join our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      {/* contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
