export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', value: 'grahamschomp2@gmail.com', href: 'mailto:grahamschomp2@gmail.com' },
  { label: 'GitHub', value: 'github.com/SCHOOMP', href: 'https://github.com/SCHOOMP' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/graham-schomp-swe',
    href: 'https://linkedin.com/in/graham-schomp-swe',
  },
];
