import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EventsSection from "@/components/EventsSection";
import CampusSection from "@/components/CampusSection";
import GallerySection from "@/components/GallerySection";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <AchievementsSection />
      <EventsSection />
      <CampusSection />
      <GallerySection />
      <FacultySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
