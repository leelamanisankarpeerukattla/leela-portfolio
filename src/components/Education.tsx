import { GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science foundation">
      <div className="grid gap-5 md:grid-cols-2">
        {profile.education.map((education) => (
          <article key={education.school} className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-cyan-300/60 dark:hover:border-cyan-300/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
              <GraduationCap size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">{education.school}</h3>
            <p className="mt-2 font-semibold text-cyan-700 dark:text-cyan-200">{education.degree}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{education.dates}</p>
            {education.gpa ? <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">GPA: {education.gpa}</p> : null}
            <div className="mt-5 flex flex-wrap gap-2">
              {education.relevantAreas.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
