import { profile } from '@/data/profile';
import Section from './Section';

export default function EngineeringProof() {
  const proofItems = [
    ...profile.engineeringWriting,
    ...profile.openSourceContributions,
    ...profile.achievements
  ] as Array<{ title: string; description: string; url?: string; date?: string; type: string }>;

  if (proofItems.length === 0) return null;

  return (
    <Section
      id="proof"
      eyebrow="Engineering Proof"
      title="Selected engineering proof"
      description="Additional evidence of technical depth, publications, open source work, and notable milestones."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {proofItems.map((item, index) => (
          <article key={`${item.title}-${index}`} className="glass-card rounded-[1.5rem] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              {item.type}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
            {item.date ? <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.date}</p> : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
