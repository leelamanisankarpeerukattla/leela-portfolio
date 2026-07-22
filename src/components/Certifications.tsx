import { Award } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications and structured learning">
      <div className="glass-card rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-300/10 dark:text-violet-200">
            <Award size={21} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">LinkedIn certifications</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">View a compact set of credentials and professional learning milestones.</p>
          </div>
        </div>
        <div className="mt-6">
          <Link href={profile.links.certifications} className="secondary-button" target="_blank" rel="noreferrer">
            <Award size={16} aria-hidden="true" /> View Certifications
          </Link>
        </div>
      </div>
    </Section>
  );
}
