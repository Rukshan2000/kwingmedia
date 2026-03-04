import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Soft radial glow behind wings */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          width: '780px',
          height: '780px',
          background:
            'radial-gradient(ellipse at 60% 50%, rgba(var(--primary-rgb, 99,102,241), 0.07) 0%, transparent 70%)',
        }}
      />

      {/* Wing feather strokes — decorative right panel */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0">
        <motion.svg
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          {/* Primary large wing */}
          <motion.path
            d="M620 80 C520 160 300 260 140 350 C300 310 520 330 640 200 C660 170 660 120 620 80Z"
            fill="currentColor"
            className="text-primary"
            style={{ opacity: 0.06 }}
            animate={{ opacity: [0.06, 0.10, 0.06] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Secondary sweep */}
          <motion.path
            d="M600 130 C480 200 280 290 120 380 C280 345 490 355 610 240 C632 213 628 160 600 130Z"
            fill="currentColor"
            className="text-primary"
            style={{ opacity: 0.05 }}
            animate={{ opacity: [0.05, 0.09, 0.05] }}
            transition={{ duration: 5, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Feather quill lines — top cluster */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.line
              key={`qt-${i}`}
              x1={580 - i * 28}
              y1={90 + i * 18}
              x2={160 + i * 20}
              y2={310 + i * 22}
              stroke="currentColor"
              className="text-primary"
              strokeWidth={0.8}
              strokeLinecap="round"
              style={{ opacity: 0.13 - i * 0.01 }}
              animate={{ opacity: [0.13 - i * 0.01, 0.20 - i * 0.01, 0.13 - i * 0.01] }}
              transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
            />
          ))}

          {/* Feather barb wisps — mid cluster */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.path
              key={`fb-${i}`}
              d={`M${560 - i * 30} ${160 + i * 25} Q${400 - i * 10} ${240 + i * 20} ${180 + i * 15} ${360 + i * 18}`}
              stroke="currentColor"
              className="text-primary"
              strokeWidth={0.6}
              strokeLinecap="round"
              fill="none"
              style={{ opacity: 0.10 }}
              animate={{ opacity: [0.10, 0.16, 0.10] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            />
          ))}

          {/* Lower wing arc */}
          <motion.path
            d="M600 350 C480 390 300 420 120 430 C300 410 490 400 590 370 L600 350Z"
            fill="currentColor"
            className="text-primary"
            style={{ opacity: 0.04 }}
            animate={{ opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Lower feather lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={`ql-${i}`}
              x1={560 - i * 25}
              y1={330 + i * 20}
              x2={160 + i * 18}
              y2={430 + i * 14}
              stroke="currentColor"
              className="text-primary"
              strokeWidth={0.7}
              strokeLinecap="round"
              style={{ opacity: 0.09 }}
              animate={{ opacity: [0.09, 0.15, 0.09] }}
              transition={{ duration: 4 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 + i * 0.12 }}
            />
          ))}

          {/* Feather tip accent dots */}
          {[
            [630, 100], [610, 155], [590, 205], [572, 252],
            [554, 298], [536, 342], [518, 384],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={cx}
              cy={cy}
              r={2.5}
              fill="currentColor"
              className="text-primary"
              style={{ opacity: 0.18 }}
              animate={{ opacity: [0.18, 0.30, 0.18], r: [2.5, 3.2, 2.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Subtle horizontal rule accent */}
      <motion.div
        className="absolute left-0 top-[42%] h-px w-full pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(var(--primary-rgb,99,102,241),0.10) 40%, transparent 100%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="inline-block w-8 h-px bg-primary opacity-60" />
            <span
              className="text-xs uppercase text-primary font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.22em' }}
            >
              Wings of Bird
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.05 }}
          >
            <h1
              className="font-extrabold text-accent leading-[1.05] mb-7 text-balance"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: '-0.01em',
              }}
            >
              Elevating Experiences{' '}
              <br className="hidden md:block" />
              with{' '}
              <span className="text-primary relative inline-block" style={{ fontStyle: 'italic' }}>
                Innovation
                {/* Animated underline feather stroke */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
                  style={{ opacity: 0.45 }}
                />
              </span>{' '}
              &amp; Precision
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-400 mb-11 font-light tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
          >
            Events{' '}
            <span className="text-primary mx-2 opacity-60 font-thin">|</span>
            Audio &amp; Video Production{' '}
            <span className="text-primary mx-2 opacity-60 font-thin">|</span>
            IT Solutions{' '}
            <span className="text-primary mx-2 opacity-60 font-thin">|</span>
            Advertising
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="group relative overflow-hidden px-9 py-4 bg-primary text-white font-medium rounded-sm text-center transition-all duration-300 hover:shadow-lg"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.04em',
                fontSize: '0.9rem',
              }}
            >
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                }}
              />
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="group px-9 py-4 bg-transparent border text-accent font-medium rounded-sm text-center transition-all duration-300 hover:bg-accent hover:text-white"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.04em',
                fontSize: '0.9rem',
                borderWidth: '1.5px',
                borderColor: 'currentColor',
              }}
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Floating feather icon accent */}
          <motion.div
            className="mt-16 flex items-center gap-3 opacity-30"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path
                d="M20.24 4.76a6 6 0 00-8.49 0L3 13.51V21h7.49l8.75-8.75a6 6 0 000-8.49z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span
              className="text-xs tracking-[0.18em] uppercase text-gray-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Crafted with precision
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}