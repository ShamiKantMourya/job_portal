"use client";

import React, { useState } from "react";
import { Search, MapPin, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuTransform = isMenuOpen ? "translateX(0)" : "translateX(100%)";

  const isAuthenticated: boolean = false;
  const userType: string = "";

  return (
    <header
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://us.123rf.com/450wm/melpomen/melpomen1610/melpomen161000074/63871217-new-job-concept-with-hand-on-blue-background.jpg?ver=6')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-white">
            DreamDesk
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          {userType ? (
            <Link to="/jobs" className="text-white hover:text-gray-300">
              Find Candidates
            </Link>
          ) : (
            <Link to="/candidates" className="text-white hover:text-gray-300">
              Find Jobs
            </Link>
          )}
          <Link to="/blogs" className="text-white hover:text-gray-300">
            Blogs
          </Link>
          {isAuthenticated ? (
            <Link to="/testimonials" className="text-white hover:text-gray-300">
              Application Status
            </Link>
          ) : null}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/login">Log In</Link>
          </Button>
          <Button>
            <User />
          </Button>
          {
            userType ? <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/post-job">Post Job</Link>
          </Button> : null
          }
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <div
        className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        style={{ transform: menuTransform }}
      >
        <div className="flex flex-col p-4">
          <Button
            variant="ghost"
            className="self-end mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </Button>
          <Link to="/" className="py-2 text-gray-800">
            Home
          </Link>
          {userType ? (
            <Link to="/jobs" className="text-white hover:text-gray-300">
              Find Candidates
            </Link>
          ) : (
            <Link to="/candidates" className="text-white hover:text-gray-300">
              Find Jobs
            </Link>
          )}
          <Link
            to="/blogs"
            className="py-2 text-gray-800 hover:text-indigo-600"
          >
            Blogs
          </Link>
          <Link
            to="/login"
            className="py-2 text-gray-800 hover:text-indigo-600"
          >
            Log In
          </Link>
          {
            userType ? <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/post-job">Post Job</Link>
          </Button> : null
          }
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Get The Right Job You Deserve
        </h2>
        <p className="text-gray-200 mb-8">
          980 jobs & 148 candidates are registered
        </p>

        <div className="w-full max-w-4xl bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-3 border rounded-md">
            <Search className="w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search Job"
              className="border-0 focus-visible:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 flex items-center px-3 border rounded-md">
            <MapPin className="w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search Location"
              className="border-0 focus-visible:ring-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">
            Find Job
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {["Designer", "Developer", "Engineer", "iOS", "PHP"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white/20 rounded-full text-white text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
