import { Layers3 } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technology stack"
      description="A clear overview of the technologies I use to build reliable applications, backend systems, and AI-enabled product features."
    >
      <div className="glass-card rounded-[2rem] p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
            <Layers3 size={19} aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">Core stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.coreTechnologies.map((skill) => (
            <span key={skill} className="rounded-full border border-cyan-300/50 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800 dark:bg-cyan-300/10 dark:text-cyan-100">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
