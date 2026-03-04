import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, TargetIcon, LayersIcon, ShieldIcon } from 'lucide-react';

const highlights = [
  {
    title: 'Creative Excellence',
    description: 'We push boundaries to deliver unique, memorable concepts that stand out.',
    icon: SparklesIcon,
    number: '01',
  },
  {
    title: 'Technical Precision',
    description: 'State-of-the-art equipment and flawless execution for every project.',
    icon: TargetIcon,
    number: '02',
  },
  {
    title: 'End-to-End Solutions',
    description: 'Comprehensive services from initial strategy to final delivery.',
    icon: LayersIcon,
    number: '03',
  },
  {
    title: 'Reliable Execution',
    description: 'Trusted by industry leaders to deliver on time and beyond expectations.',
    icon: ShieldIcon,
    number: '04',
  },
];

// Animated central wing — the hero of this section
function CentralWing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 900 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl text-primary"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Left wing */}
        <motion.path
          d="M450 250 C370 180 240 130 80 100 C200 160 340 200 440 248Z"
          fill="currentColor" style={{ opacity: 0.055 }}
          animate={{ opacity: [0.055, 0.09, 0.055] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M450 250 C360 200 220 165 60 150 C185 195 335 220 445 252Z"
          fill="currentColor" style={{ opacity: 0.04 }}
          animate={{ opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 5, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Left feather quills */}
        {[0,1,2,3,4,5,6].map(i => (
          <motion.line key={`lq${i}`}
            x1={440 - i*8} y1={250 - i*4}
            x2={80 + i*20} y2={100 + i*12}
            stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
            style={{ opacity: 0.10 }}
            animate={{ opacity: [0.10, 0.16, 0.10] }}
            transition={{ duration: 4+i*0.25, repeat: Infinity, ease: 'easeInOut', delay: i*0.12 }}
          />
        ))}
        {/* Left barbs */}
        {[0,1,2,3,4].map(i => (
          <motion.path key={`lb${i}`}
            d={`M${435-i*10} ${252-i*5} Q${280-i*12} ${180+i*5} ${90+i*18} ${108+i*10}`}
            stroke="currentColor" strokeWidth="0.5" fill="none" strokeLinecap="round"
            style={{ opacity: 0.07 }}
            animate={{ opacity: [0.07, 0.12, 0.07] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i*0.18 }}
          />
        ))}

        {/* Right wing — mirror */}
        <motion.path
          d="M450 250 C530 180 660 130 820 100 C700 160 560 200 460 248Z"
          fill="currentColor" style={{ opacity: 0.055 }}
          animate={{ opacity: [0.055, 0.09, 0.055] }}
          transition={{ duration: 5, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M450 250 C540 200 680 165 840 150 C715 195 565 220 455 252Z"
          fill="currentColor" style={{ opacity: 0.04 }}
          animate={{ opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right feather quills */}
        {[0,1,2,3,4,5,6].map(i => (
          <motion.line key={`rq${i}`}
            x1={460 + i*8} y1={250 - i*4}
            x2={820 - i*20} y2={100 + i*12}
            stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
            style={{ opacity: 0.10 }}
            animate={{ opacity: [0.10, 0.16, 0.10] }}
            transition={{ duration: 4+i*0.25, repeat: Infinity, ease: 'easeInOut', delay: i*0.12 }}
          />
        ))}
        {/* Right barbs */}
        {[0,1,2,3,4].map(i => (
          <motion.path key={`rb${i}`}
            d={`M${465+i*10} ${252-i*5} Q${620+i*12} ${180+i*5} ${810-i*18} ${108+i*10}`}
            stroke="currentColor" strokeWidth="0.5" fill="none" strokeLinecap="round"
            style={{ opacity: 0.07 }}
            animate={{ opacity: [0.07, 0.12, 0.07] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i*0.18 }}
          />
        ))}

        {/* Body / center quill spine */}
        <motion.line x1="450" y1="180" x2="450" y2="340"
          stroke="currentColor" strokeWidth="1" strokeLinecap="round"
          style={{ opacity: 0.12 }}
          animate={{ opacity: [0.12, 0.20, 0.12] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Wing tip dots — left */}
        {[[82,100],[72,118],[65,136],[60,154]].map(([cx,cy],i) => (
          <motion.circle key={`ld${i}`} cx={cx} cy={cy} r="2.2" fill="currentColor"
            style={{ opacity: 0.14 }}
            animate={{ opacity: [0.14, 0.24, 0.14] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i*0.2 }}
          />
        ))}
        {/* Wing tip dots — right */}
        {[[818,100],[828,118],[835,136],[840,154]].map(([cx,cy],i) => (
          <motion.circle key={`rd${i}`} cx={cx} cy={cy} r="2.2" fill="currentColor"
            style={{ opacity: 0.14 }}
            animate={{ opacity: [0.14, 0.24, 0.14] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i*0.2 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(170deg, #fafafa 0%, #f3f3f5 100%)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <CentralWing />

      {/* Top / bottom rules */}
      {['top','bottom'].map(pos => (
        <div key={pos} className={`absolute ${pos}-0 left-0 w-full h-px pointer-events-none`}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.13) 50%, transparent)' }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-primary opacity-50" />
            <span className="text-xs uppercase text-primary font-semibold tracking-[0.22em]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Strengths
            </span>
            <span className="inline-block w-8 h-px bg-primary opacity-50" />
          </div>

          <h2 className="font-bold text-accent leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.01em' }}>
            Why Choose{' '}
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

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-primary opacity-30" />
            <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
          </div>
        </motion.div>

        {/* 2×2 layout — large editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            // Alternate: left cards align left, right cards align right for asymmetry
            const isRight = index % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="group relative bg-white rounded-sm overflow-hidden flex gap-0"
                style={{
                  boxShadow: '0 2px 22px rgba(0,0,0,0.055)',
                  border: '1px solid rgba(0,0,0,0.055)',
                  minHeight: '180px',
                }}
              >
                {/* Left accent stripe with number */}
                <div
                  className="relative flex-shrink-0 w-[72px] flex flex-col items-center justify-between py-7 px-2"
                  style={{ background: 'rgba(var(--primary-rgb,99,102,241),0.04)', borderRight: '1px solid rgba(var(--primary-rgb,99,102,241),0.08)' }}
                >
                  {/* Feather spine line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, transparent, rgba(var(--primary-rgb,99,102,241),0.15) 40%, rgba(var(--primary-rgb,99,102,241),0.15) 60%, transparent)' }}
                  />
                  {/* Barb ticks along spine */}
                  {[0,1,2,3,4,5].map(i => (
                    <div key={i} className="relative w-full flex justify-center">
                      <div className="w-3 h-px bg-primary opacity-15" />
                    </div>
                  ))}
                  {/* Index number */}
                  <span
                    className="absolute bottom-5 text-primary font-bold text-xs opacity-30"
                    style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.08em' }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 relative">
                  {/* Wing quill watermark */}
                  <div className="absolute right-3 bottom-3 w-24 h-24 pointer-events-none opacity-[0.04]">
                    <svg viewBox="0 0 90 90" fill="none" className="w-full h-full text-primary">
                      {[0,1,2,3].map(i => (
                        <line key={i} x1={85-i*18} y1={5+i*18} x2={5+i*10} y2={78-i*14}
                          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      ))}
                    </svg>
                  </div>

                  {/* Icon + title row */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="flex-shrink-0 flex items-center justify-center rounded-sm"
                      style={{
                        width: '2.8rem', height: '2.8rem',
                        background: 'rgba(var(--primary-rgb,99,102,241),0.07)',
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="text-primary" style={{ width: '1.3rem', height: '1.3rem' }} />
                    </motion.div>

                    <div>
                      <h3 className="font-bold text-accent leading-tight"
                        style={{ fontSize: '1.25rem', fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '-0.01em' }}>
                        {item.title}
                      </h3>
                      {/* Mini feather rule */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="w-5 h-[1.5px] bg-primary opacity-35 rounded-full" />
                        <div className="w-1.5 h-[1.5px] bg-primary opacity-18 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', lineHeight: 1.75 }}>
                    {item.description}
                  </p>

                  {/* Hover reveal */}
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-primary tracking-[0.12em] uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Learn more
                    </span>
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-primary">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Top shimmer bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white opacity-40"
                    animate={{ x: ['-100%', '220%'] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
                    style={{ width: '35%' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom centred feather accent */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-20 opacity-25"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-16 h-px bg-primary rounded-full" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M20.24 4.76a6 6 0 00-8.49 0L3 13.51V21h7.49l8.75-8.75a6 6 0 000-8.49z"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div className="w-16 h-px bg-primary rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}