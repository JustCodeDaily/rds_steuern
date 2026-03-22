import { useFadeInUp } from '../hooks/useFadeInUp'

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="font-serif text-lg font-bold text-navy-800 mb-2">{title}</h2>
      <div className="font-sans text-sm text-navy-600 leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

export default function Datenschutz() {
  const ref = useFadeInUp()

  return (
    <>
      <header className="page-header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </header>

      <main className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div ref={ref} className="fade-in-up card space-y-0">

            <Section title="Verantwortliche Stelle">
              <p>
                Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <address className="not-italic mt-2">
                <p className="font-semibold text-navy-800">Ring der Steuerzahler e.V.</p>
                <p>Bankplatz 1, 38100 Braunschweig</p>
                <p>E-Mail: <a href="mailto:info@rds-steuern.de" className="hover:text-gold-600 transition-colors">info@rds-steuern.de</a></p>
                <p>Telefon: (0531) 618 311 01</p>
              </address>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Erhebung und Speicherung personenbezogener Daten">
              <p>
                Beim Besuch unserer Website werden durch den Browser automatisch Informationen
                an den Server übermittelt (z.B. IP-Adresse, Browser-Typ, Betriebssystem,
                Referrer-URL). Diese Daten werden für technische und statistische Zwecke
                verarbeitet und nicht an Dritte weitergegeben.
              </p>
              <p>
                Wir speichern diese Daten nur so lange, wie es für die jeweiligen Zwecke
                erforderlich ist oder gesetzlich vorgeschrieben wird.
              </p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Kontaktformular">
              <p>
                Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden die von Ihnen
                mitgeteilten Daten (Name, E-Mail-Adresse, Nachricht) zum Zwecke der Bearbeitung
                Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
                Anfragen). Die Daten werden nach abschließender Bearbeitung gelöscht, sofern
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Ihre Rechte (DSGVO)">
              <p>Sie haben gegenüber uns folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Geltendmachung dieser Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:info@rds-steuern.de" className="hover:text-gold-600 transition-colors">
                  info@rds-steuern.de
                </a>
              </p>
              <p>
                Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                Zuständig ist die Landesbeauftragte für den Datenschutz Niedersachsen.
              </p>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Cookies">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  Diese Website verwendet keine Cookies.
                </p>
              </div>
            </Section>

            <div className="border-t border-warm-gray my-6" />

            <Section title="Änderungen dieser Datenschutzerklärung">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
                Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt
                dann die neue Datenschutzerklärung.
              </p>
            </Section>

            <div className="border-t border-warm-gray mt-4 pt-4">
              <p className="font-sans text-xs text-navy-400">
                Stand: März 2026
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
