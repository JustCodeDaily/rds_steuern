import { createContext, useContext, useState } from 'react'
import de from './deutsch.json'
import en from './english.json'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('de')
  const t = lang === 'de' ? de : en
  const toggle = () => setLang(l => l === 'de' ? 'en' : 'de')
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
