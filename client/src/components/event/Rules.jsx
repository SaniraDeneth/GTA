import { eventContent } from '../../data/eventContent.js';

export default function Rules() {
  return (
    <section id="rules" className="bg-night py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="mb-3 font-body text-sm font-bold tracking-[0.3em] text-neon-cyan">RULES</p>
        <h2 className="font-display text-4xl font-black text-white md:text-5xl">
          PLAY <span className="text-neon-pink">FAIR</span>
        </h2>

        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {eventContent.rules.map((rule, i) => (
            <li key={rule} className="flex items-start gap-4 rounded-lg border border-neon-purple/40 bg-night-card p-5">
              <span className="font-display text-2xl font-black text-neon-pink">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-body text-lg text-slate-200">{rule}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}