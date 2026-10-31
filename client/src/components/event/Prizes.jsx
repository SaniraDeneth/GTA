import { eventContent } from '../../data/eventContent.js';

// Full class names are written out so Tailwind can find them
const styles = {
  gold: { border: 'border-prize-gold/70', text: 'text-prize-gold', glow: 'shadow-[0_0_26px_rgba(245,184,61,0.25)]' },
  silver: { border: 'border-prize-silver/70', text: 'text-prize-silver', glow: 'shadow-[0_0_26px_rgba(159,196,232,0.2)]' },
  bronze: { border: 'border-prize-bronze/70', text: 'text-prize-bronze', glow: 'shadow-[0_0_26px_rgba(224,121,74,0.22)]' },
};

export default function Prizes() {
  return (
    <section id="prizes" className="bg-night py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="mb-3 font-body text-sm font-bold tracking-[0.3em] text-neon-pink">PRIZES</p>
        <h2 className="font-display text-4xl font-black text-white md:text-5xl">
          BIG IDEAS <span className="block">BIGGER REWARDS</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {eventContent.prizes.map((prize) => {
            const s = styles[prize.color];
            return (
              <div key={prize.place} className={`rounded-xl border bg-night-card p-6 ${s.border} ${s.glow}`}>
                <p className={`font-body text-lg font-bold ${s.text}`}>🏆 {prize.place}</p>
                <p className="mt-2 font-display text-3xl font-black text-white">{prize.amount}</p>
                <ul className="mt-5 space-y-2 font-body text-lg text-slate-300">
                  {prize.perks.map((perk) => (
                    <li key={perk}>
                      <span className={s.text}>✓</span> {perk}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}