import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Our Vision',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        {/* Eye / horizon wing icon */}
        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4"/>
        {/* Wing wisps */}
        <path d="M2 12 C5 9 9 7 12 7" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.4"/>
        <path d="M22 12 C19 9 15 7 12 7" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    description:
      'To be the global benchmark in creating seamless, unforgettable experiences through cutting-edge technology and creative brilliance.',
  },
  {
    title: 'Our Mission',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        {/* Feather/quill icon */}
        <path d="M20.24 4.76a6 6 0 00-8.49 0L3 13.51V21h7.49l8.75-8.75a6 6 0 000-8.49z"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M17.5 6.5 L13 11" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    description:
      'Delivering end-to-end media, event, and IT solutions that empower brands to connect, inspire, and grow in a dynamic world.',
  },
  {
    title: 'Our Approach',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        {/* Wings spread icon */}
        <path d="M12 12 C8 8 3 7 2 4 C4 7 7 10 12 12Z"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08"/>
        <path d="M12 12 C16 8 21 7 22 4 C20 7 17 10 12 12Z"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08"/>
        <path d="M12 12 C10 15 9 19 12 22 C15 19 14 15 12 12Z"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 6 C7 8 10 10 12 12" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.4"/>
        <path d="M19 6 C17 8 14 10 12 12" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    description:
      'We blend artistic vision with technical precision, ensuring every project is executed flawlessly from concept to completion.',
  },
];

// Feather SVG background — large decorative left wing
function WingBg() {
  return (
    <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-[0.045]">
      <motion.svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -14, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        {/* Main wing sweep */}
        <path d="M80 500 C160 380 320 260 520 80 C340 200 180 320 60 520 Z" fill="currentColor"/>
        <path d="M100 520 C200 400 360 280 540 100 C360 220 200 340 80 540 Z" fill="currentColor" opacity="0.6"/>
        {/* Feather quills */}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={i}
            x1={90 + i*42} y1={490 - i*40}
            x2={500 - i*20} y2={100 + i*35}
            stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
          />
        ))}
        {/* Barb wisps */}
        {[0,1,2,3,4,5].map(i => (
          <path key={i}
            d={`M${110+i*50} ${470-i*40} Q${300+i*10} ${280-i*10} ${490-i*20} ${120+i*30}`}
            stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.7"
          />
        ))}
        {/* Tip dots */}
        {[[520,82],[500,120],[480,158],[460,194],[440,228]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor"/>
        ))}
      </motion.svg>
    </div>
  );
}

// Subtle scattered feather barb — top right corner
function CornerFeather() {
  return (
    <div className="absolute right-12 top-12 w-[200px] h-[200px] pointer-events-none z-0 opacity-[0.06]">
      <motion.svg
        viewBox="0 0 200 200" fill="none"
        animate={{ rotate: [0, 3, 0], y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path d="M180 20 C130 70 80 120 20 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={i}
            x1={175 - i*19} y1={25 + i*19}
            x2={140 - i*15} y2={20 + i*22}
            stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"
          />
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={i}
            x1={175 - i*19} y1={25 + i*19}
            x2={180 - i*17} y2={58 + i*18}
            stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-white overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <WingBg />
      <CornerFeather />

      {/* Horizontal rule accent */}
      <div
        className="absolute top-0 left-0 w-full h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(var(--primary-rgb,99,102,241),0.15) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-primary opacity-60" />
              <span
                className="text-xs uppercase text-primary font-semibold tracking-[0.22em]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Who We Are
              </span>
            </div>

            <h2
              className="font-bold text-accent mb-5 leading-[1.08]"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: '-0.01em',
              }}
            >
              About{' '}
              <span className="text-primary relative inline-block" style={{ fontStyle: 'italic' }}>
                Kewings Media
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

            {/* Decorative rule */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="w-12 h-[2px] bg-primary opacity-70 rounded-full" />
              <div className="w-3 h-[2px] bg-primary opacity-30 rounded-full" />
              <div className="w-1.5 h-[2px] bg-primary opacity-20 rounded-full" />
            </motion.div>

            <p
              className="text-gray-500 leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.8,
              }}
            >
              We are a premium agency dedicated to excellence in Event Management,
              Audio &amp; Video Production, IT Solutions, and Advertising. Our focus
              lies in merging creativity with advanced technology to deliver
              high-end corporate solutions that leave a lasting impact.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-sm overflow-hidden"
              style={{
                boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {/* Top feather-stroke accent bar */}
              <div className="relative h-[3px] bg-primary overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white opacity-40"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
                  style={{ width: '40%' }}
                />
              </div>

              {/* Card inner */}
              <div className="p-8 relative">
                {/* Wing quill lines background per-card */}
                <div className="absolute right-4 bottom-4 w-28 h-28 pointer-events-none opacity-[0.05]">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-primary">
                    {[0,1,2,3].map(i => (
                      <line key={i}
                        x1={95 - i*20} y1={5 + i*20}
                        x2={5 + i*10} y2={85 - i*15}
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      />
                    ))}
                  </svg>
                </div>

                {/* Icon */}
                <motion.div
                  className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-sm bg-primary"
                  style={{ backgroundColor: 'rgba(var(--primary-rgb,99,102,241),0.07)' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.icon}
                </motion.div>

                <h3
                  className="font-bold text-accent mb-3"
                  style={{
                    fontSize: '1.3rem',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.title}
                </h3>

                {/* Mini rule */}
                <div className="w-8 h-[1.5px] bg-primary opacity-40 mb-4 rounded-full" />

                <p
                  className="text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.93rem', lineHeight: 1.75 }}
                >
                  {card.description}
                </p>

                {/* Hover reveal bottom link hint */}
                <div
                  className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span
                    className="text-xs text-primary tracking-[0.12em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn more
                  </span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom rule accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(var(--primary-rgb,99,102,241),0.12) 50%, transparent 100%)',
        }}
      />
    </section>
  );
}