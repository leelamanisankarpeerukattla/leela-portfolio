import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications and structured learning">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {profile.certifications.map((certification) => (
          <article key={`${certification.issuer}-${certification.title}`} className="glass-card flex h-full flex-col rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 dark:hover:border-cyan-300/30">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-300/10 dark:text-violet-200">
              <Award size={21} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold leading-snug text-slate-950 dark:text-white">{certification.title}</h3>
            <p className="mt-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">{certification.issuer}</p>
            <div className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <p>Issued: {certification.issued}</p>
              {certification.expires ? <p>Expires: {certification.expires}</p> : null}
              {certification.credentialId ? <p>Credential ID: {certification.credentialId}</p> : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-5">
              {certification.credentialUrl ? (
                <Link href={certification.credentialUrl} className="secondary-button px-4 py-2" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} aria-hidden="true" /> View credential
                </Link>
              ) : (
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                  Credential available on request
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
