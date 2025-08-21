"use client"
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TechArsenal from "./components/TechArsenal";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex min-h-screen flex-col bg-[#121212] test">
          <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <TechArsenal />
          <ProjectsSection/>
          <EmailSection/>
        </div>
          <Footer />
      </main>
    </div>
  );
}
