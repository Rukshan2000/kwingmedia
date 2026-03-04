import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { name: 'Home',      href: '#home' },
  { name: 'About',     href: '#about' },
  { name: 'Services',  href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact',   href: '#contact' },
];

// Animated wing logo mark
function WingMark({ size = 30 }: { size?: number }) {
  return (
    <motion.svg
      width={size} height={size}
      viewBox="0 0 32 32" fill="none"
      className="text-primary flex-shrink-0"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Left wing */}
      <path d="M16 19 C11 14 5 11 2 7 C6 12 11 16 15.5 19.5Z"
        fill="currentColor" opacity="0.95"/>
      {/* Right wing */}
      <path d="M16 19 C21 14 27 11 30 7 C26 12 21 16 16.5 19.5Z"
        fill="currentColor" opacity="0.95"/>
      {/* Spine */}
      <line x1="16" y1="11" x2="16" y2="26"
        stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.65"/>
      {/* Barb ticks */}
      {[0,1,2,3].map(i => (
        <React.Fragment key={i}>
          <line x1={16} y1={13.5+i*3} x2={13.2-i*0.3} y2={12.5+i*3}
            stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" opacity="0.45"/>
          <line x1={16} y1={13.5+i*3} x2={18.8+i*0.3} y2={12.5+i*3}
            stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" opacity="0.45"/>
        </React.Fragment>
      ))}
    </motion.svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-white/96 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Scrolled: feather quill rule under header */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="rule"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.18) 50%, transparent)',
              transformOrigin: 'center',
            }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-2.5 group" aria-label="Kewings Media Home">
            <WingMark size={30} />
            <div className="leading-none">
              <span
                className="font-bold text-accent block leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.35rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Kewings
              </span>
              <span
                className="text-primary block"
                style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}
              >
                Media
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group py-1.5 text-accent/80 hover:text-accent transition-colors duration-250"
                style={{ fontSize: '0.85rem', letterSpacing: '0.03em' }}
              >
                {link.name}
                {/* Feather barb underline — extends on hover */}
                <span className="absolute bottom-0 left-0 flex items-center gap-[2px] w-0 group-hover:w-full transition-all duration-300 overflow-hidden">
                  <span className="h-[1.5px] flex-1 bg-primary rounded-full opacity-70" />
                  <span className="h-[1.5px] w-1 bg-primary rounded-full opacity-35 flex-shrink-0" />
                </span>
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="group relative overflow-hidden px-5 py-2.5 bg-primary text-white font-medium rounded-sm text-sm transition-shadow duration-300 hover:shadow-md"
              style={{ letterSpacing: '0.04em' }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
              />
              Get a Quote
            </a>
          </nav>

          {/* ── Mobile Toggle ── */}
          <button
            className="md:hidden text-accent p-2 rounded-sm transition-colors hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <XIcon size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <MenuIcon size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>

      {/* ── Mobile Nav Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in panel from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-xs bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.08)] z-[999] md:hidden flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-accent p-2 rounded-sm transition-colors hover:bg-gray-50"
                  aria-label="Close menu"
                >
                  <XIcon size={22} />
                </button>
              </div>

              {/* Wing quill watermark inside mobile menu */}
              <div className="absolute right-0 bottom-0 w-48 h-48 pointer-events-none opacity-[0.04]">
                <svg viewBox="0 0 160 160" fill="none" className="w-full h-full text-primary">
                  {[0,1,2,3,4].map(i => (
                    <line key={i} x1={152-i*28} y1={8+i*28} x2={8+i*16} y2={130-i*22}
                      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  ))}
                </svg>
              </div>

              <nav className="flex flex-col px-5 py-4 gap-1 relative z-10 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.06 }}
                    className="flex items-center gap-3 py-3 text-accent/80 hover:text-accent transition-colors duration-200 group"
                    style={{
                      borderBottom: '1px solid rgba(0,0,0,0.04)',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '1rem',
                    }}
                  >
                    {/* Barb tick */}
                    <span className="w-3 h-px bg-primary opacity-30 group-hover:opacity-60 group-hover:w-5 transition-all duration-250 rounded-full flex-shrink-0" />
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, delay: navLinks.length * 0.06 }}
                  className="group relative overflow-hidden mt-5 px-5 py-3.5 bg-primary text-white font-medium text-center rounded-sm text-sm"
                  style={{ letterSpacing: '0.05em' }}
                >
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
                  />
                  Get a Quote
                </motion.a>

                {/* Mobile feather accent */}
                <div className="flex items-center gap-3 mt-auto pb-6 opacity-20 justify-center">
                  <div className="w-10 h-px bg-primary rounded-full" />
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M20.24 4.76a6 6 0 00-8.49 0L3 13.51V21h7.49l8.75-8.75a6 6 0 000-8.49z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="w-10 h-px bg-primary rounded-full" />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}