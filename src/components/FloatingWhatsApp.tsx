import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#071426]/95 border border-[#00E5FF]/40 text-xs font-mono text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/201095678911"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group p-3.5 sm:p-4 rounded-2xl bg-[#071426] border-2 border-[#00E5FF]/50 text-[#00E5FF] hover:border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Direct WhatsApp Chat"
        title="Chat on WhatsApp (+20 1095678911)"
      >
        {/* Pulsing beacon ring */}
        <span className="absolute -inset-1 rounded-2xl bg-[#00E5FF]/20 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 text-[#00E5FF] group-hover:rotate-12 transition-transform" />

        {/* Small semiconductor pin decoration */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
      </a>
    </div>
  );
};
