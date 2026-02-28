"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Achievements", href: "#achievements" },
  { name: "Events", href: "#events" },
  { name: "Campus", href: "#campus" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar — Gold accent with real contact info */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white text-sm py-2 hidden md:block border-b border-secondary-300/20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:03364141333" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
              <FaPhone className="text-secondary-300" size={11} />
              0336-4141333
            </a>
            <span className="text-white/30">|</span>
            <a href="tel:0995627211" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
              <FaPhone className="text-secondary-300" size={11} />
              0995-627211-12
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:fdo.haripur@thepeace.edu.pk" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
              <FaEnvelope className="text-secondary-300" size={11} />
              fdo.haripur@thepeace.edu.pk
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://api.whatsapp.com/send?phone=923364141333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaWhatsapp className="text-green-400" size={13} />
              WhatsApp
            </a>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-secondary-300" size={11} />
              <span>Opposite Sabzi Mandi Darwesh, Haripur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-primary-100"
            : "bg-white/90 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo — Real school branding */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="https://thepeace.edu.pk/campuses/assets/img/logo/logo-2.png"
                  alt="The Peace Group Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-primary-700 text-lg leading-tight tracking-tight">
                  The Peace Group
                </h1>
                <p className="text-xs text-secondary-500 font-semibold tracking-wider uppercase">
                  Schools & Colleges · Haripur
                </p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary-600 bg-primary-50"
                      : "text-gray-600 hover:text-primary-600 hover:bg-primary-50/50"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary-300 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Admission CTA — Gold */}
            <div className="hidden lg:block">
              <a
                href="https://admissions.thepeace.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-secondary-300 to-secondary-400 text-primary-900 px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-secondary-300/30 transition-all duration-300 hover:scale-105 shimmer"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Mobile contact info */}
                <div className="bg-primary-50 rounded-xl p-3 mb-3 space-y-1">
                  <a href="tel:03364141333" className="flex items-center gap-2 text-sm text-primary-700">
                    <FaPhone size={11} /> 0336-4141333
                  </a>
                  <a href="mailto:fdo.haripur@thepeace.edu.pk" className="flex items-center gap-2 text-sm text-primary-700">
                    <FaEnvelope size={11} /> fdo.haripur@thepeace.edu.pk
                  </a>
                </div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeSection === link.href.replace("#", "")
                          ? "bg-primary-50 text-primary-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <a
                    href="https://admissions.thepeace.edu.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-gradient-to-r from-secondary-300 to-secondary-400 text-primary-900 px-6 py-3 rounded-xl font-bold text-sm"
                  >
                    Apply Now — Admissions Open
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
