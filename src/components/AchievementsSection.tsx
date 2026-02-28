"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CountUp from "react-countup";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";

const achievements = [
  {
    year: "2025",
    title: "HSSC & SSC-I Results",
    desc: "Outstanding results in BISE Abbottabad, BISE Mardan, BISE Peshawar, and BISE Swat — overall toppers in HSSC and SSC-I 2025.",
    positions: "Overall Top",
    icon: FaTrophy,
    img: "https://thepeace.edu.pk/assets/img/overall.jpg",
  },
  {
    year: "2024",
    title: "F.Sc Top Results",
    desc: "Top F.Sc 2024 results in BISE Mardan, BISE Peshawar, and BISE Abbottabad — students dominated the merit lists.",
    positions: "F.Sc Toppers",
    icon: FaMedal,
    img: "https://thepeace.edu.pk/assets/img/peace%20results/top1.jpg",
  },
  {
    year: "2023",
    title: "Career Expo & Excellence",
    desc: "Career Expo 2023 connecting students with universities. Students continued the tradition of board excellence.",
    positions: "Board Positions",
    icon: FaStar,
    img: "https://thepeace.edu.pk/assets/img/peace%20results/top2.jpg",
  },
  {
    year: "2022",
    title: "District Toppers",
    desc: "Peace School students topped the district in multiple boards, establishing dominance across all BISE examinations.",
    positions: "Multi-Board",
    icon: FaAward,
    img: "https://thepeace.edu.pk/assets/img/peace%20results/top3.jpg",
  },
];

const stats = [
  { number: 27, suffix: "+", label: "Campuses Nationwide", icon: "�" },
  { number: 8, suffix: "+", label: "Districts Covered", icon: "📍" },
  { number: 24, suffix: "+", label: "Years of Excellence", icon: "⭐" },
  { number: 100, suffix: "%", label: "Pass Rate", icon: "✅" },
  { number: 150, suffix: "+", label: "Qualified Teachers", icon: "👨‍🏫" },
  { number: 4, suffix: "+", label: "BISE Boards Topped", icon: "🏆" },
];

export default function AchievementsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Banner */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-20 rounded-3xl overflow-hidden"
        >
          <div className="animated-gradient py-16 px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold mb-1">
                    {statsInView && (
                      <CountUp end={stat.number} duration={2.5} />
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary-50 text-secondary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Pride
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Board <span className="gradient-text">Position Holders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Year after year, our students shine in board examinations. Here&apos;s a
            glimpse of our consistent excellence in BISE Abbottabad results.
          </p>
        </motion.div>

        {/* Achievement Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500 hidden lg:block" />

          <div className="space-y-12">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    {/* Result image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={achievement.img}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-secondary-300 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                            {achievement.positions}
                          </span>
                          <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {achievement.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                  className="hidden lg:flex w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/30 z-10"
                >
                  <span className="text-white font-bold text-sm">
                    {achievement.year.slice(-2)}
                  </span>
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
