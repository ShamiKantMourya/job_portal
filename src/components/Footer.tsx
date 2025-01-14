import React from "react";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

import { Button } from "./UI/Button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-white border-t relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg transform rotate-12 transition-transform duration-300 hover:rotate-45" />
              <h3 className="font-bold text-xl">Apex Talent</h3>
            </div>
            <p className="text-gray-600">
              Connecting talented individuals with their dream careers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <ul className="space-y-2">
              {["How it works", "Features", "Pricing", "FAQ", "Download"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 block transform hover:translate-x-2"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Blog",
                "Partnership",
                "Terms of use",
                "Privacy policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 block transform hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Follow us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-indigo-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © Apex Talent 2024. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
