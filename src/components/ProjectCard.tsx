import { ExternalLink, Sparkles } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import Link from 'next/link';
import type { Project } from '@/data/profile';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card flex h-full flex-col rounded-[1.75rem] p-5">
      <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-5">
        <p className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Engineering highlights</p>
        <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <Sparkles className="mt-1 h-4 w-4 flex-none text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        {project.links.map((link) => {
          const Icon = link.kind === 'github' ? GitHubIcon : ExternalLink;
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
