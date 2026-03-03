// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Container from "../layout/Container";
import { useTheme } from "../context/ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - offset, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  // ─── Mobile Menu Overlay (rendered via Portal to document.body) ─────────────
  // This escapes the <nav> stacking context so backdrop-blur works at any
  // scroll position. Even when <nav> has transition/transform, the portal
  // sits directly on the root and composites correctly against the full page.
  const mobileMenuPortal = createPortal(
    <div
      aria-hidden={!isMenuOpen}
      className={`md:hidden fixed inset-0 z-[9999] transition-all duration-500 ease-in-out
        ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Full-viewport blur backdrop — lives outside <nav> stacking context */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 bg-black/40 dark:bg-gray-900/60 backdrop-blur-sm"
      />

      {/* Sliding menu panel */}
      <div
        className={`absolute top-0 left-0 w-full flex flex-col items-center pt-24
          transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-y-0" : "-translate-y-8"}
        `}
      >
        <Container>
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          <ul className="flex flex-col gap-6 mb-8 bg-white dark:bg-darkBg p-6 rounded-2xl shadow-2xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="w-full text-left text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="w-full text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-extrabold shadow-xl shadow-primary/25 hover:scale-105 transition-transform"
          >
            Book a Discovery Call
          </button>
        </Container>
      </div>
    </div>,
    document.body
  );
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500
          ${isScrolled
            ? "py-3 bg-white/70 dark:bg-darkBg/70 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm backdrop-blur-md"
            : "py-6 bg-transparent border-b border-transparent"
          }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={(e) => scrollToSection(e, "hero")}
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Back to top"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                BluePeak Media
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all focus:ring-2 focus:ring-primary/20"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? "☀️" : "🌙"}
                </button>

                <button
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                >
                  Book Call
                </button>
              </div>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-200 text-2xl focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Portal: Mobile menu renders directly on document.body */}
      {mobileMenuPortal}
    </>
  );
};

export default Navbar;