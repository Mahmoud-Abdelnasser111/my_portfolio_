import React from 'react';
import { Users, Network, Cpu } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Users className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>COMMUNITY LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Community &amp; Leadership
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Fostering the next generation of semiconductor and digital design talent.
          </p>
        </div>

        {/* Community Card with Visual Network Diagram */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/25 p-8 sm:p-10 shadow-[0_0_35px_rgba(0,168,255,0.06)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Community narrative (Col span 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF]">
                <Cpu className="w-4 h-4 text-[#00A8FF]" />
                <span>BENICHIPS // INITIATIVE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                Benichips Community
              </h3>

              <div className="p-4 rounded-xl bg-[#071426] border border-[#00A8FF]/30">
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans">
                  Instructor and contributor to the establishment of the first IC Design Community in Beni-Suef (<span className="text-[#00E5FF] font-semibold">Benichips</span>).
                </p>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                Dedicated to spreading VLSI, RTL design, and ASIC fundamentals among undergraduate peers through workshops, technical mentoring, and collaborative study groups.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-[#00E5FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  <span>Role: Instructor &amp; Contributor</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#94A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF]" />
                  <span>Region: Beni-Suef, Egypt</span>
                </div>
              </div>
            </div>

            {/* Right Column: Digital Community Network Diagram (Col span 5) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-[#030712] border border-[#00A8FF]/25 relative">
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#94A3B8] border-b border-[#00A8FF]/15 pb-2 mb-2">
                <span className="flex items-center gap-1.5 text-[#00E5FF]">
                  <Network className="w-3.5 h-3.5 text-[#00A8FF]" />
                  PEER_COLLAB_NET
                </span>
                <span>NODES: ACTIVE</span>
              </div>

              {/* Collaborative Network Nodes SVG */}
              <svg className="w-full h-48" viewBox="0 0 280 180" fill="none">
                {/* Connection lines */}
                <line x1="140" y1="90" x2="60" y2="45" stroke="#00A8FF" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="140" y1="90" x2="220" y2="45" stroke="#00A8FF" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="140" y1="90" x2="50" y2="135" stroke="#00A8FF" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="140" y1="90" x2="230" y2="135" stroke="#00A8FF" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="60" y1="45" x2="220" y2="45" stroke="#00E5FF" strokeWidth="0.8" opacity="0.4" />
                <line x1="50" y1="135" x2="230" y2="135" stroke="#00E5FF" strokeWidth="0.8" opacity="0.4" />

                {/* Central Node: Mahmoud / Instructor */}
                <circle cx="140" cy="90" r="24" fill="#071426" stroke="#00E5FF" strokeWidth="2" />
                <circle cx="140" cy="90" r="28" stroke="#00A8FF" strokeWidth="0.8" strokeDasharray="2 2" className="animate-spin" />
                <text x="140" y="87" textAnchor="middle" fill="#00E5FF" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">BENICHIPS</text>
                <text x="140" y="99" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="JetBrains Mono">LEAD</text>

                {/* Peer Nodes */}
                {/* Node 1 */}
                <circle cx="60" cy="45" r="15" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
                <text x="60" y="48" textAnchor="middle" fill="#F8FAFC" fontSize="7.5" fontFamily="JetBrains Mono">RTL</text>

                {/* Node 2 */}
                <circle cx="220" cy="45" r="15" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
                <text x="220" y="48" textAnchor="middle" fill="#F8FAFC" fontSize="7.5" fontFamily="JetBrains Mono">FPGA</text>

                {/* Node 3 */}
                <circle cx="50" cy="135" r="15" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
                <text x="50" y="138" textAnchor="middle" fill="#F8FAFC" fontSize="7.5" fontFamily="JetBrains Mono">VERIF</text>

                {/* Node 4 */}
                <circle cx="230" cy="135" r="15" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
                <text x="230" y="138" textAnchor="middle" fill="#F8FAFC" fontSize="7.5" fontFamily="JetBrains Mono">ASIC</text>
              </svg>

              <div className="w-full pt-2 border-t border-[#00A8FF]/15 text-center">
                <span className="text-[10px] font-mono text-[#00E5FF]">FIRST IC DESIGN COMMUNITY IN BENI-SUEF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
