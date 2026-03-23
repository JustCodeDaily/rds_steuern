/**
 * Lightweight page header for inner pages.
 * Only the Home page uses the full dark navy gradient hero.
 */
export default function PageHeader({ badge, heading, subtitle }) {
  return (
    <div className="border-b border-warm-gray bg-white pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <div className="inline-flex items-center bg-gold-50 text-gold-700 text-xs font-sans font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            {badge}
          </div>
        )}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800">{heading}</h1>
        {subtitle && (
          <p className="font-sans text-navy-500 mt-2 text-base">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
