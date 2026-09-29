import { useRef, useState } from 'react';
import { ComingSoonWindow } from './windows/ComingSoonWindow';
import { ResumeWindow } from './windows/ResumeWindow';
import { PixelIcon, type PixelIconName } from './PixelIcon';
import './Desktop.css';

interface IconDef {
  id: string;
  label: string;
  glyph: PixelIconName;
  /* Placeholder message until the real window is built. */
  comingSoon?: string;
}

const ICONS: IconDef[] = [
  { id: 'resume', label: 'RESUME', glyph: 'resume' },
  {
    id: 'data-eng',
    label: 'DATA ENGINEERING PROJECT',
    glyph: 'database',
    comingSoon: 'COMING SOON — scheduled ingest, transforms, data quality checks, served via API',
  },
  {
    id: 'terminal',
    label: 'TERMINAL',
    glyph: 'terminal',
    comingSoon: 'COMING SOON — interactive shell: help, ls, cat resume.txt, status',
  },
  {
    id: 'status',
    label: 'SYSTEM STATUS',
    glyph: 'status',
    comingSoon: 'COMING SOON — live backend health, metrics, and pipeline runs',
  },
  {
    id: 'architecture',
    label: 'ARCHITECTURE',
    glyph: 'architecture',
    comingSoon: 'COMING SOON — system diagram and architecture decision records',
  },
  {
    id: 'devlog',
    label: 'DEV LOG',
    glyph: 'devlog',
    comingSoon: "COMING SOON — changelog of what's shipped and what's next",
  },
  {
    id: 'contact',
    label: 'CONTACT',
    glyph: 'contact',
    comingSoon: 'COMING SOON — email, GitHub, LinkedIn',
  },
  { id: 'personality', label: '???', glyph: 'locked', comingSoon: 'COMING SOON — details TBD' },
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

  const openIcon = ICONS.find((icon) => icon.id === openId);

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {ICONS.map((icon) => (
          <button key={icon.id} className="desktop-icon" onClick={() => open(icon.id)}>
            <span className="desktop-icon-glyph" aria-hidden="true">
              <PixelIcon name={icon.glyph} />
            </span>
            <span className="desktop-icon-label">{icon.label}</span>
          </button>
        ))}
      </div>

      {openId === 'resume' && <ResumeWindow onClose={close} />}
      {openIcon?.comingSoon && (
        <ComingSoonWindow title={openIcon.label} message={openIcon.comingSoon} onClose={close} />
      )}
    </div>
  );
}
