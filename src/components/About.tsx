import { Code2, Server, ShieldCheck } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

const principles = [
  { icon: Server, title: 'Reliable backend services', text: 'Clear API contracts, service boundaries, data flows, and operational checks.' },
  { icon: Code2, title: 'Maintainable full-stack work', text: 'Readable implementation, reusable components, and practical handoff notes.' },
  { icon: ShieldCheck, title: 'Careful AI integration', text: 'AI workflows used where they improve the product, with validation and human review.' }
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend-focused full-stack engineer with practical product judgment">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass-card rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 dark:hover:border-cyan-300/30">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
