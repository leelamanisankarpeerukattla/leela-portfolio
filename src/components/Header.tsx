'use client';

import { Download, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/90">
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="#home" className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-white shadow-lg shadow-cyan-500/20">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-slate-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200 sm:block">
            {profile.displayName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:text-slate-100 dark:hover:bg-white/[0.08] dark:hover:text-white dark:focus:ring-offset-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href={profile.links.resume} className="secondary-button hidden px-4 py-2 lg:inline-flex">
            <Download size={16} aria-hidden="true" /> Resume
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-100 dark:hover:text-cyan-200 dark:focus:ring-offset-slate-950 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'container-shell overflow-hidden transition-all duration-300 lg:hidden',
          open ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="glass-card grid gap-1 rounded-3xl p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={profile.links.resume}
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:text-cyan-200 dark:hover:bg-cyan-300/10"
          >
            <Download size={16} aria-hidden="true" /> Download Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
