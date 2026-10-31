import { eventContent } from '../../data/eventContent.js';
import { formatColombo } from '../../utils/dates.js';
import useNow from '../../hooks/useNow.js';

const icons = ['📝', '🔒', '▶️', '📤', '⏱️', '🏆'];

export default function Agenda({ settings, status }) {
  const now = useNow(settings?.offsetMs ?? 0);

  if (status === 'loading') {
    return <p className="font-body text-lg text-slate-400">Loading agenda...</p>;
  }
  if (status === 'error') {
    return <p className="font-body text-lg text-neon-pink">The agenda is not available right now.</p>;
  }

  const steps = eventContent.agendaSteps.map((step) => {
    const iso = settings.milestones?.[step.key];
    const time = iso ? Date.parse(iso) : NaN;
    return { ...step, iso, time };
  });
  const nextIndex = steps.findIndex((s) => !Number.isNaN(s.time) && s.time > now);

  return (
    <section aria-label="Agenda">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {steps.map((step, i) => {
          const hasDate = !Number.isNaN(step.time);
          const isDone = hasDate && step.time <= now;
          const isNext = i === nextIndex;

          const box = isNext
            ? 'border-neon-pink shadow-[0_0_22px_rgba(255,43,214,0.35)]'
            : isDone
              ? 'border-neon-cyan/40 opacity-70'
              : 'border-neon-purple/30';
          const badge = isNext ? 'UP NEXT' : isDone ? 'COMPLETED' : hasDate ? 'UPCOMING' : 'TO BE ANNOUNCED';

          return (
            <li key={step.key} className={`rounded-lg border bg-night-card p-4 text-center ${box}`}>
              <div className="text-3xl">{icons[i]}</div>
              <h3 className="mt-2 font-body text-lg font-bold text-white">{step.label}</h3>
              <p className="mt-1 font-body text-sm text-slate-400">
                {hasDate ? formatColombo(step.iso) : 'Date to be announced'}
              </p>
              <p className={`mt-3 font-body text-xs font-bold tracking-widest ${isNext ? 'text-neon-pink' : 'text-neon-cyan'}`}>
                {badge}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}