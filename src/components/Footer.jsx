import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-navy-900 text-xl font-bold leading-none">R</span>
              </div>
              <div className="leading-tight">
                <div className="font-sans font-bold text-[15px] text-white">Ring der Steuerzahler e.V.</div>
                <div className="font-sans text-[11px] text-navy-300 tracking-widest uppercase">Lohnsteuerhilfeverein</div>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed">
              Professionelle Steuerberatung für Arbeitnehmer, Rentner und Familien — in Braunschweig und Bonn.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-4 text-white">Kontakt</h3>
            <address className="not-italic space-y-2 text-sm text-navy-300">
              <p>Ring der Steuerzahler e.V.</p>
              <p>Bankplatz 1, 38100 Braunschweig</p>
              <p>
                <a href="tel:+4953161831101" className="hover:text-gold-400 transition-colors">
                  (0531) 618 311 01
                </a>
              </p>
              <p>
                <a href="mailto:info@rds-steuern.de" className="hover:text-gold-400 transition-colors">
                  info@rds-steuern.de
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-400">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span>© 2026 Ring der Steuerzahler e.V. · VR 201126 · USt-ID: DE264029367</span>
            <span className="hidden sm:inline">·</span>
            <Link to="/impressum" className="hover:text-gold-400 transition-colors">Impressum</Link>
            <span>·</span>
            <Link to="/datenschutz" className="hover:text-gold-400 transition-colors">Datenschutz</Link>
          </div>
          <div className="text-navy-500">OFD Münster S 0934 B – 358 St 31 – 41</div>
        </div>
      </div>
    </footer>
  )
}
