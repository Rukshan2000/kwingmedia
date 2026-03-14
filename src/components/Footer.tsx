import React from 'react';
export function Footer() {
  return (
    <footer className="bg-accent text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary">

                <path d="M2 22L12 2L22 22L12 16L2 22Z" fill="currentColor" />
              </svg>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Kewings Media
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Elevating experiences with innovation and precision. Your premium
              partner for events, production, IT, and advertising.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(
                (item) =>
                <li key={item}>
                    <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300">

                      {item}
                    </a>
                  </li>

              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Event Management</li>
              <li className="text-gray-400">Audio & Video Production</li>
              <li className="text-gray-400">IT Solutions</li>
              <li className="text-gray-400">Advertising & Branding</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Kwings Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300">

              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300">

              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}