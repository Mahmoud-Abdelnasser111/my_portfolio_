import React from 'react';

interface DiagramProps {
  type: 'css-phy' | 'riscv' | 'spi' | 'sync-fifo' | 'async-fifo' | 'dsp48a1';
}

export const ProjectDiagram: React.FC<DiagramProps> = ({ type }) => {
  switch (type) {
    case 'css-phy':
      return (
        <div className="w-full bg-[#030712] rounded-xl p-3 border border-[#00A8FF]/20 overflow-hidden relative">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00E5FF] mb-2 border-b border-[#00A8FF]/15 pb-1">
            <span>TX_DATAPATH_PIPELINE</span>
            <span className="text-[#94A3B8]">SAED_90nm // QuestaSim</span>
          </div>
          <svg className="w-full h-24" viewBox="0 0 460 90" fill="none">
            {/* Pipeline boxes */}
            {[
              { label: 'Payload', x: 10, w: 68 },
              { label: 'Framing', x: 96, w: 68 },
              { label: 'Mapping', x: 182, w: 68 },
              { label: 'Modulation', x: 268, w: 78 },
              { label: 'TX Samples', x: 364, w: 86 }
            ].map((box, i) => (
              <g key={i}>
                <rect
                  x={box.x}
                  y="12"
                  width={box.w}
                  height="34"
                  rx="5"
                  fill="#071426"
                  stroke={i === 4 ? '#00E5FF' : '#00A8FF'}
                  strokeWidth="1.2"
                />
                <text
                  x={box.x + box.w / 2}
                  y="33"
                  textAnchor="middle"
                  fill="#F8FAFC"
                  fontSize="9.5"
                  fontFamily="JetBrains Mono"
                  fontWeight="600"
                >
                  {box.label}
                </text>
                {/* Arrow */}
                {i < 4 && (
                  <path
                    d={`M${box.x + box.w + 2},29 L${box.x + box.w + 14},29 M${box.x + box.w + 10},25 L${box.x + box.w + 15},29 L${box.x + box.w + 10},33`}
                    stroke="#00E5FF"
                    strokeWidth="1.2"
                  />
                )}
              </g>
            ))}

            {/* Simulated Animated Waveform along the bottom */}
            <path
              d="M10,72 L45,72 L50,58 L75,58 L80,72 L115,72 L120,58 L145,58 L150,72 L185,72 L190,58 L215,58 L220,72 L255,72 L260,58 L285,58 L290,72 L325,72 L330,58 L355,58 L360,72 L395,72 L400,58 L425,58 L430,72 L450,72"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="1.5"
            />
            {/* Chirp / Sine trace */}
            <path
              d="M10,78 Q25,85 40,78 T70,78 T100,78 T130,78 T160,78 T190,78 T220,78 T250,78 T280,78 T310,78 T340,78 T370,78 T400,78 T430,78 T450,78"
              fill="none"
              stroke="#1687FF"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
          </svg>
        </div>
      );

    case 'riscv':
      return (
        <div className="w-full bg-[#030712] rounded-xl p-3 border border-[#00A8FF]/20 overflow-hidden relative">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00E5FF] mb-2 border-b border-[#00A8FF]/15 pb-1">
            <span>RV32I_SINGLE_CYCLE_ARCH</span>
            <span className="text-[#94A3B8]">PC → IMEM → REG → ALU → DMEM</span>
          </div>
          <svg className="w-full h-24" viewBox="0 0 460 90" fill="none">
            {/* Architecture Blocks */}
            {[
              { label: 'PC', x: 10, w: 45, fill: '#071426' },
              { label: 'Instr Mem', x: 68, w: 72, fill: '#071426' },
              { label: 'Control', x: 152, w: 65, fill: '#05070D' },
              { label: 'Reg File', x: 228, w: 68, fill: '#071426' },
              { label: 'ALU', x: 308, w: 55, fill: '#071426' },
              { label: 'Data Mem', x: 375, w: 75, fill: '#071426' }
            ].map((block, i) => (
              <g key={i}>
                <rect
                  x={block.x}
                  y="16"
                  width={block.w}
                  height="34"
                  rx="4"
                  fill={block.fill}
                  stroke="#00A8FF"
                  strokeWidth="1.2"
                />
                <text
                  x={block.x + block.w / 2}
                  y="37"
                  textAnchor="middle"
                  fill="#00E5FF"
                  fontSize="9.5"
                  fontFamily="JetBrains Mono"
                  fontWeight="600"
                >
                  {block.label}
                </text>
              </g>
            ))}

            {/* Glowing bus connection lines */}
            <path
              d="M55,33 L68,33 M140,33 L152,33 M217,33 L228,33 M296,33 L308,33 M363,33 L375,33"
              stroke="#00E5FF"
              strokeWidth="1.5"
            />
            {/* Feedback / Branch path */}
            <path
              d="M410,50 L410,72 L32,72 L32,50"
              stroke="#1687FF"
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />
            <text x="220" y="80" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">
              BRANCH_TAKEN // WRITE-BACK BUS
            </text>
          </svg>
        </div>
      );

    case 'spi':
      return (
        <div className="w-full bg-[#030712] rounded-xl p-3 border border-[#00A8FF]/20 overflow-hidden relative">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00E5FF] mb-2 border-b border-[#00A8FF]/15 pb-1">
            <span>SPI_PROTOCOL_WRAPPER</span>
            <span className="text-[#94A3B8]">SCLK / MOSI / MISO / SS_N</span>
          </div>
          <svg className="w-full h-24" viewBox="0 0 460 90" fill="none">
            {/* SPI Master / Bus */}
            <rect x="15" y="16" width="95" height="52" rx="5" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="62" y="38" textAnchor="middle" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">SPI BUS</text>
            <text x="62" y="54" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">4-WIRE</text>

            {/* SPI Slave Wrapper */}
            <rect x="165" y="16" width="130" height="52" rx="5" fill="#071426" stroke="#00E5FF" strokeWidth="1.5" />
            <text x="230" y="38" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">SLAVE WRAPPER</text>
            <text x="230" y="54" textAnchor="middle" fill="#00A8FF" fontSize="8" fontFamily="JetBrains Mono">FSM &amp; SHIFT REG</text>

            {/* Single Port Synchronous RAM */}
            <rect x="345" y="16" width="100" height="52" rx="5" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="395" y="38" textAnchor="middle" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">SYNC RAM</text>
            <text x="395" y="54" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">SINGLE-PORT</text>

            {/* Signal interconnects */}
            <line x1="110" y1="32" x2="165" y2="32" stroke="#00E5FF" strokeWidth="1.5" />
            <line x1="110" y1="50" x2="165" y2="50" stroke="#00A8FF" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="295" y1="32" x2="345" y2="32" stroke="#00E5FF" strokeWidth="1.5" />
            <line x1="295" y1="50" x2="345" y2="50" stroke="#00A8FF" strokeWidth="1.2" />

            <text x="137" y="27" textAnchor="middle" fill="#00E5FF" fontSize="7" fontFamily="JetBrains Mono">MOSI/SS</text>
            <text x="320" y="27" textAnchor="middle" fill="#00E5FF" fontSize="7" fontFamily="JetBrains Mono">ADDR/DATA</text>
          </svg>
        </div>
      );

    case 'sync-fifo':
      return (
        <div className="w-full bg-[#030712] rounded-xl p-3 border border-[#00A8FF]/20 overflow-hidden relative">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00E5FF] mb-2 border-b border-[#00A8FF]/15 pb-1">
            <span>SYNCHRONOUS_FIFO_UVM</span>
            <span className="text-[#94A3B8]">SVA BOUNDARY MONITORS</span>
          </div>
          <svg className="w-full h-24" viewBox="0 0 460 90" fill="none">
            {/* WRITE STAGE */}
            <rect x="15" y="16" width="90" height="52" rx="5" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="60" y="38" textAnchor="middle" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">WRITE LOGIC</text>
            <text x="60" y="52" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">WR_EN / DATA_IN</text>

            {/* FIFO BUFFER ARRAY */}
            <rect x="160" y="12" width="140" height="60" rx="6" fill="#05070D" stroke="#00E5FF" strokeWidth="1.5" />
            <text x="230" y="34" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">FIFO BUFFER ARRAY</text>
            {/* Memory cells */}
            <g transform="translate(170, 42)">
              {[0, 1, 2, 3, 4, 5].map((c) => (
                <rect key={c} x={c * 20} y="0" width="16" height="20" rx="2" fill={c < 3 ? '#00A8FF' : '#071426'} stroke="#00E5FF" strokeWidth="0.8" opacity={c < 3 ? 0.7 : 0.4} />
              ))}
            </g>

            {/* READ STAGE */}
            <rect x="355" y="16" width="90" height="52" rx="5" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="400" y="38" textAnchor="middle" fill="#00E5FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">READ LOGIC</text>
            <text x="400" y="52" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">RD_EN / DATA_OUT</text>

            {/* Pointers / Status flags */}
            <path d="M105,42 L160,42" stroke="#00E5FF" strokeWidth="1.5" />
            <path d="M300,42 L355,42" stroke="#00E5FF" strokeWidth="1.5" />
            <text x="230" y="82" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">FULL = 0 | EMPTY = 0 | SVA: PASS</text>
          </svg>
        </div>
      );

    case 'async-fifo':
      return (
        <div className="w-full bg-[#030712] rounded-xl p-3 border border-[#00A8FF]/20 overflow-hidden relative">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00E5FF] mb-2 border-b border-[#00A8FF]/15 pb-1">
            <span>CDC_DUAL_CLOCK_DOMAINS</span>
            <span className="text-[#94A3B8]">WCLK ≠ RCLK // GRAY POINTER</span>
          </div>
          <svg className="w-full h-24" viewBox="0 0 460 90" fill="none">
            {/* Domain A (WCLK) */}
            <rect x="10" y="14" width="95" height="58" rx="5" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="57" y="34" textAnchor="middle" fill="#00E5FF" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">WCLK DOMAIN</text>
            <text x="57" y="48" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">Write Control</text>
            <text x="57" y="60" textAnchor="middle" fill="#00A8FF" fontSize="7" fontFamily="JetBrains Mono">Bin → Gray</text>

            {/* Dual Flop Sync 1 */}
            <rect x="118" y="18" width="48" height="50" rx="4" fill="#030712" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" />
            <text x="142" y="42" textAnchor="middle" fill="#00E5FF" fontSize="8" fontFamily="JetBrains Mono">2-FLOP</text>
            <text x="142" y="54" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="JetBrains Mono">SYNC</text>

            {/* FIFO Dual-Port Memory Core */}
            <rect x="180" y="10" width="100" height="66" rx="6" fill="#071426" stroke="#00E5FF" strokeWidth="1.5" />
            <text x="230" y="36" textAnchor="middle" fill="#F8FAFC" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">DUAL-PORT</text>
            <text x="230" y="50" textAnchor="middle" fill="#00E5FF" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">FIFO RAM</text>
            <text x="230" y="64" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="JetBrains Mono">Asynchronous</text>

            {/* Dual Flop Sync 2 */}
            <rect x="294" y="18" width="48" height="50" rx="4" fill="#030712" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" />
            <text x="318" y="42" textAnchor="middle" fill="#00E5FF" fontSize="8" fontFamily="JetBrains Mono">2-FLOP</text>
            <text x="318" y="54" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="JetBrains Mono">SYNC</text>

            {/* Domain B (RCLK) */}
            <rect x="355" y="14" width="95" height="58" rx="5" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="402" y="34" textAnchor="middle" fill="#00E5FF" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">RCLK DOMAIN</text>
            <text x="402" y="48" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">Read Control</text>
            <text x="402" y="60" textAnchor="middle" fill="#00A8FF" fontSize="7" fontFamily="JetBrains Mono">Bin → Gray</text>

            {/* Bus Arrows */}
            <line x1="105" y1="44" x2="118" y2="44" stroke="#00E5FF" strokeWidth="1.2" />
            <line x1="166" y1="44" x2="180" y2="44" stroke="#00E5FF" strokeWidth="1.2" />
            <line x1="280" y1="44" x2="294" y2="44" stroke="#00E5FF" strokeWidth="1.2" />
            <line x1="342" y1="44" x2="355" y2="44" stroke="#00E5FF" strokeWidth="1.2" />
          </svg>
        </div>
      );

    case 'dsp48a1':
      return (
        <div className="w-full bg-[#030712] rounded-xl p-3 border border-[#00A8FF]/20 overflow-hidden relative">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00E5FF] mb-2 border-b border-[#00A8FF]/15 pb-1">
            <span>SPARTAN-6_DSP48A1_SLICE</span>
            <span className="text-[#94A3B8]">18x18 MULT // 48-BIT ACCUMULATOR</span>
          </div>
          <svg className="w-full h-24" viewBox="0 0 460 90" fill="none">
            {/* Pre-Adder Block */}
            <rect x="15" y="16" width="90" height="52" rx="4" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="60" y="38" textAnchor="middle" fill="#00E5FF" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">PRE-ADDER</text>
            <text x="60" y="52" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">D + A Inputs</text>

            {/* Multiplier Block */}
            <rect x="140" y="16" width="105" height="52" rx="4" fill="#05070D" stroke="#00E5FF" strokeWidth="1.5" />
            <text x="192" y="38" textAnchor="middle" fill="#F8FAFC" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">18×18 MULT</text>
            <text x="192" y="52" textAnchor="middle" fill="#00A8FF" fontSize="8" fontFamily="JetBrains Mono">Pipelined Regs</text>

            {/* Post-Adder / Accumulator Block */}
            <rect x="280" y="16" width="165" height="52" rx="4" fill="#071426" stroke="#00A8FF" strokeWidth="1.2" />
            <text x="362" y="38" textAnchor="middle" fill="#00E5FF" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">48-BIT ACCUMULATOR</text>
            <text x="362" y="52" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">ALU / Pattern Detector</text>

            {/* Connecting lines */}
            <line x1="105" y1="42" x2="140" y2="42" stroke="#00E5FF" strokeWidth="1.5" />
            <line x1="245" y1="42" x2="280" y2="42" stroke="#00E5FF" strokeWidth="1.5" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
