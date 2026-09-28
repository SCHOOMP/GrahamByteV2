import { useEffect, useRef, type ReactNode } from 'react';
import './Window.css';

interface WindowProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Window({ title, onClose, children }: WindowProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="window-overlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className="window">
        <div className="window-titlebar">
          <span className="window-title">{title}</span>
          <button
            ref={closeButtonRef}
            className="window-close"
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            X
          </button>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </div>
  );
}
