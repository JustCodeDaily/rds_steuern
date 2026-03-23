import { useFadeInUp } from '../hooks/useFadeInUp'
import { useLang } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'

const BASE = 'https://rds-steuern.de/'

const episode1 = {
  title:    'Rentner und Steuern',
  subtitle: 'Dabei nach Drei',
  date:     '3. Juli 2017',
  segments: [
    { label: 'Intro',                           file: '1Intro03.07.2017.mp3' },
    { label: 'Begrüßung RDS',                   file: '2BegrussungRDS03.07.2017.mp3' },
    { label: 'Datenpool',                        file: '3Datenpool03.07.2017.mp3' },
    { label: 'Steuerpflicht der Renten',         file: '4SteuerpflichtderRenten03.07.2017.mp3' },
    { label: 'Was können Rentner absetzen?',     file: '5WaskonnenRentnerabsetzen03.07.2017.mp3' },
    { label: 'Ab wann fallen Steuern an?',       file: '6AbwannfallenSteuernan03.07.2017.mp3' },
    { label: 'Sonderfall: Verwitwet',            file: '7SonderfallVerwitwet.mp3' },
    { label: 'RDS-Mitglieder Wanning & Tesche',  file: '8RDSMitgliederWanningundTesche03.07.2017.mp3' },
    { label: 'NV-Bescheinigung',                 file: '9NV-Bescheinigung03.07.2017.mp3' },
    { label: 'Erreichbarkeit RDS',               file: '10ErreichbarkeitRDS03.07.2017.mp3' },
  ],
}

const episode2 = {
  title:    'Altersvorsorge & Werbungskosten',
  subtitle: 'Sozial Spezial',
  date:     '3. Oktober 2017',
  segments: [
    { label: 'Intro',                            file: '1Intro03.10.2017.mp3' },
    { label: 'Begrüßung RDS',                   file: '2BegrussungRDS03.10.2017.mp3' },
    { label: 'Altersvorsorge Überblick',         file: '3AltersvorsorgeUberblick03.10.2017.mp3' },
    { label: 'Nachgelagerte Besteuerung',        file: '4NachgelagerteBesteuerung03.10.2017.mp3' },
    { label: 'Absetzbare Altersvorsorge',        file: '5AbsetzbareAltersvorsorge03.10.2017.mp3' },
    { label: 'Werbungskosten',                   file: '6Werbungskosten03.10.2017.mp3' },
    { label: 'Sonderausgaben, Abgeltungsteuer',  file: '7SonderausgabenetcAbgeltungsteuer03.10.2017.mp3' },
    { label: 'Erreichbarkeit RDS',               file: '8ErreichbarkeitRDS03.10.2017.mp3' },
  ],
}

function EpisodeCard({ episode }) {
  const ref = useFadeInUp()
  return (
    <article ref={ref} className="fade-in-up card border-t-4 border-t-gold-500">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072M12 6l-4 4H4v4h4l4 4V6zM18.364 5.636a9 9 0 010 12.728" />
          </svg>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-navy-800">{episode.title}</h2>
          <p className="font-sans text-sm text-navy-400">{episode.subtitle} · {episode.date}</p>
        </div>
      </div>

      <ol className="space-y-3" aria-label={`Sendungsabschnitte: ${episode.title}`}>
        {episode.segments.map(({ label }, i) => (
          <li key={label} className="bg-gold-50 rounded-lg px-4 py-3">
            <span className="font-sans text-xs text-navy-500">
              <span className="font-semibold text-navy-700">{i + 1}.</span> {label}
            </span>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default function Radio() {
  const { t } = useLang()

  return (
    <>
      <PageHeader
        badge={t.radio_page.badge}
        heading={t.radio_page.heading}
        subtitle={t.radio_page.subtitle}
      />

      <div className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EpisodeCard episode={episode1} />
            <EpisodeCard episode={episode2} />
          </div>
        </div>
      </div>
    </>
  )
}
