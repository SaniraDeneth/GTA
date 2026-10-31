import { Link } from 'react-router-dom';
import { eventContent } from '../../data/eventContent.js';

const lineColors = ['text-white', 'text-neon-cyan', 'text-neon-pink'];

export default function Hero() {
  const { label, heroLines, tagline, info } = eventContent;
  const infoItems = [
    { value: info.dates, caption: 'EVENT DATES' },
    { value: info.venue, caption: 'VENUE' },
    { value: info.teamSize, caption: 'TEAM SIZE' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-night">
      {/* Neon glow background (we can swap this for the city image later) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 75% 30%, rgba(139,61,255,0.45), transparent 55%), radial-gradient(circle at 15% 85%, rgba(255,43,214,0.25), transparent 50%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-28">
        <p className="mb-4 font-body text-sm font-bold tracking-[0.3em] text-neon-pink">{label}</p>

        <h1 className="font-display font-black leading-[0.95]">
          {heroLines.map((line, i) => (
            <span key={line} className={`block text-5xl sm:text-7xl lg:text-8xl ${lineColors[i]}`}>
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-md font-body text-xl text-slate-200">{tagline}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/register"
            className="rounded bg-neon-pink px-7 py-3 font-body text-lg font-bold text-white shadow-[0_0_22px_rgba(255,43,214,0.6)] transition hover:brightness-110"
          >
            Register Now →
          </Link>
          <a
            href="/#about"
            className="rounded border border-neon-pink px-7 py-3 font-body text-lg font-bold text-neon-pink transition hover:bg-neon-pink/10"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
          {infoItems.map((item) => (
            <div key={item.caption} className="border-l-2 border-neon-cyan pl-3">
              <p className="font-body text-lg font-bold text-white">{item.value}</p>
              <p className="font-body text-xs tracking-widest text-slate-400">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}