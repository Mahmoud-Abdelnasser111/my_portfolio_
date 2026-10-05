import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, FileDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Courses', href: '#courses' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    setActiveSection(targetId);

    // Defer scroll slightly on mobile to allow drawer transition & touch release
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      }
    }, 60);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#030712]/92 backdrop-blur-md border-b border-[#00A8FF]/20 shadow-[0_4px_30px_rgba(0,168,255,0.08)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative p-2 rounded-lg bg-[#071426] border border-[#00A8FF]/30 group-hover:border-[#00E5FF] transition-colors shadow-[0_0_15px_rgba(0,168,255,0.2)]">
              <Cpu className="w-5 h-5 text-[#00E5FF] group-hover:scale-105 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00E5FF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider text-white flex items-center gap-1.5">
                MAHMOUD <span className="text-[#00A8FF] font-mono">//</span> <span className="text-[#00E5FF]">IC DESIGN</span>
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase">
                RTL • ASIC • FPGA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#071426]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#00A8FF]/20 shadow-[0_0_20px_rgba(0,168,255,0.06)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#00E5FF] bg-[#00A8FF]/15 border border-[#00E5FF]/40 shadow-[0_0_12px_rgba(0,229,255,0.3)] font-semibold'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: CV Download Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1Dkbit1KXxIDk_N4pS6ZpitpLBWdjtwTd/view"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg text-white bg-[#071426] border border-[#00A8FF]/40 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A8FF]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileDown className="w-3.5 h-3.5 text-[#00E5FF] group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
              <ExternalLink className="w-3 h-3 text-[#94A3B8] group-hover:text-white" />
            </a>
          </div>

          {/* Mobile Right Controls: CV & Hamburger (No WhatsApp in header) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1Dkbit1KXxIDk_N4pS6ZpitpLBWdjtwTd/view"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-[#00E5FF] hover:border-[#00E5FF] transition-all cursor-pointer"
              aria-label="Download CV"
              title="Download CV"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-white hover:border-[#00E5FF] focus:outline-none transition-colors cursor-pointer relative"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#00E5FF] transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-5 h-5 text-[#00A8FF] transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Framer Motion Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -12 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden mt-3 px-4 pb-6 pt-3 bg-[#05070D]/95 backdrop-blur-2xl border-b border-[#00A8FF]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Top decorative circuit trace indicator */}
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent mb-3 opacity-60" />

            <div className="flex flex-col space-y-1.5">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.025, duration: 0.2 }}
                    className={`px-4 py-3 rounded-lg text-sm font-mono flex items-center justify-between transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#00A8FF]/20 text-[#00E5FF] border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.25)] font-semibold'
                        : 'text-[#94A3B8] hover:bg-white/5 hover:text-white hover:border-[#00A8FF]/30 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] text-[#00A8FF]/70">0{idx + 1}.</span>
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
                    )}
                  </motion.a>
                );
              })}

              {/* CV Download Button in Drawer */}
              <div className="pt-4 mt-2 border-t border-[#00A8FF]/20">
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                  href="https://drive.google.com/file/d/1Dkbit1KXxIDk_N4pS6ZpitpLBWdjtwTd/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#071426] border border-[#00A8FF]/40 text-[#00E5FF] font-mono text-sm font-medium hover:border-[#00E5FF] transition-all cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV (Google Drive)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8]" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
