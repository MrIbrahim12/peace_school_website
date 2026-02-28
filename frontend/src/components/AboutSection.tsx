"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  FaBookOpen,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaMosque,
  FaShieldAlt,
  FaDove,
} from "react-icons/fa";

const values = [
  {
    icon: FaBookOpen,
    title: "Academic Excellence",
    desc: "Consistently producing BISE Board toppers with outstanding results across multiple boards.",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: FaMosque,
    title: "Islamic Values",
    desc: "Education rooted in Islamic principles — Qirat, Naat competitions and moral character building.",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: FaUsers,
    title: "Expert Faculty",
    desc: "Dedicated and experienced teachers committed to inspiring students across all campuses.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaDove,
    title: "Peace & Tolerance",
    desc: "Fostering an atmosphere of peace, tolerance, and understanding for a brighter future.",
    color: "from-primary-400 to-primary-600",
  },
  {
    icon: FaLightbulb,
    title: "Holistic Development",
    desc: "Co-curricular activities, Copernicus Olympiad, Kangaroo Test, and sports training.",
    color: "from-secondary-400 to-secondary-600",
  },
  {
    icon: FaShieldAlt,
    title: "Student Leadership",
    desc: "Proctorial boards, inter-house competitions, and student leadership programs.",
    color: "from-peace-red to-red-600",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white particles-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="gradient-text">The Peace Group</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We welcome you to the rising educational network &ldquo;The PEACE GROUP&rdquo;. 
            Founded in 2001 in Nowshera, KP, we have grown from a single campus to a 
            leading educational network with <span className="text-primary-600 font-semibold">27+ campuses across 8 districts</span>. 
            For over two decades, we have empowered thousands of students with quality education, 
            values, and confidence to succeed.
          </p>
        </motion.div>

        {/* About content with Chairman image and text */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side — Chairman */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://thepeace.edu.pk/assets/img/1.jpg"
                alt="Chairman Mr. Sana Ullah Khan"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-6">
                <h3 className="font-heading text-xl font-bold text-white">
                  Mr. Sana Ullah Khan
                </h3>
                <p className="text-secondary-300 font-semibold">Chairman — The Peace Group</p>
              </div>
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 border-4 border-secondary-300/30 rounded-full"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-3xl -z-10" />
          </motion.div>

          {/* Text side — Chairman's Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
              Message From The
              <span className="text-primary-600"> Chairman</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="italic border-l-4 border-secondary-300 pl-4 text-gray-700">
                &ldquo;Education, in its truest essence, symbolizes a transformative journey — 
                one that shifts the paradigm from turmoil to tranquility, from favoritism to 
                fairness, from corruption to healthy competition, and from stagnation to progress.&rdquo;
              </p>
              <p>
                The humble yet profound journey of Peace School began in 2001, with nothing
                more than a modest two-room structure in Nowshera. Our reach has expanded with 
                campuses in Abbottabad (2012), Mansehra (2014), Haripur & Mardan (2015), 
                Charsadda & Swabi (2016), Peshawar (2018), Swat (2019), and Oghi (2020).
              </p>
              <p>
                At the Haripur Campus, we believe that every student holds unique potential. 
                Our approach centers on recognizing strengths, nurturing talents, and encouraging 
                critical thinking — developing personal skills, emotional intelligence, and 
                leadership qualities for lifelong success.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100">
                <h4 className="font-heading font-bold text-primary-700 mb-2">
                  Our Mission
                </h4>
                <p className="text-sm text-gray-600">
                  To provide quality education that empowers students to excel 
                  academically and become responsible citizens and future leaders.
                </p>
              </div>
              <div className="bg-secondary-50 rounded-2xl p-5 border border-secondary-200">
                <h4 className="font-heading font-bold text-secondary-600 mb-2">
                  Our Vision
                </h4>
                <p className="text-sm text-gray-600">
                  To be the leading educational institution in KPK, recognized for 
                  excellence, innovation, and nurturing responsible citizens.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-10">
            The Peace Group Executives
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: "Mr. Sana Ullah Khan", role: "Chairman", img: "https://thepeace.edu.pk/assets/img/1.jpg" },
              { name: "Mr. Ahmad Tashfeen Khan", role: "CEO", img: "https://thepeace.edu.pk/assets/img/2.jpg" },
              { name: "Mr. Maaz Ali Khattak", role: "Chief Executive, Abbottabad", img: "https://thepeace.edu.pk/assets/img/3.png" },
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-heading font-bold text-gray-900 text-lg">{leader.name}</h4>
                  <p className="text-primary-600 font-semibold text-sm">{leader.role}</p>
                  <p className="text-xs text-secondary-500 font-medium mt-1">THE PEACE GROUP</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="text-white" size={24} />
                </div>
                <h4 className="font-heading font-bold text-gray-900 text-lg mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
