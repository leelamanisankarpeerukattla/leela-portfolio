'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const animation = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="container-shell relative overflow-hidden pb-12 pt-16 sm:pb-20 sm:pt-24">
      <div className="absolute inset-x-6 top-12 -z-10 h-64 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 blur-3xl" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div {...animation} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-4 py-2 text-sm font-medium text-cyan-800 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
            <Sparkles size={16} aria-hidden="true" /> {profile.openTo}
          </div>

          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
            <MapPin size={16} aria-hidden="true" /> {profile.location}
          </p>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-slate-800 dark:text-slate-100 sm:text-3xl">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="primary-button">
              View Projects
            </Link>
            <Link href={profile.links.resume} className="secondary-button">
              <Download size={17} aria-hidden="true" /> Download Resume
            </Link>
            <Link href={profile.links.github} className="secondary-button" target="_blank" rel="noreferrer">
              <GitHubIcon className="h-[17px] w-[17px]" /> GitHub
            </Link>
            <Link href={profile.links.linkedin} className="secondary-button" target="_blank" rel="noreferrer">
              <LinkedInIcon className="h-[17px] w-[17px]" /> LinkedIn
            </Link>
            <Link href={profile.links.email} className="secondary-button">
              <Mail size={17} aria-hidden="true" /> Email Me
            </Link>
          </div>
        </motion.div>

        <motion.aside
          {...(reduceMotion ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } })}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          className="glass-card rounded-[2rem] p-6 shadow-glow"
          aria-label="Portfolio quick facts"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-2xl dark:from-white/[0.10] dark:via-white/[0.07] dark:to-white/[0.04]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Currently building</p>
            <h2 className="mt-4 text-2xl font-bold">Backend-focused product systems</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              APIs, cloud-ready services, event-driven workflows, and practical AI integrations that are readable, testable, and deployable.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {profile.topSkills.slice(0, 8).map((skill) => (
                <span key={skill} className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-center text-xs font-semibold text-slate-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
