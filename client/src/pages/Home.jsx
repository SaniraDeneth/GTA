import Hero from '../components/event/Hero.jsx';
import About from '../components/event/About.jsx';
import Countdown from '../components/event/Countdown.jsx';
import Agenda from '../components/event/Agenda.jsx';
import Prizes from '../components/event/Prizes.jsx';
import useEventSettings from '../hooks/useEventSettings.js';

export default function Home() {
  const { settings, status } = useEventSettings();

  return (
    <div className="full-bleed bg-night">
      <Hero />
      <About />

      <section id="timeline" className="bg-night py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-3 font-body text-sm font-bold tracking-[0.3em] text-neon-pink">EVENT TIMELINE</p>
          <h2 className="mb-8 font-display text-4xl font-black text-white md:text-5xl">
            YOUR JOURNEY TO <span className="text-neon-cyan">CREATION</span>
          </h2>
          <Countdown settings={settings} status={status} />
          <Agenda settings={settings} status={status} />
        </div>
      </section>

      <Prizes />
    </div>
  );
}