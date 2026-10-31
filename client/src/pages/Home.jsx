import Hero from '../components/event/Hero.jsx';
import About from '../components/event/About.jsx';
import Countdown from '../components/event/Countdown.jsx';
import Agenda from '../components/event/Agenda.jsx';
import Prizes from '../components/event/Prizes.jsx';

export default function Home() {
  return (
    <div className="full-bleed bg-night">
      <Hero />
      <About />
      <div id="timeline" className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <Countdown />
        <Agenda />
      </div>
      <Prizes />
    </div>
  );
}