import React from 'react';
import { motion } from 'framer-motion';
import {
  InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon,
  MailIcon, PhoneIcon, MapPinIcon,
} from 'lucide-react';

const contactItems = [
  { icon: MailIcon,    label: 'Email Us',  value: 'hello@kewingsmedia.com' },
  { icon: PhoneIcon,   label: 'Call Us',   value: '+1 (555) 123-4567' },
  { icon: MapPinIcon,  label: 'Visit Us',  value: '100 Innovation Drive, Suite 400' },
];

const socials = [InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon];

// Large background wing — sweeps from bottom-left across
function WingBgLeft() {
  return (
    <div className="absolute left-[-80px] bottom-[-60px] w-[580px] h-[580px] pointer-events-none z-0">
      <motion.svg viewBox="0 0 580 580" fill="none"
        animate={{ y: [0, -14, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path d="M60 520 C160 390 320 250 530 60 C340 200 170 360 40 540Z"
          fill="currentColor" style={{ opacity: 0.05 }}/>
        {[0,1,2,3,4,5,6,7].map(i => (
          <motion.line key={i}
            x1={72+i*40} y1={508-i*42}
            x2={512-i*20} y2={78+i*32}
            stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"
            style={{ opacity: 0.09 }}
            animate={{ opacity: [0.09,0.15,0.09] }}
            transition={{ duration: 4+i*0.3, repeat: Infinity, ease: 'easeInOut', delay: i*0.14 }}
          />
        ))}
        {[0,1,2,3,4].map(i => (
          <motion.path key={i}
            d={`M${85+i*38} ${495-i*40} Q${290+i*8} ${270-i*8} ${498-i*18} ${90+i*28}`}
            stroke="currentColor" strokeWidth="0.55" fill="none" strokeLinecap="round"
            style={{ opacity: 0.065 }}
            animate={{ opacity: [0.065,0.11,0.065] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i*0.2 }}
          />
        ))}
        {[[532,62],[514,102],[496,140],[478,176]].map(([cx,cy],i) => (
          <motion.circle key={i} cx={cx} cy={cy} r="2.4" fill="currentColor"
            style={{ opacity: 0.13 }}
            animate={{ opacity: [0.13,0.22,0.13] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i*0.22 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

// Small corner feather — top right
function CornerFeather() {
  return (
    <div className="absolute right-10 top-10 w-[150px] h-[150px] pointer-events-none z-0 opacity-[0.055]">
      <motion.svg viewBox="0 0 150 150" fill="none"
        animate={{ rotate: [0, 2.5, 0], y: [0, -7, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full text-primary"
      >
        <path d="M138 14 C98 54 58 98 14 138" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        {[0,1,2,3,4,5].map(i => (
          <React.Fragment key={i}>
            <line x1={134-i*19} y1={18+i*19} x2={120-i*17} y2={10+i*17}
              stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
            <line x1={134-i*19} y1={18+i*19} x2={143-i*17} y2={32+i*17}
              stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
          </React.Fragment>
        ))}
      </motion.svg>
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-white overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <WingBgLeft />
      <CornerFeather />

      {/* Top rule */}
      <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.13) 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* ── LEFT: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-primary opacity-60" />
              <span className="text-xs uppercase text-primary font-semibold tracking-[0.22em]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Get In Touch
              </span>
            </div>

            <h2 className="font-bold text-accent leading-[1.06] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3rem)', letterSpacing: '-0.01em' }}>
              Let's Create{' '}
              <span className="text-primary relative inline-block" style={{ fontStyle: 'italic' }}>
                Together
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
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-primary opacity-30" />
              <div className="w-10 h-[2px] bg-primary opacity-60 rounded-full" />
            </div>

            <p className="text-gray-500 mb-12 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.97rem', lineHeight: 1.8 }}>
              Ready to elevate your next project? Reach out to our team of
              experts to discuss how we can bring your vision to life.
            </p>

            {/* Contact rows */}
            <div className="space-y-5 mb-12">
              {contactItems.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="group flex items-center gap-5"
                >
                  {/* Icon block with feather spine */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-11 h-11 flex items-center justify-center rounded-sm transition-colors duration-300 group-hover:bg-primary"
                      style={{
                        background: 'rgba(var(--primary-rgb,99,102,241),0.07)',
                        border: '1px solid rgba(var(--primary-rgb,99,102,241),0.10)',
                      }}
                    >
                      <Icon size={17} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Mini spine tick below icon */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[3px]">
                      <div className="w-px h-2 bg-primary opacity-15" />
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {label}
                    </p>
                    <p className="text-accent font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem' }}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label="Social Media"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-sm border text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
                  style={{ borderColor: 'rgba(var(--primary-rgb,99,102,241),0.3)' }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Floating feather footer accent */}
            <motion.div
              className="flex items-center gap-3 mt-14 opacity-20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-12 h-px bg-primary rounded-full" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M20.24 4.76a6 6 0 00-8.49 0L3 13.51V21h7.49l8.75-8.75a6 6 0 000-8.49z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="w-12 h-px bg-primary rounded-full" />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Form card */}
            <div
              className="relative bg-white rounded-sm overflow-hidden"
              style={{
                boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {/* Top shimmer bar */}
              <div className="relative h-[3px] bg-primary overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white opacity-40"
                  animate={{ x: ['-100%', '220%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '35%' }}
                />
              </div>

              {/* Wing quill watermark inside form */}
              <div className="absolute right-4 bottom-20 w-40 h-40 pointer-events-none opacity-[0.035]">
                <svg viewBox="0 0 140 140" fill="none" className="w-full h-full text-primary">
                  {[0,1,2,3,4].map(i => (
                    <line key={i} x1={132-i*24} y1={8+i*24} x2={8+i*14} y2={118-i*18}
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  ))}
                </svg>
              </div>

              <div className="p-8 md:p-10">
                {/* Form eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-5 h-px bg-primary opacity-50" />
                  <span className="text-[11px] uppercase text-primary tracking-[0.2em]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Send a Message
                  </span>
                </div>

                <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { id: 'name',  label: 'Name',  type: 'text',  placeholder: 'John Doe' },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
                    ].map(f => (
                      <div key={f.id}>
                        <label htmlFor={f.id}
                          className="block text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-2"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {f.label}
                        </label>
                        <input type={f.type} id={f.id} placeholder={f.placeholder}
                          className="w-full px-4 py-3 rounded-sm border bg-gray-50 outline-none transition-all text-accent placeholder-gray-300 focus:bg-white focus:border-primary"
                          style={{
                            fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem',
                            borderColor: 'rgba(0,0,0,0.09)',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="subject"
                      className="block text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Subject
                    </label>
                    <input type="text" id="subject" placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-sm border bg-gray-50 outline-none transition-all text-accent placeholder-gray-300 focus:bg-white focus:border-primary"
                      style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem',
                        borderColor: 'rgba(0,0,0,0.09)',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Message
                    </label>
                    <textarea id="message" rows={4} placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-sm border bg-gray-50 outline-none transition-all text-accent placeholder-gray-300 focus:bg-white focus:border-primary resize-none"
                      style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem',
                        borderColor: 'rgba(0,0,0,0.09)',
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="group relative w-full py-4 bg-primary text-white font-medium rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                    style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.06em', fontSize: '0.88rem' }}
                  >
                    {/* Shimmer on button */}
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-white opacity-80">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--primary-rgb,99,102,241),0.12) 50%, transparent)' }}
      />
    </section>
  );
}