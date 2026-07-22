import { profile } from '@/data/profile';
import Section from './Section';

export default function CoreTechnologies() {
  return (
    <Section
      id="technologies"
      eyebrow="Core Technologies"
      title="Technologies I use to build production software"
      description="A focused view of the stack I use for backend systems, distributed services, cloud delivery, and practical AI integration."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.coreTechnologies.map((technology) => (
          <div key={technology} className="glass-card rounded-[1.5rem] border border-slate-200/70 p-4 text-sm font-semibold text-slate-800 dark:border-white/10 dark:text-slate-100">
            {technology}
          </div>
        ))}
      </div>
    </Section>
  );
}
