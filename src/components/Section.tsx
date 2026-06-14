'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn('container-shell scroll-mt-24 py-16 sm:py-20', className)}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
