import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Layers } from 'lucide-react';

export const ChipVisualization: React.FC = () => {
  const [clockTick, setClockTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClockTick((prev) => (prev + 1) % 100);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Outer ambient glow */}
      <div className="absolute inset-8 rounded-2xl bg-[#00A8FF]/10 blur-3xl -z-10" />

      {/* Main Container / Silicon Carrier Board */}
      <div className="relative w-full h-full rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/30 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(0,168,255,0.15)] overflow-hidden">
        {/* Silicon PCB Texture & Grid */}
        <div className="absolute inset-0 circuit-grid-dense opacity-25 pointer-events-none" />

        {/* Top Header telemetry */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#00A8FF]/20 pb-3 font-mono text-[11px]">
          <div className="flex items-center gap-2 text-[#00E5FF]">
            <Cpu className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span className="tracking-wider">DIE_CORE: RV32I_ASIC_v2.4</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            <span className="text-[#94A3B8]">CLK: 250 MHz</span>
          </div>
        </div>

        {/* Central Die & Interconnect Architecture SVG */}
        <div className="relative z-10 my-auto py-2 flex items-center justify-center">
          <svg
            className="w-full h-auto max-h-[300px]"
            viewBox="0 0 380 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="dieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#071426" />
                <stop offset="100%" stopColor="#030712" />
              </linearGradient>
              <linearGradient id="neonGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00A8FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
                <stop offset="100%" stopColor="#00A8FF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Chip boundary with solder pads/pins */}
            {/* Left pins */}
            {[-3, -2, -1, 0, 1, 2, 3].map((i) => {
              const y = 140 + i * 24;
              const active = (clockTick + i) % 3 === 0;
              return (
                <g key={`pin-l-${i}`}>
                  <line x1="20" y1={y} x2="55" y2={y} stroke={active ? '#00E5FF' : '#00A8FF'} strokeWidth="1.5" strokeOpacity={active ? 1 : 0.4} />
                  <rect x="15" y={y - 3} width="8" height="6" rx="1" fill={active ? '#00E5FF' : '#071426'} stroke="#00A8FF" strokeWidth="1" />
                </g>
              );
            })}

            {/* Right pins */}
            {[-3, -2, -1, 0, 1, 2, 3].map((i) => {
              const y = 140 + i * 24;
              const active = (clockTick - i) % 4 === 0;
              return (
                <g key={`pin-r-${i}`}>
                  <line x1="325" y1={y} x2="360" y2={y} stroke={active ? '#00E5FF' : '#00A8FF'} strokeWidth="1.5" strokeOpacity={active ? 1 : 0.4} />
                  <rect x="357" y={y - 3} width="8" height="6" rx="1" fill={active ? '#00E5FF' : '#071426'} stroke="#00A8FF" strokeWidth="1" />
                </g>
              );
            })}

            {/* Silicon Die Outline */}
            <rect
              x="55"
              y="30"
              width="270"
              height="220"
              rx="12"
              fill="url(#dieGrad)"
              stroke="#00A8FF"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />
            {/* Silicon inner border glow */}
            <rect
              x="62"
              y="37"
              width="256"
              height="206"
              rx="8"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.8"
              strokeOpacity="0.3"
            />

            {/* Internal RTL Sub-blocks */}
            {/* Block 1: ALU / Datapath */}
            <g transform="translate(75, 48)">
              <rect width="105" height="52" rx="5" fill="#030712" stroke="#00A8FF" strokeWidth="1.2" />
              <text x="10" y="22" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">ALU_CORE</text>
              <text x="10" y="38" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">32-BIT ARITH</text>
              <circle cx="92" cy="18" r="3" fill="#00E5FF" />
            </g>

            {/* Block 2: Control FSM */}
            <g transform="translate(195, 48)">
              <rect width="115" height="52" rx="5" fill="#030712" stroke="#00A8FF" strokeWidth="1.2" />
              <text x="10" y="22" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">CONTROL_FSM</text>
              <text x="10" y="38" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">DECODER / IMM</text>
              <circle cx="102" cy="18" r="3" fill={clockTick % 2 === 0 ? '#00E5FF' : '#00A8FF'} />
            </g>

            {/* Block 3: Register File */}
            <g transform="translate(75, 114)">
              <rect width="105" height="60" rx="5" fill="#030712" stroke="#00A8FF" strokeWidth="1.2" />
              <text x="10" y="24" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">REG_FILE</text>
              <text x="10" y="40" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">32 x 32-bit x0-x31</text>
              <text x="10" y="52" fill="#00A8FF" fontSize="7" fontFamily="JetBrains Mono">DUAL-READ / WR</text>
            </g>

            {/* Block 4: CDC & FIFO Manager */}
            <g transform="translate(195, 114)">
              <rect width="115" height="60" rx="5" fill="#030712" stroke="#00A8FF" strokeWidth="1.2" />
              <text x="10" y="24" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">CDC_SYNC // FIFO</text>
              <text x="10" y="40" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">GRAY-POINTER</text>
              <text x="10" y="52" fill="#00A8FF" fontSize="7" fontFamily="JetBrains Mono">2-FLOP SYNCHRONIZER</text>
            </g>

            {/* Interconnect Bus Lines */}
            <path
              d="M128,100 L128,114 M252,100 L252,114 M180,74 L195,74 M180,144 L195,144"
              stroke="#00E5FF"
              strokeWidth="1.5"
            />

            {/* Lower Waveform / Physical Design Layer */}
            <g transform="translate(75, 186)">
              <rect width="235" height="50" rx="5" fill="#030712" stroke="#00A8FF" strokeWidth="1" strokeDasharray="3 3" />
              <text x="10" y="16" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">TIMING CLOSURE &amp; STA (SETUP/HOLD SLACK: +0.34ns)</text>
              
              {/* Digital Waveform lines inside chip */}
              <path
                d={`M10,32 L25,32 L25,24 L45,24 L45,32 L65,32 L65,24 L85,24 L85,32 L105,32 L105,24 L125,24 L125,32 L145,32 L145,24 L165,24 L165,32 L185,32 L185,24 L205,24 L205,32 L225,32`}
                fill="none"
                stroke="#00E5FF"
                strokeWidth="1.5"
              />
              <path
                d="M10,42 L55,42 L65,36 L130,36 L140,42 L225,42"
                fill="none"
                stroke="#1687FF"
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />
            </g>
          </svg>
        </div>

        {/* Bottom Signal Telemetry Footer */}
        <div className="relative z-10 pt-3 border-t border-[#00A8FF]/20 flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#00E5FF]" />
            <span>PPA OPTIMIZED: SAED 90nm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00A8FF]">WNS: 0.00ns</span>
            <span className="text-[#00E5FF]">TNS: 0.00ns</span>
            <Layers className="w-3 h-3 text-[#00E5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};
