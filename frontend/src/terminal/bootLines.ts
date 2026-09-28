export interface BootLine {
  text: string;
  delay: number;
}

export const BOOT_LINES: BootLine[] = [
  { text: 'SCHOMP-TEC TERMINAL OS [VERSION 2.26]', delay: 300 },
  { text: 'COPYRIGHT 2075-2026 SCHOMP-TEC INDUSTRIES', delay: 200 },
  { text: '', delay: 200 },
  { text: 'INITIALIZING BOOT SEQUENCE...', delay: 400 },
  { text: 'CHECKING MEMORY.......................... OK', delay: 350 },
  { text: 'LOADING KERNEL MODULES.................... OK', delay: 300 },
  { text: 'MOUNTING FILESYSTEMS...................... OK', delay: 300 },
  { text: 'ESTABLISHING TERMLINK...................... OK', delay: 300 },
  { text: '', delay: 200 },
  { text: 'RUN DEBUG/USER_AUTH.EXE', delay: 400 },
  { text: '', delay: 300 },
];
