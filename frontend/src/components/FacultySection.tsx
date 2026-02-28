"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGraduationCap, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";

const leadershipTeam = [
  {
    name: "Mr. Sana Ullah Khan",
    role: "Chairman",
    subtitle: "The Peace Group",
    img: "https://thepeace.edu.pk/assets/img/1.jpg",
    desc: "Visionary founder who started The Peace Group in 2001 from a two-room structure in Nowshera, now grown to 27+ campuses across KPK.",
    color: "from-primary-600 to-primary-800",
  },
  {
    name: "Mr. Ahmad Tashfeen Khan",
    role: "CEO",
    subtitle: "The Peace Group",
    img: "https://thepeace.edu.pk/assets/img/2.jpg",
    desc: "Committed to driving academic excellence, innovation, and holistic development across all Peace campuses.",
    color: "from-primary-500 to-primary-700",
  },
  {
    name: "Mr. Maaz Ali Khattak",
    role: "Chief Executive",
    subtitle: "Abbottabad Campus",
    img: "https://thepeace.edu.pk/assets/img/3.png",
    desc: "Leading the Abbottabad campus operations with focus on quality education and student development.",
    color: "from-primary-400 to-primary-600",
  },
];

const facultyDepartments = [
  {
    name: "Science Department",
    role: "Physics, Chemistry, Biology",
    qualification: "M.Sc / M.Phil",
    experience: "18+ Years",
    desc: "Fully equipped Physics, Chemistry & Biology labs with expert faculty producing BISE board toppers.",
    color: "from-accent-500 to-accent-600",
  },
  {
    name: "Mathematics Department",
    role: "Pure & Applied Mathematics",
    qualification: "M.Sc Mathematics",
    experience: "15+ Years",
    desc: "Building strong mathematical foundations through advanced teaching methods for board exam success.",
    color: "from-secondary-400 to-secondary-600",
  },
  {
    name: "English Department",
    role: "Language & Literature",
    qualification: "MA English",
    experience: "14+ Years",
    desc: "Developing English language proficiency, communication skills, and bilingual speech competition champions.",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Computer Science",
    role: "IT & Programming",
    qualification: "MCS / BS CS",
    experience: "10+ Years",
    desc: "Modern computer labs with latest technology. Teaching IT skills and programming for the digital age.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Islamic Studies",
    role: "Qirat, Naat & Islamic Education",
    qualification: "MA Islamiyat",
    experience: "16+ Years",
    desc: "Nurturing Islamic values through Qirat, Naat competitions, and comprehensive Islamic studies curriculum.",
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Social Sciences",
    role: "Pakistan Studies, Urdu",
    qualification: "MA / M.Ed",
    experience: "12+ Years",
    desc: "Comprehensive humanities education developing well-rounded citizens with strong national identity.",
    color: "from-orange-500 to-orange-600",
  },
];

export default function FacultySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faculty" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FaChalkboardTeacher className="inline mr-2" />
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Leadership & <span className="gradient-text">Expert Faculty</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Led by visionary leaders and backed by highly qualified teachers —
            the backbone of Peace School&apos;s consistent excellence in board examinations.
          </p>
        </motion.div>

        {/* Leadership Team with real images */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {leadershipTeam.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-secondary-200 transition-all duration-500"
            >
              {/* Photo */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent" />
                {/* Role badge */}
                <div className="absolute top-4 right-4 bg-secondary-300 text-primary-900 rounded-full px-4 py-1">
                  <span className="text-xs font-bold">{leader.role}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-bold text-sm mb-1">
                  {leader.role}
                </p>
                <p className="text-secondary-500 text-xs font-semibold uppercase tracking-wider mb-3">
                  {leader.subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Departments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-10">
            Academic Departments
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyDepartments.map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${dept.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center flex-shrink-0`}>
                      <FaUserTie className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-gray-900 text-lg mb-1">
                        {dept.name}
                      </h4>
                      <p className="text-primary-600 font-semibold text-xs mb-1">{dept.role}</p>
                      <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                        <span className="flex items-center gap-1"><FaGraduationCap /> {dept.qualification}</span>
                        <span>•</span>
                        <span>{dept.experience}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{dept.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-primary-50 rounded-full px-6 py-3 border border-primary-100">
            <FaChalkboardTeacher className="text-primary-600" />
            <p className="text-gray-600">
              Our team of <span className="font-bold text-primary-600">150+ qualified teachers</span>{" "}
              ensures personalized attention for every student.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
