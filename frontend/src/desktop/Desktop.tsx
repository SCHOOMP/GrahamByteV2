import { useRef, useState } from 'react';
import { ComingSoonWindow } from './windows/ComingSoonWindow';
import { ResumeWindow } from './windows/ResumeWindow';
import './Desktop.css';

interface IconDef {
  id: string;
  label: string;
  glyph: string;
}

const ICONS: IconDef[] = [
  { id: 'resume', label: 'RESUME', glyph: '▤' },
  { id: 'data-eng', label: 'DATA ENGINEERING PROJECT', glyph: '▦' },
  { id: 'personality', label: '???', glyph: '?' },
];

export function Desktop() {
  const [openId, setOpenId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function open(id: string) {
    triggerRef.current = document.activeElement as HTMLElement;
    setOpenId(id);
  }

  function close() {
    setOpenId(null);
    triggerRef.current?.focus();
  }

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {ICONS.map((icon) => (
          <button key={icon.id} className="desktop-icon" onClick={() => open(icon.id)}>
            <span className="desktop-icon-glyph" aria-hidden="true">
              {icon.glyph}
            </span>
            <span className="desktop-icon-label">{icon.label}</span>
          </button>
        ))}
      </div>

      {openId === 'resume' && <ResumeWindow onClose={close} />}
      {openId === 'data-eng' && (
        <ComingSoonWindow title="DATA ENGINEERING PROJECT" message="COMING SOON" onClose={close} />
      )}
      {openId === 'personality' && (
        <ComingSoonWindow title="???" message="COMING SOON — details TBD" onClose={close} />
      )}
    </div>
  );
}
