import React, { useState } from 'react';
import { Mail, Phone, MapPin, FileDown, ExternalLink, Copy, Check, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahmoudfarragsif1@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+201095678911');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-[#00A8FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Let's Build Something Digital
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Interested in digital design, verification, ASIC or FPGA engineering?
          </p>
        </div>

        {/* Contact Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/30 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,168,255,0.08)] relative overflow-hidden">
          {/* Top subtle neon trace line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A8FF] via-[#00E5FF] to-[#1687FF]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF] mb-2">
                <Terminal className="w-4 h-4" />
                <span>DIRECT CHANNELS</span>
              </div>

              {/* WhatsApp Card */}
              <div className="rounded-xl bg-[#071426] border border-[#00E5FF]/40 p-4 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#030712] border border-[#00E5FF]/40 text-[#00E5FF] group-hover:scale-105 transition-transform">
                      <WhatsAppIcon className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#00E5FF] font-semibold uppercase block flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                        INSTANT WHATSAPP
                      </span>
                      <a
                        href="https://wa.me/201095678911"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#00E5FF] transition-colors"
                      >
                        (+20) 1095678911
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/201095678911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#030712] border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors"
                    title="Open WhatsApp Chat"
                    aria-label="Open WhatsApp Chat"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl bg-[#071426] border border-[#00A8FF]/30 p-4 hover:border-[#00E5FF] transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#030712] border border-[#00A8FF]/30 text-[#00E5FF] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                        EMAIL ADDRESS
                      </span>
                      <a
                        href="mailto:mahmoudfarragsif1@gmail.com"
                        className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#00E5FF] transition-colors break-all"
                      >
                        mahmoudfarragsif1@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#030712] border border-[#00A8FF]/20 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#00E5FF]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-xl bg-[#071426] border border-[#00A8FF]/30 p-4 hover:border-[#00E5FF] transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#030712] border border-[#00A8FF]/30 text-[#00A8FF] group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                        PHONE NUMBER
                      </span>
                      <a
                        href="tel:+201095678911"
                        className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#00E5FF] transition-colors"
                      >
                        (+20) 1095678911
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-[#030712] border border-[#00A8FF]/20 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-colors cursor-pointer"
                    title="Copy Phone"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#00E5FF]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-xl bg-[#071426] border border-[#00A8FF]/30 p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#030712] border border-[#00A8FF]/30 text-[#00E5FF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    CURRENT BASE
                  </span>
                  <span className="text-sm sm:text-base font-mono font-medium text-white">
                    Beni-Suef, Egypt
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions: WhatsApp, LinkedIn, GitHub & CV */}
            <div className="flex flex-col justify-between h-full space-y-6 rounded-xl bg-[#030712] border border-[#00A8FF]/20 p-6 sm:p-8">
              <div>
                <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider block mb-2">
                  COLLABORATE &amp; CONNECT
                </span>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  Let's discuss RTL, verification, or silicon hardware opportunities.
                </h3>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                  Available for internships, graduation research, and entry-level digital design roles. Reach out via WhatsApp, email, phone, or connect on LinkedIn and GitHub.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#00A8FF]/20">
                {/* WhatsApp Chat Button */}
                <a
                  href="https://wa.me/201095678911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#071426] border border-[#00E5FF]/50 text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all group font-mono text-xs font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-4 h-4 text-[#00E5FF]" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/mahmoud-abd-elnasser-7747a4377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-white hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all group font-mono text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#00A8FF] group-hover:text-[#00E5FF]" />
                    <span className="font-medium">Connect on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white" />
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/Mahmoud-Abdelnasser111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-white hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all group font-mono text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#00E5FF]" />
                    <span className="font-medium">Review Code on GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white" />
                </a>

                {/* Download CV Button */}
                <a
                  href="https://drive.google.com/file/d/1Dkbit1KXxIDk_N4pS6ZpitpLBWdjtwTd/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#00A8FF]/20 to-[#00E5FF]/20 border border-[#00E5FF]/50 text-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all group font-mono text-xs font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <FileDown className="w-4 h-4" />
                    <span>Download Official CV (Google Drive)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
