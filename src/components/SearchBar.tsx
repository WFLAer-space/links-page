import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search links or tags..."
        className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500 w-5 h-5" />
    </div>
  );
}