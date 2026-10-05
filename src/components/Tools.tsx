import React from 'react';
import { Wrench, Terminal, Cpu, Play, Search, Binary, Code, Activity } from 'lucide-react';
import { toolsData } from '../data/skills';

const toolIconMap: Record<string, React.ReactNode> = {
  'Questa-Sim': <Play className="w-5 h-5 text-[#00E5FF]" />,
  'Questa-Formal': <Search className="w-5 h-5 text-[#00A8FF]" />,
  'Xilinx Vivado': <Cpu className="w-5 h-5 text-[#00E5FF]" />,
  'Intel Quartus': <Binary className="w-5 h-5 text-[#1687FF]" />,
  'MATLAB': <Activity className="w-5 h-5 text-[#00A8FF]" />,
  'Proteus': <Cpu className="w-5 h-5 text-[#00E5FF]" />,
  'C++': <Code className="w-5 h-5 text-[#1687FF]" />,
  'TCL Shell': <Terminal className="w-5 h-5 text-[#00E5FF]" />
};

export const Tools: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#05070D]/60 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>EDA &amp; SIMULATION SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Industry-standard EDA suites, simulation kernels, formal verifiers, and synthesis toolchains.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolsData.map((tool, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#030712] border border-[#00A8FF]/25 hover:border-[#00E5FF] p-5 flex flex-col justify-between shadow-[0_2px_20px_rgba(0,168,255,0.05)] hover:shadow-[0_0_25px_rgba(0,229,255,0.18)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#071426] border border-[#00A8FF]/30 group-hover:scale-105 transition-transform">
                    {toolIconMap[tool.name] || <Terminal className="w-5 h-5 text-[#00E5FF]" />}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-[#071426] text-[#00E5FF] border border-[#00A8FF]/25">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors mb-1">
                  {tool.name}
                </h3>
                <span className="text-[11px] font-mono text-[#00A8FF] block mb-2">
                  {tool.category}
                </span>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#00A8FF]/15 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                <span>STATUS: ACTIVE</span>
                <span className="text-[#00E5FF]">READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
