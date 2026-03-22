import { Link } from 'react-router-dom'
import { useFadeInUp } from '../hooks/useFadeInUp'

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

const group1 = [
  { title: 'Einkommensteuererklärung',    desc: 'Vollständige Erstellung Ihrer jährlichen Einkommensteuererklärung.' },
  { title: 'Steuererstattung berechnen',  desc: 'Wir ermitteln Ihre voraussichtliche Erstattung oder Nachzahlung.' },
  { title: 'Elektronische Abgabe (ELSTER)', desc: 'Übermittlung Ihrer Steuererklärung per ELSTER an das Finanzamt.' },
  { title: 'Steuerklassenwahl',           desc: 'Beratung zur optimalen Steuerklassenwahl für Ehepaare.' },
  { title: 'Steuerbescheid-Prüfung',      desc: 'Eingehende Prüfung Ihres Steuerbescheids auf Fehler und Unstimmigkeiten.' },
  { title: 'Einspruchsführung',           desc: 'Fristgerechte Einlegung von Einsprüchen gegen fehlerhafte Bescheide.' },
  { title: 'Lohnsteuerermäßigungsanträge', desc: 'Antrag auf Eintrag von Freibeträgen auf der Lohnsteuerkarte.' },
  { title: 'NV-Bescheinigung',            desc: 'Beantragung einer Nichtveranlagungsbescheinigung beim Finanzamt.' },
  { title: 'Kindergeld-Antrag',           desc: 'Unterstützung bei der Beantragung und Überprüfung von Kindergeld.' },
]

const group2 = [
  { title: 'Renteneinkünfte & Pensionen', desc: 'Steuerliche Behandlung von Renten, Pensionen und Versorgungsbezügen.' },
  { title: 'Arbeitnehmerberatung',        desc: 'Umfassende Beratung zu Werbungskosten, Reisekosten und Arbeitszimmer.' },
  { title: 'Vermietung & Verpachtung',    desc: 'Steuerliche Optimierung von Mieteinnahmen und Werbungskosten.' },
  { title: 'Abgeltungsteuer',             desc: 'Beratung zur Besteuerung von Kapitalerträgen und Dividenden.' },
  { title: 'Unterhalt & Heimunterbringung', desc: 'Absetzbarkeit von Unterhaltsleistungen und Heimkosten.' },
  { title: 'Familie & Krankheitskosten',  desc: 'Außergewöhnliche Belastungen, Kinderfreibeträge und mehr.' },
  { title: 'Riester- & Rürup-Altersvorsorge', desc: 'Förderungen und steuerliche Abzugsmöglichkeiten der Altersvorsorge.' },
  { title: 'Elterngeld',                  desc: 'Beratung zu Elterngeld und dessen steuerlichen Auswirkungen.' },
  { title: 'Auslandseinkünfte',           desc: 'Doppelbesteuerungsabkommen, Auslandstätigkeiten, internationale Renten.' },
]

function ServiceCard({ title, desc, accent }) {
  return (
    <article className={`bg-white border border-warm-gray rounded-[10px] p-6 hover:shadow-md transition-shadow duration-200 ${accent ? 'border-t-4 border-t-gold-500' : ''}`}>
      <h3 className="font-serif text-base font-bold text-navy-800 mb-2">{title}</h3>
      <p className="font-sans text-sm text-navy-500 leading-relaxed">{desc}</p>
    </article>
  )
}

export default function Leistungen() {
  const group1Ref = useFadeInUp()
  const group2Ref = useFadeInUp()
  const ctaRef    = useFadeInUp()

  return (
    <>
      {/* Page header */}
      <header className="page-header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Leistungsspektrum
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Unsere Leistungen</h1>
        </div>
      </header>

      <main className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Group 1 */}
          <section aria-labelledby="group1-heading">
            <h2 id="group1-heading" className="font-serif text-2xl font-bold text-navy-800 mb-2">
              Rund um Ihre Steuererklärung
            </h2>
            <span className="block mb-8 h-[3px] w-12 bg-gold-gradient rounded-full" />
            <div ref={group1Ref} className="fade-in-up grid grid-cols-1 sm:grid-cols-2 gap-5">
              {group1.map(s => <ServiceCard key={s.title} {...s} />)}
            </div>
          </section>

          {/* Group 2 */}
          <section aria-labelledby="group2-heading">
            <h2 id="group2-heading" className="font-serif text-2xl font-bold text-navy-800 mb-2">
              Individuelle Beratung
            </h2>
            <span className="block mb-8 h-[3px] w-12 bg-gold-gradient rounded-full" />
            <div ref={group2Ref} className="fade-in-up grid grid-cols-1 sm:grid-cols-2 gap-5">
              {group2.map(s => <ServiceCard key={s.title} {...s} accent />)}
            </div>
          </section>

          {/* CTA */}
          <div ref={ctaRef} className="fade-in-up bg-navy-800 rounded-2xl p-10 text-center text-white">
            <h2 className="font-serif text-2xl font-bold mb-3">Bereit anzufangen?</h2>
            <p className="font-sans text-navy-200 mb-8 max-w-xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch oder werden Sie direkt Mitglied.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-gold">
                Kontakt aufnehmen <ArrowRightIcon />
              </Link>
              <Link to="/mitgliedschaft" className="btn-outline-light">
                Mitglied werden
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
