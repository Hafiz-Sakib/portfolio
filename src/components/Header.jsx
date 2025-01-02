import React, { useState } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope, // Icon for Connect
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    // Initialize active link based on current path
    const path = location.pathname.substring(1) || "home";
    return path;
  });

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },

    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" }, // Added Connect
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
        <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-2.5">
          <div className="flex items-center gap-1 md:gap-2">
            {navLinks.map(({ id, icon: Icon, text, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => setActiveLink(id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-300 flex items-center gap-2
                  hover:bg-white/10 
                  ${
                    activeLink === id
                      ? "bg-white/15 text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                <Icon
                  className={`text-base ${
                    activeLink === id ? "scale-110" : ""
                  }`}
                />
                <span className="hidden md:inline">{text}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <style>{`
  @keyframes gradient-x {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  .animate-gradient-x {
    animation: gradient-x 3s linear infinite;
    background-size: 200% 200%;
  }
`}</style>
    </header>
  );
}
