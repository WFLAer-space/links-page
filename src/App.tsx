import React, { useState, createContext, useContext } from 'react'
import { ExternalLink, Folder, Moon, Sun, Facebook, Twitter, Instagram, Newspaper, Tv, Shield, Cpu, Zap, Smartphone } from 'lucide-react'
import enStrings from './locales/en.json'
import zhStrings from './locales/zh.json'

interface Link {
  title: string
  url: string
  icon: React.ElementType
  descriptionKey: string
}

interface Category {
  name: string
  links: Link[]
}

type LanguageStrings = typeof enStrings

const languageStrings: Record<string, LanguageStrings> = {
  en: enStrings,
  zh: zhStrings,
}

const categories: Category[] = [
  {
    name: 'socialMedia',
    links: [
      { title: 'Facebook', url: 'https://facebook.com', icon: Facebook, descriptionKey: 'facebook' },
      { title: 'Twitter', url: 'https://twitter.com', icon: Twitter, descriptionKey: 'twitter' },
      { title: 'Instagram', url: 'https://instagram.com', icon: Instagram, descriptionKey: 'instagram' },
    ],
  },
  {
    name: 'news',
    links: [
      { title: 'BBC', url: 'https://bbc.com', icon: Newspaper, descriptionKey: 'bbc' },
      { title: 'CNN', url: 'https://cnn.com', icon: Tv, descriptionKey: 'cnn' },
      { title: 'The Guardian', url: 'https://theguardian.com', icon: Shield, descriptionKey: 'theGuardian' },
    ],
  },
  {
    name: 'technology',
    links: [
      { title: 'TechCrunch', url: 'https://techcrunch.com', icon: Cpu, descriptionKey: 'techCrunch' },
      { title: 'Wired', url: 'https://wired.com', icon: Zap, descriptionKey: 'wired' },
      { title: 'The Verge', url: 'https://theverge.com', icon: Smartphone, descriptionKey: 'theVerge' },
    ],
  },
]

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
})

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
  strings: enStrings,
})

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, strings: languageStrings[language] }}>
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} transition-colors duration-300`}>
          <div className="container mx-auto px-4 py-8">
            <Header />
            <CategoryGrid />
          </div>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const { language, setLanguage, strings } = useContext(LanguageContext)

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">{strings.title}</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label={isDarkMode ? strings.lightMode : strings.darkMode}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </header>
  )
}

function CategoryGrid() {
  const { isDarkMode } = useContext(ThemeContext)
  const { strings } = useContext(LanguageContext)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.name} className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Folder className="mr-2" size={24} />
            {strings[category.name as keyof LanguageStrings]}
          </h2>
          <ul className="space-y-4">
            {category.links.map((link) => (
              <li key={link.title} className="group">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors duration-300 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <link.icon className="mr-2" size={20} />
                    <span className="font-semibold">{link.title}</span>
                    <ExternalLink className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {strings.linkDescriptions[link.descriptionKey as keyof typeof strings.linkDescriptions]}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App