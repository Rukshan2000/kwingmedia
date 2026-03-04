import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Corporate Gala 2024', category: 'Event Management', color: 'from-gray-900 to-gray-800' },
  { title: 'Brand Film — Luxe Motors', category: 'Video Production', color: 'from-red-900 to-black' },
  { title: 'Tech Summit Stage Design', category: 'Event Management', color: 'from-gray-800 to-gray-700' },
  { title: 'Digital Campaign — Apex', category: 'Advertising', color: 'from-black to-red-950' },
  { title: 'Product Launch Event', category: 'Event Management', color: 'from-gray-900 to-black' },
  { title: 'Music Festival Production', category: 'Audio & Video', color: 'from-red-950 to-gray-900' },
];

// Per-card feather watermark overlay
function CardFeather() {
  return (
    <div className="absolute right-4 bottom-4 w-28 h-28 pointer-events-none z-10">
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white" style={{ opacity: 0.07 }}>
        <path d="M90 10 C68 32 42 58 10 90" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        {[0,1,2,3,4,5].map(i => (
          <React.Fragment key={i}>
            <line x1={88-i*13} y1={12+i*13} x2={76-i*12} y2={6+i*11}
              stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
            <line x1={88-i*13} y1={12+i*13} x2={94-i*11} y2={24+i*12}
              stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}

// Large decorative background wing — left side
function WingBgLeft() {
  return (
    <div className="absolute left-[-100px] bottom-0 w-[520px] h-[520px] pointer-events-none z-0">
      <motion.svg viewBox="0 0 520 520" fill="none"
        animate={{ y: [0, -14, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path d="M60 460 C140 360 300 240 480 60 C310 180 160 310 40 480 Z"
          fill="currentColor" style={{ opacity: 0.05 }}/>
        {[0,1,2,3,4,5,6,7].map(i => (
          <motion.line key={i}
            x1={70+i*38} y1={450-i*38}
            x2={460-i*18} y2={78+i*30}
            stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"
            style={{ opacity: 0.09 }}
            animate={{ opacity: [0.09, 0.15, 0.09] }}
            transition={{ duration: 4+i*0.3, repeat: Infinity, ease: 'easeInOut', delay: i*0.15 }}
          />
        ))}
        {[0,1,2,3,4].map(i => (
          <motion.path key={i}
            d={`M${80+i*40} ${440-i*38} Q${270+i*8} ${240-i*10} ${450-i*20} ${90+i*28}`}
            stroke="currentColor" strokeWidth="0.55" fill="none" strokeLinecap="round"
            style={{ opacity: 0.07 }}
            animate={{ opacity: [0.07, 0.12, 0.07] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i*0.2 }}
          />
        ))}
        {[[480,62],[462,102],[444,140],[427,176],[410,210]].map(([cx,cy],i) => (
          <motion.circle key={i} cx={cx} cy={cy} r="2.5" fill="currentColor"
            style={{ opacity: 0.14 }}
            animate={{ opacity: [0.14, 0.24, 0.14] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i*0.25 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

// Top-right corner feather
function CornerFeatherRight() {
  return (
    <div className="absolute right-10 top-10 w-[170px] h-[170px] pointer-events-none z-0 opacity-[0.055]">
      <motion.svg viewBox="0 0 170 170" fill="none"
        animate={{ rotate: [0, 2.5, 0], y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path d="M155 15 C110 60 65 110 15 155" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        {[0,1,2,3,4,5,6].map(i => (
          <React.Fragment key={i}>
            <line x1={152-i*20} y1={18+i*20} x2={136-i*18} y2={10+i*18}
              stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
            <line x1={152-i*20} y1={18+i*20} x2={162-i*18} y2={34+i*18}
              stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
          </React.Fragment>
        ))}
      </motion.svg>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-36 bg-white overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <WingBgLeft />
      <CornerFeatherRight />

      {/* Top rule */}
      <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.13) 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-primary opacity-60" />
              <span
                className="text-xs uppercase text-primary font-semibold tracking-[0.22em]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Portfolio
              </span>
            </div>

            <h2
              className="font-bold text-accent leading-[1.08] mb-5"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: '-0.01em',
              }}
            >
              Our{' '}
              <span className="text-primary relative inline-block" style={{ fontStyle: 'italic' }}>
                Work
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
                  style={{ opacity: 0.4 }}
                />
              </span>
            </h2>

            {/* Dot rule */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-primary opacity-30" />
              <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
            </div>
          </div>

          <p
            className="text-gray-500 max-w-sm leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', lineHeight: 1.8 }}
          >
            A curated selection of our most impactful projects, showcasing our
            commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-700 group-hover:scale-105`} />

              {/* Feather watermark */}
              <CardFeather />

              {/* Always-visible category pill */}
              <div className="absolute top-5 left-5 z-20">
                <span
                  className="text-[10px] uppercase tracking-[0.18em] text-white/60 font-medium px-3 py-1 rounded-sm"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Hover overlay — primary color wash */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-350 z-10" />

              {/* Wing quill lines on hover overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                <svg viewBox="0 0 400 300" fill="none" className="w-full h-full text-white" style={{ opacity: 0.08 }}>
                  {[0,1,2,3,4].map(i => (
                    <line key={i}
                      x1={380-i*30} y1={10+i*18}
                      x2={20+i*20} y2={260+i*10}
                      stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                    />
                  ))}
                </svg>
              </div>

              {/* Hover text */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p
                  className="text-white/75 text-xs font-medium mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-[0.15em]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-white font-bold leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                  style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: 'italic',
                  }}
                >
                  {project.title}
                </h3>

                {/* Mini feather rule */}
                <div className="flex items-center gap-2 mt-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <div className="w-5 h-[1.5px] bg-white opacity-50 rounded-full" />
                  <div className="w-1.5 h-[1.5px] bg-white opacity-25 rounded-full" />
                  <span
                    className="text-[10px] text-white/60 uppercase tracking-[0.14em] ml-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    View Project
                  </span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-white opacity-60">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Bottom border accent */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out z-30"
                style={{ background: 'rgba(255,255,255,0.35)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.12) 50%, transparent)' }}
      />
    </section>
  );
}