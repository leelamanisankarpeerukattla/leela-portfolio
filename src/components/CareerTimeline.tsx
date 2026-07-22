'use client';

import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

function getSortValue(dateValue: string) {
  if (dateValue === 'present') {
    return Number.POSITIVE_INFINITY;
  }

  const [year, month] = dateValue.split('-').map(Number);
  return year * 100 + month;
}

export default function CareerTimeline() {
  const timelineItems = [...profile.timeline].sort((a, b) => getSortValue(b.startDate) - getSortValue(a.startDate));

  return (
    <Section
      id="timeline"
      eyebrow="Background"
      title="Engineering experience and education"
      description="A concise journey through my professional growth and academic foundation."
    >
      <div className="relative">
        <div
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/80 via-blue-500/60 to-violet-500/70 lg:block"
          aria-hidden="true"
        />
        <div
          className="absolute left-[0.8rem] top-0 h-full w-px bg-gradient-to-b from-cyan-400/80 via-blue-500/60 to-violet-500/70 lg:hidden"
          aria-hidden="true"
        />

        <div className="space-y-8 lg:space-y-10">
          {timelineItems.map((item) => (
            <div key={item.id} className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(150px,auto)_minmax(0,1fr)] lg:gap-6">
              {item.side === 'left' ? (
                <div className="flex justify-end lg:pr-8">
                  <div className="relative w-full max-w-md rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="absolute -right-6 top-6 hidden h-px w-6 bg-cyan-400/70 lg:block" aria-hidden="true" />
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                      <BriefcaseBusiness size={15} aria-hidden="true" />
                      <span>Experience</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{item.organization}</p>
                    {item.secondaryOrganization ? (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.secondaryOrganization}</p>
                    ) : null}
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className="hidden lg:block" />
              )}

              <div className="relative z-10 flex flex-col items-center justify-start lg:pt-2">
                <div className="max-w-[150px] px-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600 leading-5 sm:text-xs dark:text-slate-300 lg:max-w-[150px]">
                  {item.dateLabel}
                </div>
                <div className="mt-3 h-3 w-3 rounded-full border-4 border-white bg-cyan-500 shadow-sm dark:border-slate-950" aria-hidden="true" />
              </div>

              {item.side === 'right' ? (
                <div className="flex justify-start lg:pl-8">
                  <div className="relative w-full max-w-md rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="absolute -left-6 top-6 hidden h-px w-6 bg-violet-400/70 lg:block" aria-hidden="true" />
                    <div className="flex items-center gap-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
                      <GraduationCap size={15} aria-hidden="true" />
                      <span>Education</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{item.organization}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className="hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
