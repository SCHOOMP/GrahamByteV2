import { useEffect, useState } from 'react';

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}

function formatClock(date: Date): string {
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `${y}-${m}-${d} · ${hh}:${mm}:${ss}`;
}

export function DesktopStatusBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="desktop-statusbar">
      <span className="desktop-statusbar-status">
        <span className="status-dot" aria-hidden="true" />
        SCHOMP-TEC OS · READY
      </span>
      <span>{formatClock(now)}</span>
    </div>
  );
}
