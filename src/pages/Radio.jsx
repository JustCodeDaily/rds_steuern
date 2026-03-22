import { useFadeInUp } from '../hooks/useFadeInUp'

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

function EpisodeCard({ episode, idx }) {
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
          <p className="font-sans text-sm text-navy-400">
            {episode.subtitle} · {episode.date}
          </p>
        </div>
      </div>

      <ol className="space-y-3" aria-label={`Sendungsabschnitte: ${episode.title}`}>
        {episode.segments.map(({ label, file }, i) => (
          <li
            key={file}
            className="bg-gold-50 rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <span className="font-sans text-xs text-navy-500 sm:w-48 flex-shrink-0">
              <span className="font-semibold text-navy-700">{i + 1}.</span> {label}
            </span>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio
              controls
              preload="none"
              className="w-full h-8"
              aria-label={`Abschnitt ${i + 1}: ${label}`}
            >
              <source src={`${BASE}${file}`} type="audio/mpeg" />
              Ihr Browser unterstützt das Audio-Element nicht.
            </audio>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default function Radio() {
  return (
    <>
      <header className="page-header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Podcast
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Radio Okerwelle</h1>
          <p className="font-sans text-navy-200 mt-4 text-lg">
            Unsere Steuer-Sendungen zum Nachhören
          </p>
        </div>
      </header>

      <main className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-10">
          <EpisodeCard episode={episode1} idx={1} />
          <EpisodeCard episode={episode2} idx={2} />
        </div>
      </main>
    </>
  )
}
