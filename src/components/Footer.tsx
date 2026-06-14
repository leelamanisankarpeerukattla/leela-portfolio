import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/10">
      <div className="container-shell flex flex-col gap-5 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        <div className="flex items-center gap-3">
          <Link href={profile.links.github} className="rounded-full p-2 transition hover:bg-slate-100 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:hover:bg-white/[0.06] dark:hover:text-cyan-200" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <GitHubIcon className="h-[18px] w-[18px]" />
          </Link>
          <Link href={profile.links.linkedin} className="rounded-full p-2 transition hover:bg-slate-100 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:hover:bg-white/[0.06] dark:hover:text-cyan-200" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </Link>
          <Link href={profile.links.email} className="rounded-full p-2 transition hover:bg-slate-100 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:hover:bg-white/[0.06] dark:hover:text-cyan-200" aria-label="Email Leela">
            <Mail size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
