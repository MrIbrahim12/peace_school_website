"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Muhammad Ahmed",
    role: "Board Position Holder — Matric 2024",
    text: "Peace School gave me the best education and guidance. The teachers are incredibly supportive and dedicated. I am proud to be a position holder from this institution.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    role: "FSc Pre-Medical — 1st Position District",
    text: "The environment at Peace School is amazing for studies. The science labs are well-equipped, and the faculty is the best in Haripur. I owe my success to this school.",
    rating: 5,
  },
  {
    name: "Ali Hassan",
    role: "Parent — Father of 3 Students",
    text: "All three of my children study at Peace School and I have seen remarkable improvements in their academics and character. The school truly lives up to its name.",
    rating: 5,
  },
  {
    name: "Sana Bibi",
    role: "Board Position Holder — Matric 2023",
    text: "The discipline and quality education at Peace School helped me achieve my dream of becoming a board position holder. The teachers go above and beyond for students.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "ICS Graduate — Now at FAST University",
    text: "Peace School prepared me so well that I easily got admission in one of the top universities. The computer science department is excellent with practical approach.",
    rating: 5,
  },
  {
    name: "Hafiz Muhammad Bilal",
    role: "Parent & Community Leader",
    text: "Peace School is the pride of Haripur. Their combination of modern education with Islamic values makes them unique. I recommend it to every parent in the region.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            What People <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students, parents, and community members about their
            experience with The Peace Group.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-primary-100 absolute top-6 right-6" size={30} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <FaStar key={j} className="text-secondary-400" size={16} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-600 text-xs font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
