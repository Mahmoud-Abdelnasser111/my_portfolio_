import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Rigorous undergraduate studies in Electronics &amp; Electrical Communication Engineering.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/30 p-8 sm:p-10 shadow-[0_0_35px_rgba(0,168,255,0.08)] relative overflow-hidden group">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A8FF] via-[#00E5FF] to-[#1687FF]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Institution & Degree (Col span 7) */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF]">
                <BookOpen className="w-4 h-4 text-[#00A8FF]" />
                <span>UNDERGRADUATE DEGREE PROGRAM</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  Beni-Suef University
                </h3>
                <p className="text-lg text-[#00A8FF] font-semibold mt-1">
                  Faculty of Engineering
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#071426] border border-[#00A8FF]/20 text-sm font-sans text-white/90">
                <span className="font-semibold text-white">Degree:</span> B.Sc. in Electronics and Electrical Communication Engineering
              </div>

              <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#94A3B8] pt-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#00E5FF]" />
                  <span>October 2023 – July 2028</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00A8FF]" />
                  <span>Beni-Suef, Egypt</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Cumulative Grade Badge (Col span 5) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#071426]/90 border border-[#00E5FF]/40 shadow-[0_0_30px_rgba(0,229,255,0.15)] text-center relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#00E5FF]/10 rounded-full blur-xl pointer-events-none" />

              <Award className="w-10 h-10 text-[#00E5FF] mb-3 animate-pulse" />

              <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-widest">
                CUMULATIVE GRADE
              </span>

              {/* Prominent 83.6% — Very Good */}
              <div className="my-2">
                <span className="text-4xl sm:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-white to-[#00A8FF] tracking-tight">
                  83.6%
                </span>
                <span className="block text-base font-heading font-bold text-[#00E5FF] mt-1 tracking-wider uppercase">
                  Very Good
                </span>
              </div>

              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030712] border border-[#00A8FF]/30 text-[11px] font-mono text-[#94A3B8]">
                <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>OFFICIAL ACADEMIC STANDING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
