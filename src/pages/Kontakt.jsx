import { useFadeInUp } from '../hooks/useFadeInUp'

export default function Kontakt() {
  const ref = useFadeInUp()

  return (
    <>
      <header className="page-header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Kontakt
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Schreiben Sie uns</h1>
        </div>
      </header>

      <main className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="fade-in-up grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left sidebar — 2 cols */}
            <aside className="lg:col-span-2 space-y-6">
              <article className="card">
                <h2 className="font-serif text-xl font-bold text-navy-800 mb-5">Kontaktdaten</h2>
                <address className="not-italic space-y-4 font-sans text-sm text-navy-600">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-navy-800">Ring der Steuerzahler e.V.</div>
                      <div>Bankplatz 1</div>
                      <div>38100 Braunschweig</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                    <a href="tel:+4953161831101" className="hover:text-gold-600 transition-colors">
                      (0531) 618 311 01
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>Fax: (0531) 618 311 03</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@rds-steuern.de" className="hover:text-gold-600 transition-colors">
                      info@rds-steuern.de
                    </a>
                  </div>
                </address>
              </article>

              <div className="bg-navy-50 rounded-[10px] p-5">
                <p className="font-sans text-sm text-navy-600 leading-relaxed">
                  <strong className="text-navy-800">Hinweis:</strong> Bitte wenden Sie sich für
                  ortsnahe Termine an die für Sie zuständige Beratungsstelle. Auskünfte zu
                  Beratungsstellen in Ihrer Nähe erhalten Sie telefonisch oder per E-Mail.
                </p>
              </div>
            </aside>

            {/* Right — contact form placeholder — 3 cols */}
            <section className="lg:col-span-3" aria-label="Kontaktformular">
              {/*
               * PLACEHOLDER — Kontaktformular
               *
               * TODO: Für die produktive Nutzung muss dieses Formular folgendes beinhalten:
               *   1. Backend-Integration via Formspree (https://formspree.io) oder EmailJS
               *   2. DSGVO-Einwilligungscheckbox (Datenschutzerklärung)
               *   3. Spam-Schutz (reCAPTCHA v3 oder Honeypot-Feld)
               *   4. Serverseitige Validierung der Eingabefelder
               *
               * Beispiel Formspree:
               *   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
               */}
              <div className="border-2 border-dashed border-warm-gray rounded-[10px] p-10 text-center bg-white flex flex-col items-center justify-center min-h-[360px]">
                <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">Kontaktformular</h2>
                <p className="font-sans text-sm text-navy-500 leading-relaxed max-w-sm mb-6">
                  Das Online-Formular steht in Kürze zur Verfügung. Bitte kontaktieren Sie uns
                  bis dahin direkt per E-Mail.
                </p>
                <a
                  href="mailto:info@rds-steuern.de"
                  className="btn-gold"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-Mail senden
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
