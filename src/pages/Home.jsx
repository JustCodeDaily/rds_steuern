import { Link } from 'react-router-dom'
import { useFadeInUp } from '../hooks/useFadeInUp'

// ── Icons ─────────────────────────────────────────────────────────────────────
function ShieldIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function CheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function SpeakerIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M15.536 8.464a5 5 0 010 7.072M12 6l-4 4H4v4h4l4 4V6zM18.364 5.636a9 9 0 010 12.728" />
    </svg>
  )
}

function LocationIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

// ── Service card data ─────────────────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Steuererklärung',
    desc:  'Professionelle Erstellung Ihrer Einkommensteuererklärung — vollständig und fristgerecht.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Bescheid-Prüfung',
    desc:  'Sorgfältige Prüfung Ihres Steuerbescheids und Einspruchsführung bei Unstimmigkeiten.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Individuelle Beratung',
    desc:  'Persönliche Beratung zu Ihrer steuerlichen Situation — auf Wunsch auch auf Englisch.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Familie & Kinder',
    desc:  'Kindergeld, Kinderfreibeträge, Elterngeld und steuerliche Entlastungen für Familien.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Auslandseinkünfte',
    desc:  'Beratung zu Einkünften aus dem Ausland, Doppelbesteuerungsabkommen und mehr.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Renten & Pensionen',
    desc:  'Steuerliche Behandlung von Renten, Pensionen und Versorgungsbezügen.',
  },
]

