"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  // Toggle menu visibility
  const toggleMenu = () => {
    const menu = document.getElementById("navbar-mobile");
    if (menu) {
      menu.classList.toggle("hidden");
      menu.classList.toggle("max-h-[500px]"); // Add max height for animation
    }
  };

  // Scroll to section smoothly
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the top of the section
      });
    }
  };

  return (
    <div className="w-full h-[65px] flex justify-center fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between md:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#" onClick={(e) => scrollToSection(e, "about-me")}>About me</Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "skills")}>Skills</Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "experience")}>Experience</Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "projects")}>Projects</Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "contact")}>Contact</Link>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          type="button"
          className="md:hidden p-2 w-10 h-10 text-sm text-gray-500 flex justify-center items-center rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-black dark:focus:ring-zinc-800"
          aria-controls="navbar-mobile"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div
          id="navbar-mobile"
          className="hidden max-h-0 overflow-hidden transition-all duration-300 w-1/2  absolute top-[65px] z-50 bg-[#050519] text-white border mt-2 border-gray-700 rounded-lg md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 font-bold">
            <li>
              <Link href="#" onClick={(e) => scrollToSection(e, "about-me")} className="block px-3 py-2">
                About me
              </Link>
            </li>
            <li>
              <Link href="#" onClick={(e) => scrollToSection(e, "skills")} className="block px-3 py-2">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#" onClick={(e) => scrollToSection(e, "experience")} className="block px-3 py-2">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#" onClick={(e) => scrollToSection(e, "projects")} className="block px-3 py-2">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" onClick={(e) => scrollToSection(e, "contact")} className="block px-3 py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
