"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCalendarAlt,
  FaTrophy,
  FaFutbol,
  FaMicrophone,
  FaBook,
  FaUsers,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const events = [
  {
    title: "The Peace Festival",
    date: "Annual Event — Since 2014",
    desc: "A unique tradition bringing students from all Peace campuses under one flag. Features Cricket, Football, Volleyball, Athletics, Basketball, Tug of War, Badminton, Bilingual Speech Competitions, Quiz Competition, Bait Bazi, Qirat & Naat competitions, and Essay writings.",
    icon: FaTrophy,
    color: "from-secondary-300 to-secondary-500",
    tag: "Signature Event",
    featured: true,
  },
  {
    title: "Career Expo 2023",
    date: "Career Guidance Program",
    desc: "Annual career exhibition connecting students with top universities and career opportunities. Helping students plan their academic future with professional guidance.",
    icon: FaGraduationCap,
    color: "from-primary-500 to-primary-700",
    tag: "Career",
    featured: false,
  },
  {
    title: "Inter-House Competitions",
    date: "Throughout the Year",
    desc: "Regular inter-house academic and sports competitions that foster healthy rivalry, teamwork, and sportsmanship among students across all Peace campuses.",
    icon: FaUsers,
    color: "from-purple-500 to-purple-700",
    tag: "Competition",
    featured: false,
  },
  {
    title: "Orientation Day",
    date: "Session 2025-26",
    desc: "Welcome ceremony for new students and parents, introducing them to the Peace School culture, academic programs, and campus facilities.",
    icon: FaBook,
    color: "from-accent-500 to-accent-600",
    tag: "Academic",
    featured: false,
  },
  {
    title: "Bilingual Speech Competitions",
    date: "Co-Curricular Activities",
    desc: "Students showcase their oratory skills in both Urdu and English, building confidence and public speaking abilities that prepare them for leadership roles.",
    icon: FaMicrophone,
    color: "from-orange-500 to-red-500",
    tag: "Co-Curricular",
    featured: false,
  },
  {
    title: "Sports Training Camp",
    date: "Annual Sports Program",
    desc: "Comprehensive sports training across Cricket, Football, Volleyball, Athletics, Basketball, and Badminton. Preparing students for inter-campus and district-level competitions.",
    icon: FaFutbol,
    color: "from-teal-500 to-cyan-600",
    tag: "Sports",
    featured: false,
  },
];

export default function EventsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="events" className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary-50 text-secondary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FaCalendarAlt className="inline mr-2" />
            Events & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Life Beyond <span className="gradient-text">Academics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At The Peace Group, we believe no book can teach what life can. That&apos;s why 
            our students participate in a vibrant mix of co-curricular, cultural, and sports 
            activities that develop their character alongside academics.
          </p>
        </motion.div>

        {/* Featured Event — Peace Festival */}
        {events.filter(e => e.featured).map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 relative rounded-3xl overflow-hidden"
          >
            <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-block bg-secondary-300/20 text-secondary-300 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    ⭐ {event.tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-secondary-300 font-semibold mb-4">{event.date}</p>
                  <p className="text-white/80 leading-relaxed mb-6">{event.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {["Cricket", "Football", "Volleyball", "Athletics", "Quiz", "Qirat & Naat", "Speech", "Essay Writing"].map((tag, j) => (
                      <span key={j} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="w-64 h-64 rounded-full border-2 border-dashed border-secondary-300/30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-secondary-300/20 backdrop-blur-sm rounded-full w-48 h-48 flex items-center justify-center border border-secondary-300/30">
                        <div className="text-center">
                          <FaTrophy className="text-secondary-300 mx-auto mb-3" size={48} />
                          <p className="text-white font-heading font-bold text-lg">Since</p>
                          <p className="text-secondary-300 font-bold text-3xl">2014</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.filter(e => !e.featured).map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-500"
            >
              {/* Event icon header */}
              <div className={`h-32 bg-gradient-to-br ${event.color} flex items-center justify-center relative`}>
                <event.icon className="text-white/80" size={48} />
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-xs font-bold">{event.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary-600 text-sm font-semibold mb-2">{event.date}</p>
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {event.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <FaArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
