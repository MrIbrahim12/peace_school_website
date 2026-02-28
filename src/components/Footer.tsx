"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaDove,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Achievements", href: "#achievements" },
  { name: "Events", href: "#events" },
  { name: "Campus", href: "#campus" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  "Montessori",
  "Primary Section (1-5)",
  "Middle Section (6-8)",
  "Matric Science (9-10)",
  "Matric Arts (9-10)",
  "FSc Pre-Engineering",
  "FSc Pre-Medical",
  "ICS / FA",
];

const campuses = [
  "Abbottabad Campus",
  "Haripur Campus",
  "Mansehra Campus",
  "Mardan Campus",
  "Nowshera Campus",
  "Charsadda Campus",
  "Swabi Campus",
  "Swat Campus",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 py-16 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 opacity-5">
          <FaDove size={200} className="text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-secondary-300/20 text-secondary-300 px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
              Admissions Open 2026-2027
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Join The Peace Group — <span className="text-secondary-300">Haripur Campus</span>
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Montessori to F.Sc-I. Limited seats available with scholarships. 
              Secure your child&apos;s bright future today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://admissions.thepeace.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-secondary-300 to-secondary-400 hover:from-secondary-200 hover:to-secondary-300 text-primary-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-secondary-300/30"
              >
                Apply Online →
              </a>
              <a
                href="tel:03364141333"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone /> 0336-4141333
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://thepeace.edu.pk/campuses/assets/img/logo/logo-2.png"
                  alt="The Peace Group Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg leading-tight">
                    The Peace Group
                  </h3>
                  <p className="text-secondary-300 text-xs font-semibold tracking-wider uppercase">
                    Schools & Colleges
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The PEACE Group of Schools and Colleges is a Private Independent Chain of
                schools across KPK, providing quality education from Montessori to F.Sc 
                level since 2001. <span className="text-secondary-300">Peace Through Education.</span>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                <strong className="text-white">Haripur Campus:</strong> Opposite Sabzi Mandi Darwesh, Haripur, KPK.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, href: "https://www.facebook.com/thepeacegroup.officials", label: "Facebook" },
                  { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=923364141333", label: "WhatsApp" },
                  { icon: FaInstagram, href: "https://www.instagram.com/thepeacegroup.officials/", label: "Instagram" },
                  { icon: FaYoutube, href: "https://www.youtube.com/channel/UCt4I1SA6v5WMyNTTZ4SrtIQ", label: "YouTube" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/thepeacegroup-ho/", label: "LinkedIn" },
                  { icon: FaGlobe, href: "https://thepeace.edu.pk/", label: "Website" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-secondary-300">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:pl-2"
                    >
                      → {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-secondary-300">
                Our Programs
              </h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program}>
                    <span className="text-gray-400 text-sm">• {program}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info + Campuses */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-secondary-300">
                Haripur Campus
              </h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-secondary-300 mt-1 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">
                    Opposite Sabzi Mandi Darwesh,
                    <br />
                    Haripur, KPK, Pakistan
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-secondary-300 flex-shrink-0" />
                  <div>
                    <a href="tel:03364141333" className="text-gray-400 text-sm hover:text-white transition-colors block">0336-4141333</a>
                    <a href="tel:0995627211" className="text-gray-400 text-sm hover:text-white transition-colors block">0995-627211-12</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-secondary-300 flex-shrink-0" />
                  <a href="mailto:fdo.haripur@thepeace.edu.pk" className="text-gray-400 text-sm hover:text-white transition-colors">
                    fdo.haripur@thepeace.edu.pk
                  </a>
                </div>
              </div>
              {/* Other Campus Links */}
              <h5 className="text-sm font-bold text-white mb-2">All Campuses:</h5>
              <div className="space-y-1">
                {campuses.map((c) => (
                  <span key={c} className="text-gray-500 text-xs block">• {c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2025-2026 The Peace Group of Schools & Colleges. All rights reserved. | TPGSC
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <FaDove className="text-secondary-300" size={12} />
                Peace Through Education
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white rounded-full shadow-xl shadow-primary-500/30 flex items-center justify-center z-40 hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}