// ── Trust strip data ──────────────────────────────────────────────────────────
const trustItems = [
  {
    label: 'Zugelassen',
    sub: 'OFD Münster',
    icon: <ShieldIcon className="w-6 h-6" />,
  },
  {
    label: '2 Standorte',
    sub: 'Braunschweig & Bonn',
    icon: <LocationIcon className="w-6 h-6" />,
  },
  {
    label: 'English Service',
    sub: 'Beratung auf Englisch',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    label: 'ELSTER',
    sub: 'Elektronische Abgabe',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionHeading({ children, accent }) {
  const ref = useFadeInUp()
  return (
    <div ref={ref} className="fade-in-up text-center mb-10">
      <h2 className="section-heading">{children}</h2>
      {accent && <span className="gold-underline" />}
    </div>
  )
}

export default function Home() {
  const heroRef       = useFadeInUp()
  const servicesRef   = useFadeInUp()
  const memberRef     = useFadeInUp()
  const locationsRef  = useFadeInUp()
  const radioRef      = useFadeInUp()
  const ctaRef        = useFadeInUp()

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative bg-navy-gradient min-h-[85vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Gold top line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gold-gradient" />

        {/* Cross-pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 V40 M0 20 H40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cross)" />
          </svg>
        </div>

        <div ref={heroRef} className="fade-in-up relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-sans font-medium tracking-wide px-4 py-2 rounded-full mb-8">
            <ShieldIcon className="w-4 h-4" />
            Zugelassen gemäß §4 Nr. 11 StBerG
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ihr zuverlässiger Partner rund um Ihre{' '}
            <span className="text-gold-400">Steuerfragen</span>
          </h1>

          <p className="font-sans text-lg text-navy-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Wir erstellen Ihre Steuererklärung professionell und persönlich — in Braunschweig und Bonn.
            Auch Beratung in englischer Sprache.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-gold text-base px-8 py-4">
              Termin vereinbaren <ArrowRightIcon />
            </Link>
            <Link to="/leistungen" className="btn-outline-light text-base px-8 py-4">
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-white border-b border-warm-gray py-8" aria-label="Vertrauenspunkte">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-warm-gray">
            {trustItems.map(({ label, sub, icon }) => (
              <div key={label} className="flex items-center gap-4 px-6 py-4 md:py-2">
                <div className="text-gold-500 flex-shrink-0">{icon}</div>
                <div>
                  <div className="font-sans font-bold text-navy-800 text-sm">{label}</div>
                  <div className="font-sans text-xs text-navy-400">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="py-20 bg-cream" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading accent>Unsere Leistungen</SectionHeading>

          <div ref={servicesRef} className="fade-in-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }) => (
              <article key={title} className="service-card">
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 text-navy-600">
                  {icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-800 mb-2">{title}</h3>
                <p className="font-sans text-sm text-navy-500 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/leistungen" className="btn-outline">
              Alle Leistungen ansehen <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Membership teaser ── */}
      <section className="py-20 bg-white" aria-labelledby="membership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={memberRef} className="fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left text */}
            <div>
              <div className="inline-block bg-gold-50 text-gold-700 text-xs font-sans font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                All-inclusive Service
              </div>
              <h2 id="membership-heading" className="font-serif text-3xl md:text-4xl font-bold text-navy-800 mb-3">
                Faire Mitgliedsbeiträge
              </h2>
              <span className="block mb-6 h-[3px] w-12 bg-gold-gradient rounded-full" />
              <p className="font-sans text-navy-600 leading-relaxed mb-8">
                Werden Sie Mitglied und profitieren Sie von unserem umfassenden Service zu einem fairen
                Jahresbeitrag. Keine versteckten Kosten — alles inklusive.
              </p>
              <ul className="space-y-3 mb-8">
                {['Steuererklärung', 'Bescheid-Prüfung', 'Persönliche Beratung', 'ELSTER-Abgabe'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-navy-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3 text-green-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/mitgliedschaft" className="btn-primary">
                Jetzt Mitglied werden <ArrowRightIcon />
              </Link>
            </div>

            {/* Right pricing card */}
            <div className="card border-t-4 border-t-gold-500">
              <div className="text-center mb-6">
                <div className="font-sans text-sm text-navy-400 mb-2">Jahresbeitrag</div>
                <div className="font-serif text-5xl font-bold text-navy-800">Ab 120€</div>
                <div className="font-sans text-sm text-navy-400 mt-1">/Jahr</div>
                <div className="font-sans text-sm text-navy-500 mt-3">Bis max. 450€/Jahr</div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-sans text-navy-400 mb-2">
                  <span>120€</span>
                  <span>450€</span>
                </div>
                <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: '27%', background: 'linear-gradient(90deg, #d4a84a 0%, #e7b83f 100%)' }}
                  />
                </div>
              </div>

              <div className="bg-gold-50 rounded-lg p-4 mb-4">
                <p className="font-sans text-xs text-gold-700 text-center">
                  Einmalige Aufnahmegebühr: 20€
                </p>
              </div>

              <Link to="/mitgliedschaft" className="btn-gold w-full justify-center">
                Mitgliedschaft anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── International banner ── */}
      <section className="bg-navy-800 py-14" aria-label="Internationaler Service">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Auch für ausländische Mitbürger
          </h2>
          <p className="font-sans text-navy-200 leading-relaxed">
            Wir bieten unsere Beratungsleistungen auch in englischer Sprache an — für internationale
            Fachkräfte, Expats und alle, die sich auf Deutsch nicht sicher fühlen.
          </p>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="py-20 bg-cream" aria-labelledby="locations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading accent>Unsere Standorte</SectionHeading>

          <div ref={locationsRef} className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Braunschweig */}
            <article className="card overflow-hidden p-0">
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">Braunschweig</h3>
                <p className="font-sans text-sm text-navy-500 mb-4">Bankplatz 1, 38100 Braunschweig</p>
                <div className="flex items-center gap-2 text-sm text-navy-600 font-sans">
                  <PhoneIcon className="w-4 h-4 text-gold-500" />
                  <a href="tel:+4953161831101" className="hover:text-gold-600 transition-colors">
                    (0531) 618 311 01
                  </a>
                </div>
              </div>
              <div className="h-52 bg-navy-100">
                <iframe
                  title="Standort Braunschweig — Bankplatz 1"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8!2d10.5246!3d52.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff4b87f4ae5e1%3A0x0!2sBankplatz+1%2C+38100+Braunschweig!5e0!3m2!1sde!2sde!4v1000000000000!5m2!1sde!2sde"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps Karte: Bankplatz 1, 38100 Braunschweig"
                />
              </div>
            </article>

            {/* Bonn */}
            <article className="card overflow-hidden p-0">
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">Bonn</h3>
                <p className="font-sans text-sm text-navy-500 mb-4">Adresse auf Anfrage</p>
                <div className="flex items-center gap-2 text-sm text-navy-600 font-sans">
                  <PhoneIcon className="w-4 h-4 text-gold-500" />
                  <a href="mailto:info@rds-steuern.de" className="hover:text-gold-600 transition-colors">
                    info@rds-steuern.de
                  </a>
                </div>
              </div>
              <div className="h-52 bg-navy-100 flex items-center justify-center">
                <div className="text-center text-navy-400">
                  <LocationIcon className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="font-sans text-sm">Adresse auf Anfrage</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Radio / Podcast teaser ── */}
      <section className="py-12 bg-white" aria-label="Radio Okerwelle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={radioRef} className="fade-in-up bg-navy-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0">
              <SpeakerIcon className="w-8 h-8 text-gold-400" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">Radio Okerwelle</h3>
              <p className="font-sans text-sm text-navy-500">
                Hören Sie unsere Sendungen zu Steuerthemen für Rentner, Arbeitnehmer und mehr.
              </p>
            </div>
            <Link to="/radio" className="btn-primary flex-shrink-0">
              Sendungen anhören <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-navy-gradient" aria-label="Call to action">
        <div ref={ctaRef} className="fade-in-up max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für Ihre Steuererklärung?
          </h2>
          <p className="font-sans text-navy-200 mb-10">
            Kontaktieren Sie uns noch heute — wir helfen Ihnen schnell und unkompliziert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-gold text-base px-8 py-4">
              Kontakt aufnehmen <ArrowRightIcon />
            </Link>
            <Link to="/mitgliedschaft" className="btn-outline-light text-base px-8 py-4">
              Mitglied werden
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
