import React, { useState } from 'react';
import { Link } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CategorySection } from './components/CategorySection';
import { ThemeToggle } from './components/ThemeToggle';
import { AccessLegend } from './components/AccessLegend';
import { useDarkMode } from './hooks/useDarkMode';
import linksData from './data/links.json';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useDarkMode();

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <Link className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Links Collection
              </h1>
            </div>
            <ThemeToggle isDark={isDark} toggle={toggleDarkMode} />
          </div>
          <div className="space-y-4">
            <AccessLegend />
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {linksData.categories.map((category) => (
          <CategorySection
            key={category.name}
            name={category.name}
            links={category.links}
            searchTerm={searchTerm}
          />
        ))}
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            From <a href="https://wflaer.space" className="hover:underline text-blue-600 dark:text-blue-400">WFLAer.space</a>
          </p>
        </div>
      </footer>
    </div>
  );
}