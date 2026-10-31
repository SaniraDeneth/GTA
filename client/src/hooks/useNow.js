import { useEffect, useState } from 'react';

// Returns the current time (in ms) and updates every second.
// offsetMs makes it follow the SERVER clock instead of the user's clock.
export default function useNow(offsetMs = 0) {
  const [now, setNow] = useState(() => Date.now() + offsetMs);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now() + offsetMs), 1000);
    return () => clearInterval(id);
  }, [offsetMs]);

  return now;
}