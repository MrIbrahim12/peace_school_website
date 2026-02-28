"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFlask,
  FaCalculator,
  FaLaptopCode,
  FaPaintBrush,
  FaBookReader,
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";

const programs = [
  {
    icon: FaBookReader,
    title: "Primary Section",
    grades: "Classes 1-5",
    desc: "Building strong foundations with focus on literacy, numeracy, and Islamic education. Our nurturing primary program ensures every child develops a love for learning.",
    features: ["English Medium", "Quran Classes", "Activity Based Learning", "Smart Classrooms"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Middle Section",
    grades: "Classes 6-8",
    desc: "Comprehensive curriculum that prepares students for board examinations. Strong emphasis on Science, Mathematics, and English language skills.",
    features: ["Science Labs", "Computer Lab", "Library Access", "Sports Activities"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
  },
  {
    icon: FaFlask,
    title: "Matric (Science)",
    grades: "Classes 9-10",
    desc: "Our flagship science program with fully equipped laboratories. Students consistently achieve top positions in BISE board examinations.",
    features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Board Toppers"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
  },
  {
    icon: FaPaintBrush,
    title: "Matric (Arts)",
    grades: "Classes 9-10",
    desc: "A well-rounded arts program for students pursuing humanities. Strong results in board exams with personalized attention.",
    features: ["Humanities", "Islamic Studies", "Pakistan Studies", "Career Guidance"],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
  },
  {
    icon: FaCalculator,
    title: "FSc Pre-Engineering",
    grades: "1st & 2nd Year",
    desc: "Advanced science program preparing students for top engineering universities. Mathematics, Physics, and Chemistry at advanced level.",
    features: ["Advanced Math", "Physics", "Chemistry", "Entry Test Prep"],
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
  },
  {
    icon: FaLaptopCode,
    title: "ICS / FA Programs",
    grades: "1st & 2nd Year",
    desc: "Computer Science and Arts programs at intermediate level. Modern curriculum with practical computer skills and comprehensive arts education.",
    features: ["Computer Science", "Programming", "Arts Subjects", "Project Based"],
    color: "from-teal-500 to-green-500",
    bg: "bg-teal-50",
  },
];

export default function AcademicsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="academics"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-50 text-accent-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Academic <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From primary education to college, we offer comprehensive programs
            designed to bring out the best in every student.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              >
                <program.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <div className="mb-4">
                <span
                  className={`inline-block ${program.bg} text-xs font-semibold px-3 py-1 rounded-full mb-3`}
                >
                  {program.grades}
                </span>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.desc}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {program.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.color}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <FaArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
