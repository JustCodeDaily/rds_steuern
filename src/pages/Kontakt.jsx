import { useFadeInUp } from '../hooks/useFadeInUp'
import { useLang } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function FaxIcon() {
  return (
    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function EmailIcon({ size = 'w-5 h-5' }) {
  return (
    <svg className={`${size} text-gold-500 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export default function Kontakt() {
  const { t } = useLang()
  const cardsRef = useFadeInUp()
  const formRef  = useFadeInUp()

  return (
    <>
      <PageHeader badge={t.kontakt.badge} heading={t.kontakt.heading} />

      <div className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Location cards — 2 columns */}
          <div ref={cardsRef} className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Braunschweig */}
            <article className="card border-t-4 border-t-gold-500 overflow-hidden p-0">
              <div className="p-6 space-y-4">
                <h2 className="font-serif text-xl font-bold text-navy-800">Braunschweig</h2>
                <address className="not-italic space-y-3 font-sans text-sm text-navy-600">
                  <div className="flex items-start gap-3">
                    <LocationIcon />
                    <div>
                      <div>Bankplatz 1</div>
                      <div>38100 Braunschweig</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon />
                    <a href="tel:+495314632" className="hover:text-gold-600 transition-colors">
                      Tel. (05 31) / 4 63 25
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon />
                    <div>
                      <div className="font-semibold text-navy-700 mb-1">{t.kontakt.hours_heading}</div>
                      <div>{t.kontakt.mon_fri}: 9–14 Uhr</div>
                      <div>{t.kontakt.tue_thu}: 9–17 Uhr</div>
                    </div>
                  </div>
                </address>
              </div>
              <div className="h-52 bg-navy-100">
                <iframe
                  title="Standort Braunschweig — Bankplatz 1"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8!2d10.5246!3d52.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff4b87f4ae5e1%3A0x0!2sBankplatz+1%2C+38100+Braunschweig!5e0!3m2!1sde!2sde!4v1000000000000!5m2!1sde!2sde"
                  className="w-full h-full border-0"
                  width="400"
                  height="208"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps: Bankplatz 1, 38100 Braunschweig"
                />
              </div>
            </article>

            {/* Bonn */}
            <article className="card border-t-4 border-t-gold-500 overflow-hidden p-0">
              <div className="p-6 space-y-4">
                <h2 className="font-serif text-xl font-bold text-navy-800">Bonn</h2>
                <address className="not-italic space-y-3 font-sans text-sm text-navy-600">
                  <div className="flex items-start gap-3">
                    <LocationIcon />
                    <div>
                      <div>Hermannstraße 17</div>
                      <div>53225 Bonn (Beuel-Mitte)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon />
                    <a href="tel:+4922897638270" className="hover:text-gold-600 transition-colors">
                      Tel. (02 28) / 976 382 70
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaxIcon />
                    <span>Fax (02 28) / 976 382 71</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon />
                    <div>
                      <div className="font-semibold text-navy-700 mb-1">{t.kontakt.hours_heading}</div>
                      <div>{t.kontakt.mon_fri}: 9:00–14:00</div>
                      <div>{t.kontakt.tue_thu}: 10:00–18:00</div>
                    </div>
                  </div>
                </address>
              </div>
              <div className="h-52 bg-navy-100">
                <iframe
                  title="Standort Bonn — Hermannstraße 17"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.0!2d7.1238!3d50.7477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee6f2c3c0f8cd%3A0x0!2sHermannstra%C3%9Fe+17%2C+53225+Bonn!5e0!3m2!1sde!2sde!4v1000000000001!5m2!1sde!2sde"
                  className="w-full h-full border-0"
                  width="400"
                  height="208"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps: Hermannstraße 17, 53225 Bonn"
                />
              </div>
            </article>
          </div>

          {/* Contact form placeholder + note row */}
          <div ref={formRef} className="fade-in-up grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Note — 2 cols */}
            <aside className="lg:col-span-2">
              <div className="bg-navy-50 rounded-[10px] p-5 h-full">
                <p className="font-sans text-sm text-navy-600 leading-relaxed">{t.kontakt.note}</p>
                <div className="mt-5 pt-5 border-t border-navy-200 space-y-2 font-sans text-sm text-navy-600">
                  <div className="flex items-center gap-2">
                    <EmailIcon size="w-4 h-4" />
                    <a href="mailto:info@rds-steuern.de" className="hover:text-gold-600 transition-colors">
                      info@rds-steuern.de
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Form placeholder — 3 cols */}
            <section className="lg:col-span-3" aria-label="Kontaktformular">
              {/*
               * PLACEHOLDER — Kontaktformular
               *
               * TODO: Für die produktive Nutzung muss dieses Formular folgendes beinhalten:
               *   1. Backend-Integration via Formspree (https://formspree.io) oder EmailJS
               *   2. DSGVO-Einwilligungscheckbox (Datenschutzerklärung)
               *   3. Spam-Schutz (reCAPTCHA v3 oder Honeypot-Feld)
               *   4. Serverseitige Validierung der Eingabefelder
               */}
              <div className="border-2 border-dashed border-warm-gray rounded-[10px] p-10 text-center bg-white flex flex-col items-center justify-center min-h-[280px]">
                <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mb-4">
                  <EmailIcon size="w-7 h-7" />
                </div>
                <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">{t.kontakt.form_heading}</h2>
                <p className="font-sans text-sm text-navy-500 leading-relaxed max-w-sm mb-6">
                  {t.kontakt.form_body}
                </p>
                <a href="mailto:info@rds-steuern.de" className="btn-gold">
                  <EmailIcon size="w-4 h-4" />
                  {t.kontakt.form_cta}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
