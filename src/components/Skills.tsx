import React from 'react';
import { Cpu, CheckCircle2, Code2 } from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>HARDWARE &amp; VERIFICATION CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Specialized competencies across digital logic architecture, sign-off verification, and automation.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => {
            const isVerification = category.title === 'Digital Verification';
            const isDesign = category.title === 'Digital Design';

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/25 hover:border-[#00E5FF] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,168,255,0.06)] transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[#00A8FF]/20 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#071426] border border-[#00A8FF]/30 text-[#00E5FF]">
                        {isDesign && <Cpu className="w-5 h-5 text-[#00E5FF]" />}
                        {isVerification && <CheckCircle2 className="w-5 h-5 text-[#00A8FF]" />}
                        {!isDesign && !isVerification && <Code2 className="w-5 h-5 text-[#1687FF]" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#00A8FF] tracking-widest uppercase">
                          {category.badge}
                        </span>
                        <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#00E5FF] transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#071426] text-[#94A3B8] border border-[#00A8FF]/20">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#071426]/70 border border-[#00A8FF]/20 hover:border-[#00E5FF] hover:bg-[#00A8FF]/10 text-xs font-mono text-white transition-all duration-200 cursor-default group/skill"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] group-hover/skill:bg-[#00E5FF] group-hover/skill:shadow-[0_0_6px_#00E5FF]" />
                        <span className="group-hover/skill:text-[#00E5FF]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-8 pt-4 border-t border-[#00A8FF]/15 flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
                  <span>SYNTHESIZABLE // CLEAN</span>
                  <span className="text-[#00E5FF]">PRODUCTION_READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
