'use client';

import { Check, Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import Link from 'next/link';
import { useState } from 'react';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s talk about software engineering opportunities">
      <div className="glass-card overflow-hidden rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              I’m open to software engineering opportunities where I can contribute to backend systems, full-stack product workflows, APIs, cloud-ready services, and practical AI-enabled applications.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={profile.links.linkedin} className="secondary-button" target="_blank" rel="noreferrer">
                <LinkedInIcon className="h-[17px] w-[17px]" /> LinkedIn
              </Link>
              <Link href={profile.links.github} className="secondary-button" target="_blank" rel="noreferrer">
                <GitHubIcon className="h-[17px] w-[17px]" /> GitHub
              </Link>
              <Link href={profile.links.resume} className="secondary-button">
                <Download size={17} aria-hidden="true" /> Download Resume
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.035]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-3 break-all text-lg font-bold text-slate-950 dark:text-white">{profile.email}</p>
            <button type="button" onClick={copyEmail} className="secondary-button mt-5 px-4 py-2">
              {copied ? <Check size={16} aria-hidden="true" /> : <Mail size={16} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
