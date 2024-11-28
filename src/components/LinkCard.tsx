import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ShieldCheck, ShieldAlert, ShieldOff } from 'lucide-react';

interface LinkProps {
  name: string;
  icon: keyof typeof LucideIcons;
  url: string;
  description: string;
  tags: string[];
  accessLevel: 'green' | 'yellow' | 'red';
}

export function LinkCard({ name, icon, url, description, tags, accessLevel }: LinkProps) {
  const Icon = LucideIcons[icon];

  const AccessIcon = {
    green: ShieldCheck,
    yellow: ShieldAlert,
    red: ShieldOff
  }[accessLevel];

  const accessColor = {
    green: 'text-green-500',
    yellow: 'text-yellow-500',
    red: 'text-red-500'
  }[accessLevel];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all group"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors">
          {Icon && <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {name}
            </h3>
            <AccessIcon className={`w-4 h-4 ${accessColor}`} />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}