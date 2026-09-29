export interface DevLogEntry {
  day: number;
  date: string;
  title: string;
  bullets: string[];
}

// Newest first. Add a new entry at the top as work progresses.
export const DEV_LOG: DevLogEntry[] = [
  {
    day: 1,
    date: '2026-09-29',
    title: 'Scoping the data engineering project',
    bullets: [
      'Scoped out a real data engineering feature for the site, using World of Warcraft and Deadlock as the datasets.',
      'Chose the WoW Auction House Commodities feed as the flagship pipeline — the one dataset here that actually needs reconciliation, real volume, and idempotent loads, not just a poll-and-chart.',
      'Wrote the full project plan: Airflow DAGs for ingestion, a small star schema in Postgres, a read-only Spring Boot API, with Deadlock’s player count demoted to a deliberately simple bonus pipeline.',
      'Worked out the AWS cost picture and locked in RDS plus a small EC2 instance with self-hosted Airflow instead of MWAA, landing around $29/month.',
      'Hooked up the Contact and Dev Log windows on the desktop.',
    ],
  },
  {
    day: 0,
    date: '2026-09-28',
    title: 'Building the terminal desktop',
    bullets: [
      'Got the Spring Boot backend building and running, with a health-check endpoint.',
      'Landed on the site concept: a boot sequence and password gate into a retro desktop, not a standard resume page.',
      'Built the boot log and password gate, then reworked it into a Fallout-style terminal boot sequence with a live backend handshake on unlock.',
      'Built the desktop shell — icon-based navigation into modal windows instead of pages and routes.',
      'Added a real /api/resume endpoint and wired the Resume window up to it.',
      'Installed the Hallmark design skill and ran a full pass on the boot and desktop UI: a real OKLCH colour token system, Space Mono type, and a handful of real bugs fixed along the way.',
      'Sketched the AWS deployment shape: S3 + CloudFront for the frontend, EC2 for the backend.',
    ],
  },
];
