import { Brain, Cloud, Code2, Server } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from './Section';

const icons = [Server, Cloud, Brain, Code2];

export default function CurrentFocus() {
  return (
    <Section id="current-focus" eyebrow="Current Focus" title="Currently focused on">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.currentFocus.map((item, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <article key={item.title} className="glass-card rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 dark:hover:border-cyan-300/30">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-violet-100 text-cyan-700 dark:from-cyan-300/10 dark:to-violet-300/10 dark:text-cyan-200">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.details}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
