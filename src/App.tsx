import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import ProjectModal from './components/ProjectModal';
import HireModal from './components/HireModal';
import ResumeModal from './components/ResumeModal';

import { PortfolioProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [hireService, setHireService] = useState<string | undefined>(undefined);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenHireModal = (serviceTitle?: string) => {
    setHireService(serviceTitle);
    setHireModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenHireModal={handleOpenHireModal} />

      {/* Main Page Layout Sections */}
      <main className="relative z-10">
        
        {/* 1. Hero Section */}
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 2. About Me Section */}
        <AboutSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Services Section */}
        <ServicesSection onOpenHireModal={handleOpenHireModal} />

        {/* 5. Portfolio Section */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 8. FAQ Accordion Section */}
        <FAQSection />

        {/* 9. Contact Section */}
        <ContactSection initialService={hireService} />

      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* Floating Back To Top Trigger */}
      <BackToTop />

      {/* Interactive Lightbox / Detail Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHireModal={handleOpenHireModal}
      />

      <HireModal
        isOpen={hireModalOpen}
        serviceTitle={hireService}
        onClose={() => setHireModalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
