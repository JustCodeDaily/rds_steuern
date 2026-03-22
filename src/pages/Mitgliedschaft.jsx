import { Link } from 'react-router-dom'
import { useFadeInUp } from '../hooks/useFadeInUp'

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WarnIcon() {
  return (
    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function Mitgliedschaft() {
  const ref = useFadeInUp()

  return (
    <>
      <header className="page-header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Mitgliedschaft
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Werden Sie Mitglied</h1>
        </div>
      </header>

      <main className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">

          <div ref={ref} className="fade-in-up space-y-8">

            {/* Why card */}
            <article className="card">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-3">Warum Mitglied werden?</h2>
              <p className="font-sans text-sm text-navy-600 leading-relaxed">
                Als Mitglied des Ring der Steuerzahler e.V. profitieren Sie von einem umfassenden
                Beratungs- und Bearbeitungsservice rund um Ihre Steuererklärung — zu einem fairen
                Jahresbeitrag ohne versteckte Kosten. Unsere erfahrenen Berater kümmern sich
                persönlich um Ihre Steuerangelegenheiten und maximieren Ihre Erstattung.
              </p>
            </article>

            {/* Grundsätzlich */}
            <article className="card border-l-4 border-l-green-500">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">Grundsätzlich möglich</h2>
              <ul className="space-y-3">
                {[
                  'Einkünfte aus nichtselbstständiger Arbeit (Arbeitslohn)',
                  'Renteneinkünfte und Pensionen',
                  'Unterhaltsleistungen',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-navy-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Eingeschränkt */}
            <article className="card border-l-4 border-l-amber-400">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">Eingeschränkt möglich</h2>
              <p className="font-sans text-xs text-navy-400 mb-4">
                Nur im Rahmen der gesetzlichen Befugnisgrenzen (§ 4 Nr. 11 StBerG)
              </p>
              <ul className="space-y-3">
                {[
                  'Einkünfte aus Kapitalvermögen (Abgeltungsteuer)',
                  'Einkünfte aus Vermietung und Verpachtung',
                  'Sonstige Einkünfte',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-navy-700">
                    <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <WarnIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-sans text-xs text-amber-800">
                  <strong>Hinweis:</strong> Die Beratungsbefugnis ist auf Mitglieder begrenzt, deren
                  Einkünfte (außer Arbeitslohn, Renten etc.) 18.000 € (Ledige) bzw. 36.000 € (Ehepaare)
                  nicht übersteigen.
                </p>
              </div>
            </article>

            {/* Pricing */}
            <article className="card border-t-4 border-t-gold-500">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-6 text-center">Mitgliedsbeitrag</h2>

              <div className="text-center mb-6">
                <div className="font-serif text-5xl font-bold text-navy-800">Ab 120€</div>
                <div className="font-sans text-sm text-navy-400 mt-1">pro Jahr</div>
                <div className="font-sans text-sm text-navy-500 mt-2">Bis max. 450€/Jahr</div>
              </div>

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

              <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6 text-center">
                <p className="font-sans text-sm text-gold-800">
                  Einmalige Aufnahmegebühr: <strong>20€</strong>
                </p>
              </div>

              <p className="font-sans text-xs text-navy-400 text-center leading-relaxed">
                Der genaue Beitrag richtet sich nach Ihrem Einkommen. Alle Leistungen sind im
                Mitgliedsbeitrag enthalten — keine Zusatzkosten.
              </p>
            </article>

            {/* CTA */}
            <div className="text-center pt-4">
              <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
                Jetzt Mitglied werden <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
