import { Link } from 'react-router-dom'
import { useFadeInUp } from '../hooks/useFadeInUp'
import { useLang } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'

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
  const { t } = useLang()
  const ref = useFadeInUp()

  return (
    <>
      <PageHeader badge={t.mitgliedschaft.badge} heading={t.mitgliedschaft.heading} />

      <div className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
          <div ref={ref} className="fade-in-up space-y-8">

            {/* Why card */}
            <article className="card">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-3">{t.mitgliedschaft.why_heading}</h2>
              <p className="font-sans text-sm text-navy-600 leading-relaxed">{t.mitgliedschaft.why_body}</p>
            </article>

            {/* Grundsätzlich */}
            <article className="card border-l-4 border-l-green-500">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">{t.mitgliedschaft.basic_heading}</h2>
              <ul className="space-y-3">
                {t.mitgliedschaft.basic_items.map(item => (
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
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">{t.mitgliedschaft.limited_heading}</h2>
              <p className="font-sans text-xs text-navy-400 mb-4">{t.mitgliedschaft.limited_sub}</p>
              <ul className="space-y-3">
                {t.mitgliedschaft.limited_items.map(item => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-navy-700">
                    <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <WarnIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-sans text-xs text-amber-800">{t.mitgliedschaft.limit_note}</p>
              </div>
            </article>

            {/* Pricing */}
            <article className="card border-t-4 border-t-gold-500">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-6 text-center">{t.mitgliedschaft.pricing_heading}</h2>
              <div className="text-center mb-6">
                <div className="font-serif text-5xl font-bold text-navy-800">Ab 120€</div>
                <div className="font-sans text-sm text-navy-400 mt-1">{t.lang === 'en' ? 'per year' : 'pro Jahr'}</div>
                <div className="font-sans text-sm text-navy-500 mt-2">{t.membership.to}</div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-xs font-sans text-navy-400 mb-2">
                  <span>120€</span><span>450€</span>
                </div>
                <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: '27%', background: 'linear-gradient(90deg, #d4a84a 0%, #e7b83f 100%)' }} />
                </div>
              </div>
              <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6 text-center">
                <p className="font-sans text-sm text-gold-800">{t.membership.signup_fee}</p>
              </div>
              <p className="font-sans text-xs text-navy-400 text-center leading-relaxed">
                {t.lang === 'en'
                  ? 'The exact fee depends on your income. All services are included in the membership fee.'
                  : 'Der genaue Beitrag richtet sich nach Ihrem Einkommen. Alle Leistungen sind im Mitgliedsbeitrag enthalten.'}
              </p>
            </article>

            {/* CTA */}
            <div className="text-center pt-4">
              <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
                {t.mitgliedschaft.cta} <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
