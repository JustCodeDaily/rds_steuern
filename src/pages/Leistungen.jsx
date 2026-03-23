import { Link } from 'react-router-dom'
import { useFadeInUp } from '../hooks/useFadeInUp'
import { useLang } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

const group1 = [
  { de: 'Einkommensteuererklärung',    en: 'Income tax return',              desc_de: 'Vollständige Erstellung Ihrer jährlichen Einkommensteuererklärung.',               desc_en: 'Complete preparation of your annual income tax return.' },
  { de: 'Steuererstattung berechnen',  en: 'Calculate tax refund',           desc_de: 'Wir ermitteln Ihre voraussichtliche Erstattung oder Nachzahlung.',                 desc_en: 'We calculate your expected refund or additional payment.' },
  { de: 'Elektronische Abgabe (ELSTER)', en: 'Electronic filing (ELSTER)',   desc_de: 'Übermittlung Ihrer Steuererklärung per ELSTER an das Finanzamt.',                  desc_en: 'Submission of your tax return via ELSTER to the tax office.' },
  { de: 'Steuerklassenwahl',           en: 'Tax class selection',            desc_de: 'Beratung zur optimalen Steuerklassenwahl für Ehepaare.',                            desc_en: 'Advice on optimal tax class selection for married couples.' },
  { de: 'Steuerbescheid-Prüfung',      en: 'Tax assessment review',         desc_de: 'Eingehende Prüfung Ihres Steuerbescheids auf Fehler und Unstimmigkeiten.',         desc_en: 'In-depth review of your tax assessment for errors.' },
  { de: 'Einspruchsführung',           en: 'Filing of objections',          desc_de: 'Fristgerechte Einlegung von Einsprüchen gegen fehlerhafte Bescheide.',             desc_en: 'Timely filing of objections against incorrect assessments.' },
  { de: 'Lohnsteuerermäßigungsanträge', en: 'Wage tax reduction requests',  desc_de: 'Antrag auf Eintrag von Freibeträgen auf der Lohnsteuerkarte.',                    desc_en: 'Application to register allowances on the wage tax card.' },
  { de: 'NV-Bescheinigung',            en: 'Non-assessment certificate',    desc_de: 'Beantragung einer Nichtveranlagungsbescheinigung beim Finanzamt.',                 desc_en: 'Application for a non-assessment certificate at the tax office.' },
  { de: 'Kindergeld-Antrag',           en: 'Child benefit application',     desc_de: 'Unterstützung bei der Beantragung und Überprüfung von Kindergeld.',               desc_en: 'Support with applying for and reviewing child benefit.' },
]

const group2 = [
  { de: 'Renteneinkünfte & Pensionen', en: 'Pensions & retirement income',  desc_de: 'Steuerliche Behandlung von Renten, Pensionen und Versorgungsbezügen.',            desc_en: 'Tax treatment of pensions and retirement benefits.' },
  { de: 'Arbeitnehmerberatung',        en: 'Employee advisory',             desc_de: 'Umfassende Beratung zu Werbungskosten, Reisekosten und Arbeitszimmer.',            desc_en: 'Comprehensive advice on deductible expenses and home office.' },
  { de: 'Vermietung & Verpachtung',    en: 'Rental & leasing income',       desc_de: 'Steuerliche Optimierung von Mieteinnahmen und Werbungskosten.',                   desc_en: 'Tax optimisation of rental income and deductible expenses.' },
  { de: 'Abgeltungsteuer',             en: 'Withholding tax',               desc_de: 'Beratung zur Besteuerung von Kapitalerträgen und Dividenden.',                    desc_en: 'Advice on taxation of capital gains and dividends.' },
  { de: 'Unterhalt & Heimunterbringung', en: 'Maintenance & care home costs', desc_de: 'Absetzbarkeit von Unterhaltsleistungen und Heimkosten.',                         desc_en: 'Deductibility of maintenance payments and care home costs.' },
  { de: 'Familie & Krankheitskosten',  en: 'Family & medical costs',        desc_de: 'Außergewöhnliche Belastungen, Kinderfreibeträge und mehr.',                       desc_en: 'Extraordinary expenses, child allowances and more.' },
  { de: 'Riester- & Rürup-Altersvorsorge', en: 'Riester & Rürup pensions', desc_de: 'Förderungen und steuerliche Abzugsmöglichkeiten der Altersvorsorge.',             desc_en: 'Subsidies and tax deductions for retirement provisions.' },
  { de: 'Elterngeld',                  en: 'Parental benefit',              desc_de: 'Beratung zu Elterngeld und dessen steuerlichen Auswirkungen.',                    desc_en: 'Advice on parental benefit and its tax implications.' },
  { de: 'Auslandseinkünfte',           en: 'Foreign income',                desc_de: 'Doppelbesteuerungsabkommen, Auslandstätigkeiten, internationale Renten.',         desc_en: 'Double taxation agreements, overseas employment, international pensions.' },
]

function ServiceCard({ item, lang, accent }) {
  const title = lang === 'de' ? item.de : item.en
  const desc  = lang === 'de' ? item.desc_de : item.desc_en
  return (
    <article className={`bg-white border border-warm-gray rounded-[10px] p-6 hover:shadow-md transition-shadow duration-200 ${accent ? 'border-t-4 border-t-gold-500' : ''}`}>
      <h3 className="font-serif text-base font-bold text-navy-800 mb-2">{title}</h3>
      <p className="font-sans text-sm text-navy-500 leading-relaxed">{desc}</p>
    </article>
  )
}

export default function Leistungen() {
  const { t, lang } = useLang()
  const group1Ref = useFadeInUp()
  const group2Ref = useFadeInUp()
  const ctaRef    = useFadeInUp()

  return (
    <>
      <PageHeader badge={t.leistungen.badge} heading={t.leistungen.heading} />

      <div className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Group 1 */}
          <section aria-labelledby="group1-heading">
            <h2 id="group1-heading" className="font-serif text-2xl font-bold text-navy-800 mb-2">
              {t.leistungen.group1_heading}
            </h2>
            <span className="block mb-8 h-[3px] w-12 bg-gold-gradient rounded-full" />
            <div ref={group1Ref} className="fade-in-up grid grid-cols-1 sm:grid-cols-2 gap-5">
              {group1.map(s => <ServiceCard key={s.de} item={s} lang={lang} />)}
            </div>
          </section>

          {/* Group 2 */}
          <section aria-labelledby="group2-heading">
            <h2 id="group2-heading" className="font-serif text-2xl font-bold text-navy-800 mb-2">
              {t.leistungen.group2_heading}
            </h2>
            <span className="block mb-8 h-[3px] w-12 bg-gold-gradient rounded-full" />
            <div ref={group2Ref} className="fade-in-up grid grid-cols-1 sm:grid-cols-2 gap-5">
              {group2.map(s => <ServiceCard key={s.de} item={s} lang={lang} accent />)}
            </div>
          </section>

          {/* CTA */}
          <div ref={ctaRef} className="fade-in-up bg-navy-800 rounded-2xl p-10 text-center text-white">
            <h2 className="font-serif text-2xl font-bold mb-3">{t.leistungen.cta_heading}</h2>
            <p className="font-sans text-navy-200 mb-8 max-w-xl mx-auto">{t.leistungen.cta_body}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-gold">{t.leistungen.cta_btn1} <ArrowRightIcon /></Link>
              <Link to="/mitgliedschaft" className="btn-outline-light">{t.leistungen.cta_btn2}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
