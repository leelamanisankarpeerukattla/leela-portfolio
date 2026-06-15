import { Cloud, Code2, Cpu, Server, ShieldCheck, Zap } from 'lucide-react';
import Section from './Section';

const principles = [
  { icon: Server, title: 'Reliable backend services', text: 'Clear API contracts, service boundaries, data flows, and operational checks.' },
  { icon: Code2, title: 'Maintainable full-stack work', text: 'Readable implementation, reusable components, and practical handoff notes.' },
  { icon: Zap, title: 'Event-driven systems', text: 'Kafka-based workflows, asynchronous processing, and reliable service communication.' },
  { icon: Cloud, title: 'Cloud-ready applications', text: 'Dockerized services, deployment-ready structure, CI/CD pipelines, and environment-aware configuration.' },
  { icon: Cpu, title: 'Careful AI integration', text: 'AI workflows used where they improve the product, with validation and human review.' },
  { icon: ShieldCheck, title: 'Production-minded engineering', text: 'Testing, logging, monitoring, documentation, and supportability built into the development process.' }
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Full-stack software engineer with a backend focus, building reliable APIs, cloud-ready applications, and user-focused product features.">
      <div className="grid gap-4 md:grid-cols-2">
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
    </Section>
  );
}
