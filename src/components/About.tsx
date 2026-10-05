import React from 'react';
import { Cpu, Layers, CheckCircle2, Binary, Activity, Sparkles, Terminal } from 'lucide-react';

interface DomainCard {
  title: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  subfields: string[];
}

const domainCards: DomainCard[] = [
  {
    title: 'RTL Design',
    badge: 'FRONTEND_LOGIC',
    icon: <Binary className="w-6 h-6 text-[#00E5FF]" />,
    description:
      'Translating digital specifications into synthesizable, timing-clean Register-Transfer Level (RTL) architectures using Verilog HDL and SystemVerilog.',
    subfields: ['Modular Datapath', 'FSM State Encoding', 'Parameterized Blocks', 'Low Power RTL']
  },
  {
    title: 'ASIC Flow & PnR',
    badge: 'SILICON_BACKEND',
    icon: <Layers className="w-6 h-6 text-[#00A8FF]" />,
    description:
      'Executing complete ASIC design flow from logic synthesis and Static Timing Analysis (STA) through Floorplanning, Placement, CTS, and Sign-off using standard cell libraries.',
    subfields: ['Logic Synthesis', 'STA & Constraints', 'Floorplan & PnR', 'Clock Tree Synthesis']
  },
  {
    title: 'FPGA Prototyping',
    badge: 'HARDWARE_EMU',
    icon: <Cpu className="w-6 h-6 text-[#00E5FF]" />,
    description:
      'Targeting reconfigurable architectures with Xilinx Vivado and Intel Quartus. Prototyping on Intel Cyclone FPGA and ZedBoard with hardware/software co-design.',
    subfields: ['Xilinx Vivado', 'Intel Cyclone FPGA', 'ZedBoard SoC', 'Timing Closure']
  },
  {
    title: 'Digital Verification',
    badge: 'SIGN_OFF_VERIF',
    icon: <CheckCircle2 className="w-6 h-6 text-[#00A8FF]" />,
    description:
      'Building robust verification testbenches with SystemVerilog Assertions (SVA) and UVM architecture to achieve 100% functional and code coverage with 0 silicon bugs.',
    subfields: ['UVM Testbenches', 'Constrained Random', 'SVA Assertions', 'Functional Coverage']
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Engineering the logic behind digital systems.
          </p>
        </div>

        {/* Narrative & Focus Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/25 p-6 sm:p-8 shadow-[0_0_30px_rgba(0,168,255,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cpu className="w-32 h-32 text-[#00A8FF]" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF] mb-4">
              <Terminal className="w-4 h-4" />
              <span>PROFILE_OVERVIEW // SPEC_SHEET</span>
            </div>

            <div className="space-y-4 text-[#94A3B8] leading-relaxed text-sm sm:text-base">
              <p>
                I am an <span className="text-white font-semibold">Electronics and Communication Engineering</span> student dedicated to mastering the complete digital hardware lifecycle. My focus bridges architectural specification, synthesizable RTL modeling, and deep functional verification.
              </p>
              <p>
                Deeply invested in <span className="text-[#00E5FF] font-medium">Digital IC Design</span>, <span className="text-[#00E5FF] font-medium">RTL Design</span>, <span className="text-[#00E5FF] font-medium">ASIC flow</span>, <span className="text-[#00E5FF] font-medium">Physical Design (PnR)</span>, and <span className="text-[#00E5FF] font-medium">FPGA Design</span>. I strive to design logic architectures optimized for Performance, Power, and Area (PPA).
              </p>
              <p>
                Skilled in <span className="text-white font-medium">Verilog HDL</span> and <span className="text-white font-medium">SystemVerilog</span>, familiar with <span className="text-white font-medium">C/C++</span>, and proficient in <span className="text-white font-medium">RTL verification concepts</span> including assertion-based verification, constrained-random stimulus, and UVM methodologies.
              </p>
            </div>

            {/* Quick Specs Table */}
            <div className="mt-8 pt-6 border-t border-[#00A8FF]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="block text-[#94A3B8] text-[10px] uppercase">Major</span>
                <span className="text-white font-medium">Electronics &amp; Comm.</span>
              </div>
              <div>
                <span className="block text-[#94A3B8] text-[10px] uppercase">RTL Languages</span>
                <span className="text-[#00E5FF] font-medium">Verilog, SystemVerilog</span>
              </div>
              <div>
                <span className="block text-[#94A3B8] text-[10px] uppercase">Programming</span>
                <span className="text-white font-medium">C / C++</span>
              </div>
              <div>
                <span className="block text-[#94A3B8] text-[10px] uppercase">Verification</span>
                <span className="text-[#00E5FF] font-medium">SVA &amp; UVM Concepts</span>
              </div>
              <div>
                <span className="block text-[#94A3B8] text-[10px] uppercase">Implementation</span>
                <span className="text-white font-medium">ASIC Flow &amp; FPGA</span>
              </div>
              <div>
                <span className="block text-[#94A3B8] text-[10px] uppercase">Location</span>
                <span className="text-[#00A8FF] font-medium">Beni-Suef, Egypt</span>
              </div>
            </div>
          </div>

          {/* Interests & Engineering Pillars Checklist */}
          <div className="lg:col-span-5 rounded-2xl bg-[#071426]/60 border border-[#00A8FF]/25 p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#00A8FF]/20 mb-4">
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider uppercase flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  CORE INTEREST AREAS
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]">06 PILLARS</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: 'Digital IC Design', tag: 'ARCH' },
                  { label: 'RTL Design & Datapath Modeling', tag: 'RTL' },
                  { label: 'ASIC Design Flow & Synthesis', tag: 'SYNTH' },
                  { label: 'Physical Design & Place-and-Route (PnR)', tag: 'PnR' },
                  { label: 'FPGA Design & Prototyping', tag: 'FPGA' },
                  { label: 'Digital Verification & SVA / UVM', tag: 'VERIF' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#030712]/70 border border-[#00A8FF]/20 hover:border-[#00E5FF]/60 hover:bg-[#00A8FF]/5 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                      <span className="text-white text-xs">{item.label}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#071426] border border-[#00A8FF]/30 text-[#00A8FF]">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#00A8FF]/20 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
              <span>STATUS: HARDWARE_FOCUSED</span>
              <span className="text-[#00E5FF]">READY // 2026</span>
            </div>
          </div>
        </div>

        {/* 4 Visual Domain Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainCards.map((domain, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#05070D]/90 border border-[#00A8FF]/25 p-5 hover:border-[#00E5FF] hover:shadow-[0_0_25px_rgba(0,168,255,0.2)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A8FF]/40 to-transparent group-hover:via-[#00E5FF] transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-[#00E5FF] group-hover:scale-110 transition-transform">
                    {domain.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-[#071426] text-[#00E5FF] border border-[#00A8FF]/25">
                    {domain.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors mb-2">
                  {domain.title}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {domain.description}
                </p>
              </div>

              {/* Subfields list */}
              <div className="pt-3 border-t border-[#00A8FF]/15 space-y-1.5">
                {domain.subfields.map((field, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-[10px] font-mono text-[#94A3B8]">
                    <span className="w-1 h-1 rounded-full bg-[#00A8FF]" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
