import { useState } from 'react';
import { Desktop } from './desktop/Desktop';
import { AccessGranted, type GrantedLine } from './terminal/AccessGranted';
import { BootGate } from './terminal/BootGate';
import { BOOT_LINES } from './terminal/bootLines';

type Phase = 'gate' | 'granted' | 'desktop';

function App() {
  const [phase, setPhase] = useState<Phase>('gate');
  const [isChecking, setIsChecking] = useState(false);
  const [grantedLines, setGrantedLines] = useState<GrantedLine[]>([]);

  async function handleUnlock(password: string) {
    setIsChecking(true);
    let helloLine: string;
    try {
      const res = await fetch('/api/hello');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      helloLine = `> ${data.message}`;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      helloLine = `> couldn’t reach the backend (${message}) — is it running?`;
    }
    setGrantedLines([
      ...BOOT_LINES.map((line) => ({ text: line.text })),
      { text: `ENTER PASSWORD TO CONTINUE: ${'*'.repeat(password.length)}` },
      { text: '' },
      { text: 'ACCESS GRANTED', emphasis: true },
      { text: helloLine, emphasis: true },
    ]);
    setIsChecking(false);
    setPhase('granted');
  }

  return (
    <div className="app">
      {phase === 'gate' && <BootGate onSubmit={handleUnlock} isChecking={isChecking} />}
      {phase === 'granted' && (
        <AccessGranted lines={grantedLines} onDone={() => setPhase('desktop')} />
      )}
      {phase === 'desktop' && <Desktop />}
    </div>
  );
}

export default App;
