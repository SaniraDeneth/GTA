import { Link } from 'react-router-dom';
import { eventContent } from '../../data/eventContent.js';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neon-purple/30 bg-night/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="font-display text-2xl font-black tracking-widest text-white">
          NE<span className="text-neon-cyan">X</span>US
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 font-body text-lg font-semibold lg:flex">
          {eventContent.navLinks.map((link) => (
            <a key={link.label} href={`/${link.href}`} className="text-slate-200 transition hover:text-neon-cyan">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="font-body text-lg font-semibold text-neon-cyan hover:underline">
            Login
          </Link>
          <Link
            to="/register"
            className="rounded bg-neon-pink px-4 py-2 font-body text-lg font-bold text-white shadow-[0_0_18px_rgba(255,43,214,0.55)] transition hover:brightness-110"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}