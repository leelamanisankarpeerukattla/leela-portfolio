'use client';

import { ExternalLink, LockKeyhole, Sparkles } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import Link from 'next/link';
import type { Project } from '@/data/profile';
import { cn } from '@/lib/utils';

const statusClasses = {
  public: 'border-emerald-300/40 bg-emerald-50 text-emerald-700 dark:bg-emerald-300/10 dark:text-emerald-200',
  private: 'border-violet-300/40 bg-violet-50 text-violet-700 dark:bg-violet-300/10 dark:text-violet-200',
  program: 'border-cyan-300/40 bg-cyan-50 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200'
};

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={cn(
        'glass-card group flex h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 dark:hover:border-cyan-300/30',
        featured && 'lg:col-span-2'
      )}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className={cn('rounded-full border px-3 py-1 text-xs font-semibold', statusClasses[project.statusTone])}>
          {project.status}
        </span>
        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
          {project.category}
        </span>
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-2 text-base font-medium text-cyan-700 dark:text-cyan-200">{project.subtitle}</p>

      <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
        <div>
          <p className="mb-1 font-semibold text-slate-900 dark:text-white">Problem</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-slate-900 dark:text-white">What I built</p>
          <p>{project.built}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 font-semibold text-slate-900 dark:text-white">Engineering highlights</p>
        <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <Sparkles className="mt-1 h-4 w-4 flex-none text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300">
        <p className="font-semibold text-slate-900 dark:text-white">Why it matters</p>
        <p className="mt-1">{project.whyItMatters}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3 pt-2">
        {project.links.map((link) => {
          const Icon = link.kind === 'github' ? GitHubIcon : link.kind === 'request' ? LockKeyhole : ExternalLink;
          return (
            <Link
              key={link.label}
              href={link.url}
              className="secondary-button px-4 py-2"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
            >
              <Icon className="h-4 w-4" aria-hidden="true" /> {link.label}
            </Link>
          );
        })}
      </div>
    </article>
  );
}
