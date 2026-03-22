import { useFadeInUp } from '../hooks/useFadeInUp'

export default function Karriere() {
  const ref = useFadeInUp()

  return (
    <>
      <header className="page-header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Karriere
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Werden Sie Teil unseres Teams</h1>
        </div>
      </header>

      <main className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div ref={ref} className="fade-in-up">
            <article className="card border-t-4 border-t-gold-500">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 text-xs font-sans font-semibold tracking-wide px-3 py-1 rounded-full mb-5">
                Stellenangebot
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy-800 mb-2">
                Steuerfachangestellte/r
              </h2>
              <p className="font-sans text-sm text-navy-400 mb-6">
                oder Mitarbeiter/in mit ähnlicher Ausbildung
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-navy-50 rounded-lg p-4">
                  <div className="font-sans text-xs text-navy-400 uppercase tracking-wide mb-1">Anstellungsart</div>
                  <div className="font-sans text-sm font-semibold text-navy-800">Angestelltenverhältnis</div>
                </div>
                <div className="bg-navy-50 rounded-lg p-4">
                  <div className="font-sans text-xs text-navy-400 uppercase tracking-wide mb-1">Arbeitszeit</div>
                  <div className="font-sans text-sm font-semibold text-navy-800">Voll- oder Teilzeit</div>
                </div>
              </div>

              <div className="border-t border-warm-gray pt-6">
                <p className="font-sans text-sm text-navy-600 leading-relaxed mb-6">
                  Wir sind ein wachsender Lohnsteuerhilfeverein mit Standorten in Braunschweig und Bonn
                  und suchen engagierte Mitarbeiterinnen und Mitarbeiter, die unser Team verstärken.
                  Wenn Sie eine Ausbildung als Steuerfachangestellte/r oder eine vergleichbare Qualifikation
                  mitbringen, freuen wir uns auf Ihre Bewerbung.
                </p>

                <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
                  <p className="font-sans text-sm text-gold-800">
                    <strong>Hinweis:</strong> Wir bitten um Bewerbung per E-Mail.
                  </p>
                </div>

                <a
                  href="mailto:info@rds-steuern.de?subject=Bewerbung%20Steuerfachangestellte%2Fr"
                  className="btn-primary"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Bewerbung senden
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
