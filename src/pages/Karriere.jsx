import { useFadeInUp } from '../hooks/useFadeInUp'
import { useLang } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'

export default function Karriere() {
  const { t } = useLang()
  const ref = useFadeInUp()

  return (
    <>
      <PageHeader badge={t.karriere.badge} heading={t.karriere.heading} />

      <div className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div ref={ref} className="fade-in-up">
            <article className="card border-t-4 border-t-gold-500">
              <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 text-xs font-sans font-semibold tracking-wide px-3 py-1 rounded-full mb-5">
                {t.karriere.job_badge}
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy-800 mb-2">{t.karriere.job_title}</h2>
              <p className="font-sans text-sm text-navy-400 mb-6">{t.karriere.job_sub}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-navy-50 rounded-lg p-4">
                  <div className="font-sans text-xs text-navy-400 uppercase tracking-wide mb-1">{t.karriere.type_label}</div>
                  <div className="font-sans text-sm font-semibold text-navy-800">{t.karriere.type_value}</div>
                </div>
                <div className="bg-navy-50 rounded-lg p-4">
                  <div className="font-sans text-xs text-navy-400 uppercase tracking-wide mb-1">{t.karriere.hours_label}</div>
                  <div className="font-sans text-sm font-semibold text-navy-800">{t.karriere.hours_value}</div>
                </div>
              </div>

              <div className="border-t border-warm-gray pt-6">
                <p className="font-sans text-sm text-navy-600 leading-relaxed mb-6">{t.karriere.body}</p>

                <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
                  <p className="font-sans text-sm text-gold-800">
                    <strong>{t.karriere.note}</strong>
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
                  {t.karriere.cta}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
