"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaArrowRight, FaStar, FaTrophy, FaDove, FaPhone } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://thepeace.edu.pk/campuses/assets/img/hero/haripur.jpg"
          alt="Peace School Haripur Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-700/80" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-secondary-300/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300/10 rounded-full blur-3xl"
        />

        {/* Floating dove — white dove from logo */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-32 right-20 text-white/10 hidden lg:block"
        >
          <FaDove size={80} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-40 left-20 text-secondary-300/15 hidden lg:block"
        >
          <FaTrophy size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-60 left-1/4 text-secondary-300/10 hidden lg:block"
        >
          <FaStar size={40} />
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Tagline from real website */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-secondary-300/20 backdrop-blur-sm border border-secondary-300/30 rounded-full px-5 py-2 mb-6"
            >
              <FaDove className="text-secondary-300" />
              <span className="text-secondary-300 text-sm font-bold tracking-wider uppercase">
                Peace Through Education
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
            >
              The Peace
              <span className="block text-secondary-300">
                Schools & Colleges
              </span>
              <span className="block text-white/90 text-2xl sm:text-3xl lg:text-4xl mt-2 font-body font-light tracking-wide">
                Haripur Campus
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Founded in 2001, growing to <span className="text-secondary-300 font-semibold">27+ campuses</span> across 
              KPK. Shaping futures through excellence in education from Montessori to F.Sc.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-white/60 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Our students consistently achieve top positions in BISE Abbottabad 
              Board Examinations. Join the legacy of academic excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://admissions.thepeace.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-secondary-300 to-secondary-400 hover:from-secondary-200 hover:to-secondary-300 text-primary-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-secondary-300/30 flex items-center justify-center gap-2"
              >
                Admissions Open 2026
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:03364141333"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone />
                0336-4141333
              </a>
            </motion.div>
          </div>

          {/* Right Content — Stats Cards + Chairman */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaGraduationCap,
                  number: "27+",
                  label: "Campuses Nationwide",
                  color: "from-primary-500/20 to-primary-600/20",
                },
                {
                  icon: FaTrophy,
                  number: "Top",
                  label: "BISE Board Results",
                  color: "from-secondary-300/20 to-secondary-400/20",
                },
                {
                  icon: FaStar,
                  number: "2001",
                  label: "Founded In",
                  color: "from-secondary-300/10 to-primary-500/20",
                },
                {
                  icon: FaDove,
                  number: "8+",
                  label: "Districts Covered",
                  color: "from-primary-400/20 to-primary-600/20",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center`}
                >
                  <stat.icon className="text-secondary-300/80 mx-auto mb-3" size={28} />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chairman badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4"
            >
              <Image
                src="https://thepeace.edu.pk/assets/img/1.jpg"
                alt="Chairman Mr. Sana Ullah Khan"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover border-2 border-secondary-300/50"
              />
              <div>
                <p className="text-white font-heading font-bold">Mr. Sana Ullah Khan</p>
                <p className="text-secondary-300 text-sm font-semibold">Chairman — The Peace Group</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,88C960,80,1056,64,1152,58.7C1248,53,1344,59,1392,61.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
