import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/10">
      <div className="container-shell text-sm text-slate-600 dark:text-slate-400">
        <p>© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
