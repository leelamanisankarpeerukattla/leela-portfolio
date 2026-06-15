'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const animation = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="container-shell relative overflow-hidden pb-12 pt-16 sm:pb-20 sm:pt-24">
      <div className="absolute inset-x-6 top-12 -z-10 h-64 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 blur-3xl" />
      <div className="grid gap-10">
        <motion.div {...animation} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
            {/* <Link href={profile.links.resume} className="secondary-button">
              <Download size={17} aria-hidden="true" /> Download Resume
            </Link> */}
            <Link href={profile.links.github} className="secondary-button" target="_blank" rel="noreferrer">
              <GitHubIcon className="h-[17px] w-[17px]" /> GitHub
            </Link>
            <Link href={profile.links.linkedin} className="secondary-button" target="_blank" rel="noreferrer">
              <LinkedInIcon className="h-[17px] w-[17px]" /> LinkedIn
            </Link>
            <a href={profile.links.email} className="secondary-button">
              <Mail size={17} aria-hidden="true" /> {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
