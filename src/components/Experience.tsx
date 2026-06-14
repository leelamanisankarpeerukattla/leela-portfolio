import { BriefcaseBusiness } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Software engineering experience across enterprise platforms and product workflows"
    >
      <div className="relative space-y-6 before:absolute before:left-6 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200 dark:before:bg-white/10 sm:before:block">
        {profile.experience.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="relative sm:pl-16">
            <div className="absolute left-0 top-1 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200 sm:flex">
              <BriefcaseBusiness size={21} aria-hidden="true" />
            </div>
            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{experience.role}</h3>
                  <p className="mt-1 text-base font-semibold text-cyan-700 dark:text-cyan-200">
                    {experience.company}
                    {experience.client ? <span className="text-slate-500 dark:text-slate-400"> · {experience.client}</span> : null}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{experience.location}</p>
                </div>
                <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                  {experience.dates}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                {experience.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-500" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
