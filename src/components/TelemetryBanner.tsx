import React from 'react';

const badges = [
  'SYSTEM_READY',
  'RTL_ACTIVE',
  'ASIC_FLOW',
  'FPGA_CORE',
  'VERIFICATION',
  'TIMING_ANALYSIS',
  'SYNTHESIS',
  'PPA_OPTIMIZED',
  'CDC_CHECKED',
  'UVM_COVERAGE',
  'SYSTEMVERILOG_SVA'
];

export const TelemetryBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#05070D]/90 border-y border-[#00A8FF]/20 py-2.5 overflow-hidden select-none">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 shrink-0">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_5px_#00E5FF]" />
              <span className="text-white/90 hover:text-[#00E5FF] transition-colors tracking-wider font-semibold">
                {badge}
              </span>
              <span className="text-[#00A8FF]/40 ml-4 font-mono">//</span>
            </div>
          ))}
        </div>
        {/* Repeated for continuous flow */}
        <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
          {badges.map((badge, idx) => (
            <div key={`rep-${idx}`} className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_5px_#00E5FF]" />
              <span className="text-white/90 hover:text-[#00E5FF] transition-colors tracking-wider font-semibold">
                {badge}
              </span>
              <span className="text-[#00A8FF]/40 ml-4 font-mono">//</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
