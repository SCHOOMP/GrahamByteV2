import { CONTACT_LINKS } from '../../content/contact';
import { Window } from '../Window';

interface ContactWindowProps {
  onClose: () => void;
}

export function ContactWindow({ onClose }: ContactWindowProps) {
  return (
    <Window title="CONTACT" onClose={onClose}>
      <ul className="contact-list">
        {CONTACT_LINKS.map((link) => (
          <li key={link.label}>
            <span className="contact-label">{link.label}:</span> <a href={link.href}>{link.value}</a>
          </li>
        ))}
      </ul>
    </Window>
  );
}
