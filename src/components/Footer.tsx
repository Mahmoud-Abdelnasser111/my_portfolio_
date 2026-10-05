import React from 'react';
import { Cpu, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-[#00A8FF]/20 py-12 overflow-hidden">
      {/* Background circuit grid */}
      <div className="absolute inset-0 circuit-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#00A8FF]/15">
          {/* Brand & Specialty */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-[#00E5FF]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wide">
                Mahmoud Abdelnasser
              </span>
            </div>
            <p className="font-mono text-xs text-[#00E5FF]">
              Digital IC Design • RTL • ASIC • FPGA • Verification
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mahmoud-Abdelnasser111"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#071426] border border-[#00A8FF]/30 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-abd-elnasser-7747a4377"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#071426] border border-[#00A8FF]/30 text-[#94A3B8] hover:text-[#00A8FF] hover:border-[#00E5FF] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:mahmoudfarragsif1@gmail.com"
              className="p-2.5 rounded-xl bg-[#071426] border border-[#00A8FF]/30 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Scroll to Top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#071426] border border-[#00A8FF]/30 text-[#94A3B8] hover:text-white hover:border-[#00E5FF] transition-all cursor-pointer ml-2"
              aria-label="Scroll back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Technical telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8] text-center sm:text-left">
          <p>© 2026 Mahmoud Abdelnasser. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
            <span className="text-[#00A8FF]">SYSTEM_STATUS: NOMINAL</span>
            <span>|</span>
            <span className="text-white">BENI-SUEF, EGYPT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
