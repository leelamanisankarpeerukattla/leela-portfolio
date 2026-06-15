'use client';

import { useMemo, useState } from 'react';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import Section from './Section';

const categories = ['All', 'Backend', 'Full-Stack', 'AI', 'Simulation'] as const;

type Category = (typeof categories)[number];

export default function Projects() {
  const [category, setCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (category === 'All') return profile.projects;
    return profile.projects.filter((project) => project.category === category);
  }, [category]);

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Practical software projects"
      description="Selected projects that show how I build reliable, useful, and deployable software."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-ink-950',
              category === item
                ? 'border-cyan-300 bg-cyan-100 text-cyan-800 dark:border-cyan-300/40 dark:bg-cyan-300/15 dark:text-cyan-100'
                : 'border-slate-200 bg-white/70 text-slate-600 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200'
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={category === 'All' && index === 0} />
        ))}
      </div>
    </Section>
  );
}
