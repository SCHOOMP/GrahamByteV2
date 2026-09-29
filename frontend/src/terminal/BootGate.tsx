import { useEffect, useRef, useState, type FormEvent } from 'react';
import { BOOT_LINES } from './bootLines';
import './BootGate.css';

interface BootGateProps {
  onSubmit: (password: string) => void;
  isChecking: boolean;
}

export function BootGate({ onSubmit, isChecking }: BootGateProps) {
  const [visibleCount, setVisibleCount] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? BOOT_LINES.length : 0,
  );
  const [password, setPassword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const booted = visibleCount >= BOOT_LINES.length;

  useEffect(() => {
    if (visibleCount >= BOOT_LINES.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, BOOT_LINES[visibleCount].delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  useEffect(() => {
    if (booted) inputRef.current?.focus();
  }, [booted]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!password.trim() || isChecking) return;
    onSubmit(password);
  }

  return (
    <div className="boot-gate">
      <div className="boot-log">
        {BOOT_LINES.slice(0, visibleCount).map((line, index) => {
          const isOk = line.text.endsWith('OK');
          return (
            <div key={index} className="line">
              {isOk ? (
                <>
                  {line.text.slice(0, -2)}
                  <span className="boot-ok">OK</span>
                </>
              ) : (
                line.text || ' '
              )}
            </div>
          );
        })}
      </div>
      {booted && (
        <form className="boot-password-row" onSubmit={handleSubmit}>
          <label htmlFor="boot-password" className="sr-only">
            Enter password to continue
          </label>
          <span aria-hidden="true">
            {isChecking ? 'VERIFYING...' : 'ENTER PASSWORD TO CONTINUE:'}
          </span>
          <span className="boot-password-input-row">
            <input
              id="boot-password"
              ref={inputRef}
              type="password"
              autoComplete="off"
              value={password}
              disabled={isChecking}
              onChange={(event) => setPassword(event.target.value)}
              className="boot-password-input"
            />
            <span className="cursor" aria-hidden="true" />
          </span>
        </form>
      )}
    </div>
  );
}
