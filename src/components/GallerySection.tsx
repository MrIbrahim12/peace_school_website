"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import { FaImages, FaTimes } from "react-icons/fa";

const galleryCategories = ["All", "Campus", "Results", "Events", "Leadership"];

const galleryItems = [
  {
    category: "Campus",
    title: "Haripur Campus",
    desc: "The Peace School and College, Haripur Campus — Opposite Sabzi Mandi Darwesh",
    img: "https://thepeace.edu.pk/campuses/assets/img/hero/haripur.jpg",
  },
  {
    category: "Results",
    title: "HSSC Overall Toppers 2025",
    desc: "Overall top positions in HSSC 2025 across multiple BISE boards",
    img: "https://thepeace.edu.pk/assets/img/overall1.jpg",
  },
  {
    category: "Results",
    title: "BISE Abbottabad Toppers",
    desc: "Top results in BISE Abbottabad board examinations",
    img: "https://thepeace.edu.pk/assets/img/bisep1.jpg",
  },
  {
    category: "Leadership",
    title: "Chairman Mr. Sana Ullah Khan",
    desc: "Founder and Chairman of The Peace Group of Schools & Colleges",
    img: "https://thepeace.edu.pk/assets/img/1.jpg",
  },
  {
    category: "Leadership",
    title: "CEO Mr. Ahmad Tashfeen Khan",
    desc: "CEO driving the vision of academic excellence and innovation",
    img: "https://thepeace.edu.pk/assets/img/2.jpg",
  },
  {
    category: "Results",
    title: "F.Sc Top Results 2024",
    desc: "Top F.Sc 2024 in BISE Mardan, Peshawar, and Abbottabad",
    img: "https://thepeace.edu.pk/assets/img/peace%20results/top1.jpg",
  },
  {
    category: "Results",
    title: "Board Toppers 2024",
    desc: "Outstanding intermediate results across multiple boards",
    img: "https://thepeace.edu.pk/assets/img/peace%20results/top2.jpg",
  },
  {
    category: "Events",
    title: "SSC-I Haripur Results",
    desc: "Grade 9 BISE Abbottabad — Peace Haripur Campus toppers",
    img: "https://thepeace.edu.pk/assets/img/peaceharipur3.jpg",
  },
  {
    category: "Results",
    title: "Overall SSC-I 2025",
    desc: "Overall top positions in Grade 9 BISE Abbottabad 2025",
    img: "https://thepeace.edu.pk/assets/img/overall.jpg",
  },
];

export default function GallerySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FaImages className="inline mr-2" />
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Life at <span className="gradient-text">Peace School</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the vibrant life at The Peace Group of School &
            College, Haripur.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <motion.div
              key={`${item.title}-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(i)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading font-bold text-white text-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary-300/90 backdrop-blur-sm text-primary-900 px-3 py-1 rounded-full text-xs font-bold">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <Image
                  src={filteredItems[selectedImage]?.img || ""}
                  alt={filteredItems[selectedImage]?.title || ""}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="font-heading font-bold text-3xl text-white mb-2">
                    {filteredItems[selectedImage]?.title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {filteredItems[selectedImage]?.desc}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
