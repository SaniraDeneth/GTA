import { useEffect, useState } from 'react';
import { getPublicSettings } from '../api/public.js';
import { sampleSettings } from '../data/sampleSettings.js';

const USE_SAMPLE = import.meta.env.VITE_USE_SAMPLE_SETTINGS === 'true';

// status is 'loading', 'ready' or 'error'
export default function useEventSettings() {
  const [state, setState] = useState({ status: 'loading', settings: null });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        let data;
        if (USE_SAMPLE) {
          data = sampleSettings();
        } else {
          const res = await getPublicSettings();
          data = res.data.data; // API shape: { success: true, data: {...} }
        }
        const serverMs = Date.parse(data.serverTime);
        const offsetMs = Number.isNaN(serverMs) ? 0 : serverMs - Date.now();
        if (!cancelled) setState({ status: 'ready', settings: { ...data, offsetMs } });
      } catch {
        if (!cancelled) setState({ status: 'error', settings: null });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}