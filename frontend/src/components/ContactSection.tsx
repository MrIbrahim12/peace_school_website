"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to Django backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
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
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions or want to learn more? Reach out to
            us and we&apos;ll be happy to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Visit Us",
                line1: "Opposite Sabzi Mandi Darwesh",
                line2: "Haripur, KPK, Pakistan",
                color: "from-primary-500 to-primary-600",
              },
              {
                icon: FaPhone,
                title: "Call Us",
                line1: "0336-4141333 (Mobile)",
                line2: "0995-627211-12 (Landline)",
                color: "from-accent-500 to-accent-600",
              },
              {
                icon: FaEnvelope,
                title: "Email Us",
                line1: "fdo.haripur@thepeace.edu.pk",
                line2: "info@thepeace.edu.pk",
                color: "from-primary-400 to-primary-600",
              },
              {
                icon: FaClock,
                title: "Office Hours",
                line1: "Monday - Saturday",
                line2: "8:00 AM - 3:00 PM",
                color: "from-secondary-400 to-secondary-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md shadow-gray-100 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.line1}</p>
                  <p className="text-gray-500 text-sm">{item.line2}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-5 shadow-md shadow-gray-100 border border-gray-100">
              <h4 className="font-heading font-bold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, color: "bg-blue-600 hover:bg-blue-700", label: "Facebook", href: "https://www.facebook.com/thepeacegroup.officials" },
                  { icon: FaWhatsapp, color: "bg-green-600 hover:bg-green-700", label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=923364141333" },
                  { icon: FaInstagram, color: "bg-pink-600 hover:bg-pink-700", label: "Instagram", href: "https://www.instagram.com/thepeacegroup.officials/" },
                  { icon: FaYoutube, color: "bg-red-600 hover:bg-red-700", label: "YouTube", href: "https://www.youtube.com/channel/UCt4I1SA6v5WMyNTTZ4SrtIQ" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl ${social.color} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPaperPlane className="text-green-600" size={32} />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="fee">Fee Structure</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52897.91968048706!2d72.89!3d33.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3db5e5555555%3A0x55555555!2sHaripur%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peace School Haripur Location"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
