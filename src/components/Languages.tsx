import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';

export const Languages: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#05070D]/40 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-8 text-center">
            <LanguagesIcon className="w-5 h-5 text-[#00E5FF]" />
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide">
              Languages
            </h2>
          </div>

          {/* Minimal Language Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Arabic */}
            <div className="rounded-xl bg-[#071426]/70 border border-[#00A8FF]/30 p-5 flex items-center justify-between hover:border-[#00E5FF] transition-colors shadow-[0_0_20px_rgba(0,168,255,0.05)]">
              <div>
                <span className="text-[10px] font-mono text-[#00A8FF] uppercase tracking-wider block">
                  PRIMARY
                </span>
                <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                  Arabic
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#030712] border border-[#00E5FF]/40 text-xs font-mono text-[#00E5FF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Native</span>
              </div>
            </div>

            {/* English */}
            <div className="rounded-xl bg-[#071426]/70 border border-[#00A8FF]/30 p-5 flex items-center justify-between hover:border-[#00E5FF] transition-colors shadow-[0_0_20px_rgba(0,168,255,0.05)]">
              <div>
                <span className="text-[10px] font-mono text-[#00A8FF] uppercase tracking-wider block">
                  TECHNICAL &amp; PROFESSIONAL
                </span>
                <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                  English
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#030712] border border-[#00A8FF]/40 text-xs font-mono text-[#00A8FF]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Very Good</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
