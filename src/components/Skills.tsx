import { Layers3 } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Skills() {
  const topSkills = new Set<string>([...profile.topSkills]);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technology stack"
      description="A clear overview of the technologies I use to build reliable applications, backend systems, and AI-enabled product features."
    >
      <div className="glass-card mb-6 rounded-[2rem] p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
            <Layers3 size={19} aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">Top skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.topSkills.map((skill) => (
            <span key={skill} className="rounded-full border border-cyan-300/50 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800 dark:bg-cyan-300/10 dark:text-cyan-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profile.skillGroups.map((group) => (
          <article key={group.name} className="glass-card rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 dark:hover:border-cyan-300/30">
            <h3 className="font-bold text-slate-950 dark:text-white">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const isTop = topSkills.has(skill);
                return (
                  <span
                    key={skill}
                    className={
                      isTop
                        ? 'rounded-full border border-cyan-300/50 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-300/10 dark:text-cyan-100'
                        : 'chip'
                    }
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
