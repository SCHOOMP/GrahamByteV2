import { useEffect } from 'react';
import './AccessGranted.css';

export interface GrantedLine {
  text: string;
  emphasis?: boolean;
}

interface AccessGrantedProps {
  lines: GrantedLine[];
  onDone: () => void;
}

export function AccessGranted({ lines, onDone }: AccessGrantedProps) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1100);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="access-granted">
      {lines.map((line, index) => (
        <div key={index} className={`line ${line.emphasis ? 'line--emphasis' : ''}`}>
          {line.text || ' '}
        </div>
      ))}
    </div>
  );
}
