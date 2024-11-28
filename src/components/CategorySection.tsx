import React from 'react';
import { LinkCard } from './LinkCard';

interface Link {
  name: string;
  icon: any;
  url: string;
  description: string;
  tags: string[];
  accessLevel: 'green' | 'yellow' | 'red';
}

interface CategorySectionProps {
  name: string;
  links: Link[];
  searchTerm: string;
}

export function CategorySection({ name, links, searchTerm }: CategorySectionProps) {
  const filteredLinks = links.filter(
    (link) =>
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  if (filteredLinks.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{name}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredLinks.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </div>
    </section>
  );
}