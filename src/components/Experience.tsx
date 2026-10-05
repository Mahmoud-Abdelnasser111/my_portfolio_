import React from 'react';
import { Cpu, Calendar, Users, Briefcase, Terminal } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>PRACTICAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Hands-on engineering in FPGA prototyping, ASIC physical design flow, and RTL architecture.
          </p>
        </div>

        {/* Vertical Engineering Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing PCB Signal Trace */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#00A8FF] to-transparent shadow-[0_0_8px_#00A8FF]" />

          <div className="space-y-12">
            {experienceData.map((item) => (
              <div key={item.id} className="relative flex items-start gap-6 sm:gap-10">
                {/* Node Icon on Timeline */}
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#071426] border-2 border-[#00E5FF] p-2 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.4)] group">
                  <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E5FF]" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00A8FF] animate-pulse" />
                </div>

                {/* Card Content */}
                <div className="flex-1 rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/25 hover:border-[#00E5FF] p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,168,255,0.06)] transition-all duration-300 group">
                  {/* Top Bar with Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#00A8FF]/20 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#071426] text-[#00E5FF] border border-[#00A8FF]/30 font-semibold">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-[#94A3B8]">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors mt-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-sans text-white/90 font-medium">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 font-mono text-xs text-[#94A3B8]">
                      <div className="flex items-center gap-1.5 text-[#00E5FF]">
                        <Calendar className="w-3.5 h-3.5 text-[#00A8FF]" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                        <Users className="w-3.5 h-3.5 text-[#00E5FF]" />
                        <span>{item.mentors}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points strictly adhering to provided data */}
                  <div className="space-y-3 font-sans text-sm text-[#94A3B8] leading-relaxed">
                    {item.content.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0 shadow-[0_0_6px_#00E5FF]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Footer tag */}
                  <div className="mt-6 pt-4 border-t border-[#00A8FF]/15 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-[#00A8FF]" />
                      <span>EDA_WORKFLOW // VALIDATED</span>
                    </div>
                    <span className="text-[#00E5FF] font-semibold">SUCCESS // 100%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
