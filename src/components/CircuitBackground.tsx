import React from 'react';

export const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark gradient foundation */}
      <div className="absolute inset-0 bg-[#030712] [background:radial-gradient(125%_125%_at_50%_10%,#030712_40%,#071426_100%)] opacity-95" />

      {/* Subtle silicon circuit grid */}
      <div className="absolute inset-0 circuit-grid opacity-30" />

      {/* Ambient soft glow spots (pure neon blue & cyan, strictly no purple/pink) */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#00A8FF]/5 blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#00E5FF]/4 blur-[130px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#1687FF]/5 blur-[140px]" />

      {/* SVG PCB Traces with subtle glowing signals */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A8FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="traceGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1687FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Top-left circuit trace lines */}
        <path
          d="M0,80 L200,80 L260,140 L500,140"
          fill="none"
          stroke="url(#traceGrad1)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <circle cx="200" cy="80" r="3" fill="#00E5FF" />
        <circle cx="260" cy="140" r="2.5" fill="#00A8FF" />

        {/* Right-side circuit traces */}
        <path
          d="M1200,300 L1050,300 L980,370 L750,370"
          fill="none"
          stroke="url(#traceGrad2)"
          strokeWidth="1.2"
        />
        <circle cx="1050" cy="300" r="3" fill="#00E5FF" />
        <circle cx="980" cy="370" r="2" fill="#00A8FF" />

        {/* Mid-lower circuit paths */}
        <path
          d="M150,850 L350,850 L420,920 L700,920 L780,1000"
          fill="none"
          stroke="rgba(0, 168, 255, 0.4)"
          strokeWidth="1"
        />
        <circle cx="420" cy="920" r="3" fill="#00A8FF" />
        <circle cx="700" cy="920" r="2" fill="#00E5FF" />

        {/* Vertical bus lines */}
        <path
          d="M900,600 L900,750 L950,800 L950,1100"
          fill="none"
          stroke="rgba(0, 229, 255, 0.3)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle cx="900" cy="750" r="2.5" fill="#00E5FF" />
        <circle cx="950" cy="800" r="3" fill="#00A8FF" />
      </svg>
    </div>
  );
};
