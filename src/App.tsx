import React from 'react';
import { CircuitBackground } from './components/CircuitBackground';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TelemetryBanner } from './components/TelemetryBanner';
import { About } from './components/About';
import { AsicFlow } from './components/AsicFlow';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Education } from './components/Education';
import { Courses } from './components/Courses';
import { Community } from './components/Community';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-[#F8FAFC] selection:bg-[#00A8FF]/30 selection:text-[#00E5FF]">
      {/* Background Silicon Circuit & PCB Traces */}
      <CircuitBackground />

      {/* Subtle mouse follower glow */}
      <CursorGlow />

      {/* Floating Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section with Specs, Status Panel & Portrait Placeholder */}
        <Hero />

        {/* Silicon Telemetry Banner */}
        <TelemetryBanner />

        {/* About Profile & Domain Cards */}
        <About />

        {/* ASIC Design Flow Pipeline */}
        <AsicFlow />

        {/* Practical Experience Timeline */}
        <Experience />

        {/* Engineering Projects & Interactive Diagrams */}
        <Projects />

        {/* Technical Skills Suite */}
        <Skills />

        {/* EDA Tools & Technologies */}
        <Tools />

        {/* Education */}
        <Education />

        {/* Courses & Training */}
        <Courses />

        {/* Community & Leadership (Benichips) */}
        <Community />

        {/* Languages */}
        <Languages />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Connect Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
