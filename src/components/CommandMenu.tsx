'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const commands = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-slate-950/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Command menu">
      <div className="mx-auto mt-24 max-w-xl rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl dark:bg-ink-900">
        <div className="flex items-center gap-3 border-b border-slate-200 px-2 pb-3 dark:border-white/10">
          <Search size={18} aria-hidden="true" />
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Jump to section</p>
        </div>
        <div className="mt-3 grid gap-1">
          {commands.map((command) => (
            <Link key={command.href} href={command.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.06]">
              {command.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
