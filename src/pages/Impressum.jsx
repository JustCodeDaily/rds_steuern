import { useFadeInUp } from '../hooks/useFadeInUp'
import { useLang } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="font-serif text-lg font-bold text-navy-800 mb-2">{title}</h2>
      <div className="font-sans text-sm text-navy-600 leading-relaxed">{children}</div>
    </div>
  )
}

export default function Impressum() {
  const { t } = useLang()
  const ref = useFadeInUp()

  return (
    <>
      <PageHeader heading={t.impressum.heading} />

      <div className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div ref={ref} className="fade-in-up card space-y-0">

            <Section title="Postanschrift">
              <address className="not-italic">
                <p>Ring der Steuerzahler e.V.</p>
                <p>Bankplatz 1</p>
                <p>38100 Braunschweig</p>
              </address>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Teledaten">
              <p>Telefon: <a href="tel:+4953161831101" className="hover:text-gold-600 transition-colors">(0531) 618 311 01</a></p>
              <p>Telefax: (0531) 618 311 03</p>
              <p>E-Mail: <a href="mailto:info@rds-steuern.de" className="hover:text-gold-600 transition-colors">info@rds-steuern.de</a></p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Vorstand">
              <p>Susanna Hertwig</p>
              <p>Dipl.-Kfm. Uwe Rosenthal</p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Vereinsregister">
              <p>Registergericht: Amtsgericht Braunschweig</p>
              <p>Registernummer: VR 201126</p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Aufsichtsbehörde / Zulassung">
              <p>Zugelassen gemäß § 4 Nr. 11 StBerG durch:</p>
              <p className="mt-1">OFD Münster S 0934 B – 358 St 31 – 41</p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Umsatzsteuer-Identifikationsnummer">
              <p>USt.-ID: DE264029367</p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Verantwortlich für den Inhalt">
              <p>Susanna Hertwig</p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Haftungshinweis">
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                deren Betreiber verantwortlich. Sollten Sie auf fehlerhafte oder rechtswidrige
                Inhalte aufmerksam werden, bitten wir um entsprechenden Hinweis.
              </p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Rechtlicher Hinweis">
              <p>
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen
                Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur
                für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}
