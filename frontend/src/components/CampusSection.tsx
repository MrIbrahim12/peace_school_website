"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaTree,
  FaDesktop,
  FaFlask,
  FaBookOpen,
  FaFutbol,
  FaShieldAlt,
  FaPhone,
} from "react-icons/fa";

const facilities = [
  { icon: FaDesktop, name: "Computer Labs", desc: "Modern computer labs with latest technology" },
  { icon: FaFlask, name: "Science Labs", desc: "Fully equipped Physics, Chemistry & Biology labs" },
  { icon: FaBookOpen, name: "Library", desc: "Extensive library with thousands of books" },
  { icon: FaFutbol, name: "Sports Ground", desc: "Spacious playground for cricket, football & more" },
  { icon: FaTree, name: "Green Campus", desc: "Beautiful green campus with peaceful environment" },
  { icon: FaShieldAlt, name: "Security", desc: "24/7 CCTV surveillance and security guards" },
];

const campuses = [
  {
    name: "Haripur Boys Campus",
    branch: "Haripur Branch",
    address: "Opposite Sabzi Mandi Darwesh, Haripur",
    desc: "Empowering students and shaping futures with quality education, strong values, and a supportive environment for lifelong success. Montessori to F.Sc-I.",
    features: ["Montessori to F.Sc", "Science Labs", "Computer Lab", "Sports Ground"],
    isFeatured: true,
    phone: "0336-4141333",
    image: "https://thepeace.edu.pk/campuses/assets/img/hero/haripur.jpg",
  },
  {
    name: "Haripur Girls Campus",
    branch: "Haripur",
    address: "Opposite Sabzi Mandi Darwesh, Haripur",
    desc: "Fostering academic achievement, leadership, and personal growth in a safe and supportive environment for every female student.",
    features: ["Female Faculty", "Secure Campus", "All Facilities"],
    isFeatured: false,
    phone: "0336-4141333",
    image: "https://thepeace.edu.pk/assets/img/overall.jpg",
  },
  {
    name: "Abbottabad Campus",
    branch: "Abbottabad",
    address: "Mehtab Abbasi Road, Mirpur, Abbottabad",
    desc: "The headquarters of The Peace Group offering comprehensive education with the largest campus facilities in the network.",
    features: ["HQ Campus", "Hill Campus", "Boys & Girls"],
    isFeatured: false,
    phone: "0342-3131444",
    image: "https://thepeace.edu.pk/assets/img/overall1.jpg",
  },
];

export default function CampusSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="campus"
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Campus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            World-Class <span className="gradient-text">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Haripur campus provides a nurturing and stimulating environment
            with modern facilities designed for optimal learning.
          </p>
        </motion.div>

        {/* Campus Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {campuses.map((campus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ${
                campus.isFeatured
                  ? "lg:row-span-1 border-2 border-primary-200"
                  : "border border-gray-100"
              }`}
            >
              {campus.isFeatured && (
                <div className="absolute top-4 right-4 bg-secondary-400 text-primary-900 px-3 py-1 rounded-full text-xs font-bold z-10">
                  ⭐ Main Campus
                </div>
              )}

              {/* Campus Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-xl font-heading font-bold drop-shadow-lg">
                    {campus.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaMapMarkerAlt className="text-primary-500" />
                  {campus.address}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {campus.desc}
                </p>
                <a href={`tel:${campus.phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-primary-600 text-sm font-semibold mb-4 hover:text-primary-700 transition-colors">
                  <FaPhone size={12} />
                  {campus.phone}
                </a>
                <div className="flex flex-wrap gap-2">
                  {campus.features.map((feature, j) => (
                    <span
                      key={j}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-10">
            Campus Facilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md shadow-gray-100 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <facility.icon className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">
                    {facility.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
