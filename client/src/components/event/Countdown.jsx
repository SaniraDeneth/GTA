import { eventContent } from '../../data/eventContent.js';
import { formatColombo, splitDuration } from '../../utils/dates.js';
import useNow from '../../hooks/useNow.js';

const pad = (n) => String(n).padStart(2, '0');

export default function Countdown({ settings, status }) {
  const now = useNow(settings?.offsetMs ?? 0);

  let body;

  if (status === 'loading') {
    body = <p className="font-body text-lg text-slate-400">Loading event timeline...</p>;
  } else if (status === 'error') {
    body = (
      <p className="font-body text-lg text-neon-pink">
        We could not load the latest event dates. Please check again soon.
      </p>
    );
  } else {
    // The nearest milestone that is still in the future
    const next = eventContent.agendaSteps
      .map((step) => ({ ...step, time: Date.parse(settings.milestones?.[step.key]) }))
      .filter((s) => !Number.isNaN(s.time) && s.time > now)
      .sort((a, b) => a.time - b.time)[0];

    if (!next) {
      body = <p className="font-display text-2xl font-bold text-neon-cyan">Event timeline completed</p>;
    } else {
      const t = splitDuration(next.time - now);
      const boxes = [
        ['Days', t.days],
        ['Hours', t.hours],
        ['Minutes', t.minutes],
        ['Seconds', t.seconds],
      ];
      body = (
        <>
          <p className="font-body text-sm font-bold tracking-[0.3em] text-neon-cyan">NEXT MILESTONE</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-white">{next.label}</h3>
          <p className="font-body text-lg text-slate-400">{formatColombo(new Date(next.time).toISOString())} (Sri Lanka time)</p>
          <div className="mt-5 grid grid-cols-4 gap-3 sm:max-w-xl">
            {boxes.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-neon-purple/40 bg-night p-3 text-center">
                <p className="font-display text-3xl font-black text-neon-pink sm:text-4xl">{pad(value)}</p>
                <p className="font-body text-xs tracking-widest text-slate-400">{label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <section aria-label="Countdown" className="mb-10 rounded-xl border border-neon-purple/40 bg-night-card p-6">
      {body}
    </section>
  );
}