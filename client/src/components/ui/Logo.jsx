import { eventContent } from '../../data/eventContent.js';

export default function Logo({ className = '' }) {
  const { first, second } = eventContent.logo;
  return (
    <span className={`font-display text-xl font-black tracking-wider text-white sm:text-2xl ${className}`}>
      {first}
      <span className="text-neon-pink">{second}</span>
    </span>
  );
}