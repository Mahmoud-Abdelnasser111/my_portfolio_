import React, { useState } from 'react';
import { Layers, Activity, Cpu } from 'lucide-react';

interface AsicStage {
  step: string;
  name: string;
  toolExample: string;
  description: string;
  detail: string;
}

const asicStages: AsicStage[] = [
  {
    step: '01',
    name: 'RTL',
    toolExample: 'Verilog / SV',
    description: 'Hardware description model',
    detail: 'Modular synthesizable Verilog HDL / SystemVerilog behavioral & structural code.'
  },
  {
    step: '02',
    name: 'Synthesis',
    toolExample: 'Design Compiler',
    description: 'Gate-level translation',
    detail: 'Mapping RTL code to targeted technology standard cells (e.g. SAED 90nm).'
  },
  {
    step: '03',
    name: 'STA',
    toolExample: 'PrimeTime',
    description: 'Static Timing Analysis',
    detail: 'Verifying setup/hold slack, clock constraints (SDC), and timing path closure.'
  },
  {
    step: '04',
    name: 'Floorplan',
    toolExample: 'ICC2 / Innovus',
    description: 'Die sizing & I/O pad ring',
    detail: 'Die area allocation, aspect ratio, power grid (VDD/VSS rings), and macro placement.'
  },
  {
    step: '05',
    name: 'Placement',
    toolExample: 'Standard Cell Place',
    description: 'Optimal standard cell sites',
    detail: 'Congestion-driven, timing-driven standard cell placement with legalizing buffers.'
  },
  {
    step: '06',
    name: 'CTS',
    toolExample: 'Clock Tree Synthesis',
    description: 'Minimizing skew & latency',
    detail: 'Clock buffer tree insertion ensuring uniform arrival time and minimal insertion delay.'
  },
  {
    step: '07',
    name: 'Routing',
    toolExample: 'Detail / Global Route',
    description: 'Metal layer interconnects',
    detail: 'Interconnecting all signal nets through multiple metal layers without DRC violations.'
  },
  {
    step: '08',
    name: 'Sign-off',
    toolExample: 'DRC / LVS / Tapeout',
    description: 'Physical & electrical sign-off',
    detail: 'DRC, LVS, antenna checks, RC parasitic extraction, and final GDSII generation.'
  }
];

export const AsicFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="relative py-20 bg-[#05070D]/80 border-y border-[#00A8FF]/20 overflow-hidden">
      {/* Background Silicon grid pattern */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>SEMICONDUCTOR PHYSICAL FLOW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-wide uppercase">
            ASIC DESIGN FLOW
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-2 font-mono">
            RTL → Synthesis → STA → Floorplan → Placement → CTS → Routing → Sign-off
          </p>
        </div>

        {/* Horizontal Pipeline on Desktop / Scrollable on Mobile */}
        <div className="relative overflow-x-auto pb-4 pt-2 scrollbar-thin">
          <div className="min-w-[850px] lg:min-w-0 flex items-center justify-between relative px-2">
            {/* Animated Connection Line behind nodes */}
            <div className="absolute top-[28px] left-6 right-6 h-[2px] bg-[#071426] -z-0">
              <div className="h-full bg-gradient-to-r from-[#00A8FF] via-[#00E5FF] to-[#1687FF] opacity-70" />
            </div>

            {asicStages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col items-center cursor-pointer group z-10 flex-1 px-1"
                >
                  {/* Node Circle */}
                  <div
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#071426] border-2 border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.6)] scale-110'
                        : 'bg-[#030712] border border-[#00A8FF]/40 hover:border-[#00E5FF] group-hover:scale-105'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-[#00E5FF]' : 'text-white group-hover:text-[#00A8FF]'
                      }`}
                    >
                      {stage.step}
                    </span>

                    {/* Small ping for active stage */}
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
                    )}
                  </div>

                  {/* Node Label */}
                  <div className="mt-3 text-center">
                    <span
                      className={`block font-heading text-xs font-bold tracking-wider uppercase transition-colors ${
                        isSelected ? 'text-[#00E5FF]' : 'text-white group-hover:text-[#00A8FF]'
                      }`}
                    >
                      {stage.name}
                    </span>
                    <span className="block text-[9px] font-mono text-[#94A3B8] mt-0.5 max-w-[80px] truncate">
                      {stage.toolExample}
                    </span>
                  </div>

                  {/* Down arrow marker if selected */}
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#00E5FF] mt-2 shadow-[0_0_6px_#00E5FF]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-8 rounded-xl bg-[#071426]/90 border border-[#00A8FF]/40 p-5 sm:p-6 shadow-[0_0_30px_rgba(0,168,255,0.12)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#00A8FF]/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#030712] border border-[#00E5FF]/40 text-[#00E5FF]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#00A8FF] tracking-widest uppercase">
                  STAGE {asicStages[activeStage].step} OF 08
                </span>
                <h3 className="font-heading font-bold text-xl text-white">
                  {asicStages[activeStage].name} — {asicStages[activeStage].description}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#94A3B8]">Domain:</span>
              <span className="px-2.5 py-1 rounded bg-[#030712] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF]">
                {asicStages[activeStage].toolExample}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
            <p className="text-sm font-sans text-white/90">
              {asicStages[activeStage].detail}
            </p>
            <div className="flex items-center gap-2 text-[#00E5FF] text-[11px] shrink-0">
              <Activity className="w-3.5 h-3.5" />
              <span>PPA CONSTRAINTS SIGNED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
