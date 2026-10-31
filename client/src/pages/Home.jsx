import Hero from '../components/event/Hero.jsx';
import Countdown from '../components/event/Countdown.jsx';
import Agenda from '../components/event/Agenda.jsx';

export default function Home() {
  return (
    <div className="full-bleed">
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <Countdown />
        <Agenda />
      </div>
    </div>
  );
}