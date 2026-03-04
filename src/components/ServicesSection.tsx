import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, FilmIcon, MonitorIcon, MegaphoneIcon } from 'lucide-react';

const services = [
  {
    title: 'Event Management',
    description:
      'Flawless execution of corporate events, galas, and product launches with meticulous attention to detail.',
    icon: CalendarIcon,
  },
  {
    title: 'Audio & Video Production',
    description:
      'High-end commercial films, brand documentaries, and live broadcasting with cinematic quality.',
    icon: FilmIcon,
  },
  {
    title: 'IT Solutions',
    description:
      'Robust digital infrastructure, custom software, and technical support for modern enterprises.',
    icon: MonitorIcon,
  },
  {
    title: 'Advertising & Branding',
    description:
      "Strategic campaigns and visual identities that elevate your brand's presence in the market.",
    icon: MegaphoneIcon,
  },
];

// Large wing sweep behind the grid — right side
function WingBgRight() {
  return (
    <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none z-0">
      <motion.svg
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -16, 0], rotate: [0, 1.2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path
          d="M500 60 C400 140 220 240 60 320 C220 285 420 300 520 180 C540 155 540 100 500 60Z"
          fill="currentColor" style={{ opacity: 0.055 }}
        />
        <path
          d="M480 110 C375 185 200 275 50 355 C205 322 400 332 500 220 C522 195 518 145 480 110Z"
          fill="currentColor" style={{ opacity: 0.04 }}
        />
        {/* Quill lines */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <motion.line key={`r${i}`}
            x1={490 - i*26} y1={72 + i*20}
            x2={80 + i*18} y2={290 + i*22}
            stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"
            style={{ opacity: 0.11 - i*0.008 }}
            animate={{ opacity: [0.11 - i*0.008, 0.18 - i*0.008, 0.11 - i*0.008] }}
            transition={{ duration: 4 + i*0.3, repeat: Infinity, ease: 'easeInOut', delay: i*0.15 }}
          />
        ))}
        {/* Barb wisps */}
        {[0,1,2,3,4].map(i => (
          <motion.path key={`b${i}`}
            d={`M${470-i*28} ${120+i*28} Q${300-i*8} ${210+i*18} ${90+i*14} ${320+i*20}`}
            stroke="currentColor" strokeWidth="0.55" strokeLinecap="round" fill="none"
            style={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.13, 0.08] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i*0.2 }}
          />
        ))}
        {/* Tip dots */}
        {[[505,62],[485,108],[465,152],[447,194],[429,234]].map(([cx,cy],i) => (
          <motion.circle key={i} cx={cx} cy={cy} r="2.5" fill="currentColor"
            style={{ opacity: 0.16 }}
            animate={{ opacity: [0.16, 0.28, 0.16], r: [2.5, 3.2, 2.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i*0.25 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

// Small corner feather — top left
function CornerFeatherLeft() {
  return (
    <div className="absolute left-10 top-10 w-[160px] h-[160px] pointer-events-none z-0 opacity-[0.055]">
      <motion.svg viewBox="0 0 160 160" fill="none"
        animate={{ rotate: [0, -2.5, 0], y: [0, -7, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path d="M20 140 C60 100 110 55 148 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        {[0,1,2,3,4,5,6].map(i => (
          <React.Fragment key={i}>
            <line x1={22+i*18} y1={137-i*18} x2={14+i*16} y2={112-i*16}
              stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
            <line x1={22+i*18} y1={137-i*18} x2={46+i*16} y2={130-i*16}
              stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
          </React.Fragment>
        ))}
      </motion.svg>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fafafa 0%, #f4f4f6 100%)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <WingBgRight />
      <CornerFeatherLeft />

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
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-primary opacity-50" />
            <span
              className="text-xs uppercase text-primary font-semibold tracking-[0.22em]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Do
            </span>
            <span className="inline-block w-8 h-px bg-primary opacity-50" />
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
              Services
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
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-primary opacity-30" />
            <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -7, transition: { duration: 0.22 } }}
                className="group relative bg-white rounded-sm overflow-hidden"
                style={{
                  boxShadow: '0 2px 20px rgba(0,0,0,0.055)',
                  border: '1px solid rgba(0,0,0,0.055)',
                }}
              >
                {/* Animated top shimmer bar */}
                <div className="relative h-[3px] bg-primary overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white opacity-40"
                    animate={{ x: ['-100%', '220%'] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.55 }}
                    style={{ width: '35%' }}
                  />
                </div>

                <div className="p-7 relative">
                  {/* Per-card wing quill watermark */}
                  <div className="absolute right-3 bottom-3 w-24 h-24 pointer-events-none opacity-[0.045]">
                    <svg viewBox="0 0 90 90" fill="none" className="w-full h-full text-primary">
                      {[0,1,2,3].map(i => (
                        <line key={i}
                          x1={85-i*18} y1={5+i*18}
                          x2={5+i*10} y2={78-i*14}
                          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-13 h-13 flex items-center justify-center mb-6 rounded-sm transition-colors duration-300"
                    style={{
                      width: '3.2rem', height: '3.2rem',
                      background: 'rgba(var(--primary-rgb,99,102,241),0.07)',
                    }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon
                      className="text-primary transition-colors duration-300"
                      style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                  </motion.div>

                  <h3
                    className="font-bold text-accent mb-2"
                    style={{
                      fontSize: '1.2rem',
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Mini feather rule */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-6 h-[1.5px] bg-primary opacity-40 rounded-full" />
                    <div className="w-1.5 h-[1.5px] bg-primary opacity-20 rounded-full" />
                  </div>

                  <p
                    className="text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', lineHeight: 1.75 }}
                  >
                    {service.description}
                  </p>

                  {/* Hover reveal */}
                  <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-xs text-primary tracking-[0.12em] uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Discover
                    </span>
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-primary">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.12) 50%, transparent)' }}
      />
    </section>
  );
}