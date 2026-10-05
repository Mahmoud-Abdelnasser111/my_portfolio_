import React, { useState } from 'react';
import { ArrowRight, FileDown, Cpu, Terminal, Radio } from 'lucide-react';
import { ChipVisualization } from './ChipVisualization';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A8FF]/6 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top telemetry bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 text-[11px] font-mono text-[#94A3B8] border-b border-[#00A8FF]/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-[#00E5FF] font-semibold">CORE_ACTIVE</span>
            <span className="text-[#00A8FF]/40">|</span>
            <span>SYSTEM_READY</span>
            <span className="text-[#00A8FF]/40">|</span>
            <span className="text-[#00A8FF]">EDA_ENV: OK</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">PPA_TARGET: OPTIMAL</span>
            <span>RTL // ASIC // FPGA</span>
          </div>
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Profile and Details (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071426] border border-[#00A8FF]/30 w-fit shadow-[0_0_15px_rgba(0,168,255,0.15)]">
              <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00E5FF] font-semibold">
                ELECTRONICS &amp; COMMUNICATION ENGINEERING
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white">
                Mahmoud <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00E5FF] to-white">Abdelnasser</span>
              </h1>

              {/* Strong Headline with highlighted terms */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-[#F8FAFC] leading-snug">
                Electronics Engineer <span className="text-[#00A8FF]">|</span>{' '}
                <span className="text-[#00E5FF] text-glow-cyan font-bold">RTL Design</span> •{' '}
                <span className="text-[#00A8FF] text-glow font-bold">ASIC</span> •{' '}
                <span className="text-[#00E5FF] text-glow-cyan font-bold">FPGA</span> •{' '}
                <span className="text-[#00A8FF] text-glow font-bold">Verification</span>
              </h2>
            </div>

            {/* Strict Description from prompt */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-sans">
              Motivated Electronics and Communication Engineering student interested in{' '}
              <span className="text-white font-medium">Digital IC Design</span>,{' '}
              <span className="text-white font-medium">Verification</span>,{' '}
              <span className="text-white font-medium">ASIC flow</span>,{' '}
              <span className="text-white font-medium">PnR</span> and{' '}
              <span className="text-white font-medium">FPGA Design Flow</span>. Skilled in{' '}
              <span className="text-[#00E5FF] font-mono text-sm">Verilog HDL</span>,{' '}
              <span className="text-[#00E5FF] font-mono text-sm">SystemVerilog</span>,{' '}
              <span className="text-[#00E5FF] font-mono text-sm">C/C++</span>, and{' '}
              <span className="text-white font-medium">RTL verification concepts</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary View Projects */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00A8FF] to-[#00E5FF] text-[#030712] font-heading font-bold text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#030712]" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/Mahmoud-Abdelnasser111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#071426] border border-[#00A8FF]/40 text-[#F8FAFC] font-mono text-sm hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,168,255,0.3)] transition-all duration-300 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/mahmoud-abd-elnasser-7747a4377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#071426] border border-[#00A8FF]/40 text-[#F8FAFC] font-mono text-sm hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,168,255,0.3)] transition-all duration-300 cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4 text-[#00A8FF]" />
                <span>LinkedIn</span>
              </a>

              {/* CV Download */}
              <a
                href="https://drive.google.com/file/d/1Dkbit1KXxIDk_N4pS6ZpitpLBWdjtwTd/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#071426] border border-[#00E5FF]/40 text-[#00E5FF] font-mono text-sm hover:bg-[#00E5FF]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Requirement 31: Hero Status Panel */}
            <div className="pt-4">
              <div className="rounded-xl bg-[#05070D]/90 border border-[#00A8FF]/30 p-4 shadow-[0_4px_25px_rgba(0,168,255,0.08)] max-w-xl">
                <div className="flex items-center justify-between border-b border-[#00A8FF]/20 pb-2.5 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span className="text-white font-semibold tracking-wider">SYSTEM STATUS</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#00E5FF]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
                    <span>AVAILABLE FOR OPPORTUNITIES</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-2 rounded bg-[#071426]/70 border border-[#00A8FF]/15">
                    <span className="block text-[10px] text-[#94A3B8] uppercase">FOCUS</span>
                    <span className="text-[#00E5FF] font-semibold">Digital IC Design</span>
                  </div>
                  <div className="p-2 rounded bg-[#071426]/70 border border-[#00A8FF]/15">
                    <span className="block text-[10px] text-[#94A3B8] uppercase">SPECIALIZATION</span>
                    <span className="text-[#F8FAFC]">RTL / ASIC / FPGA / Verif</span>
                  </div>
                  <div className="p-2 rounded bg-[#071426]/70 border border-[#00A8FF]/15">
                    <span className="block text-[10px] text-[#94A3B8] uppercase">LOCATION</span>
                    <span className="text-[#F8FAFC]">Beni-Suef, Egypt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Identity + Portrait Frame (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            {/* Portrait Area Frame */}
            <div className="relative group">
              {/* Surrounding circuit bracket corners */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00E5FF]" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00E5FF]" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#00E5FF]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00E5FF]" />

              {/* Silicon Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-[400px] rounded-2xl bg-[#071426] border-2 border-[#00A8FF] p-2.5 shadow-[0_0_35px_rgba(0,168,255,0.3)] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_45px_rgba(0,229,255,0.4)] transition-all duration-500 overflow-hidden">
                {/* Circuit background inside frame */}
                <div className="absolute inset-0 circuit-grid-dense opacity-25 pointer-events-none" />

                {/* Profile image with error fallback */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-[#071426] via-[#05070D] to-[#030712] flex items-center justify-center border border-[#00A8FF]/30">
                  {!imgError ? (
                    <img
                      src="/main.png"
                      alt="Mahmoud Abdelnasser"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-[center_12%] filter contrast-105 group-hover:scale-102 transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(0,168,255,0.25)]"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="p-4 rounded-full bg-[#071426] border border-[#00A8FF]/50 text-[#00E5FF] mb-2 shadow-[0_0_15px_rgba(0,168,255,0.3)]">
                        <Cpu className="w-12 h-12" />
                      </div>
                      <span className="font-heading font-bold text-white text-sm">MAHMOUD ABDELNASSER</span>
                      <span className="font-mono text-[10px] text-[#00E5FF] mt-1 tracking-wider">[PORTRAIT_SLOT: /main.png]</span>
                      <span className="font-mono text-[9px] text-[#94A3B8] mt-1">Digital IC &amp; Verification Engineer</span>
                    </div>
                  )}

                  {/* High-tech overlay corner telemetry */}
                  <div className="absolute bottom-2 left-2 right-2 bg-[#030712]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#00A8FF]/30 flex items-center justify-between text-[10px] font-mono text-[#00E5FF] shadow-lg">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Radio className="w-3 h-3 text-[#00E5FF] animate-pulse" />
                      MAHMOUD.A // SILICON_ID
                    </span>
                    <span className="text-[#94A3B8]">VERIFIED_RTL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Microchip Architecture Diagram below portrait */}
            <div className="w-full max-w-sm">
              <ChipVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
