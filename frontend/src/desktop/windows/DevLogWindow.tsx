import { DEV_LOG } from '../../content/devlog';
import { Window } from '../Window';

interface DevLogWindowProps {
  onClose: () => void;
}

export function DevLogWindow({ onClose }: DevLogWindowProps) {
  return (
    <Window title="DEV LOG" onClose={onClose}>
      {DEV_LOG.map((entry) => (
        <article key={entry.day} className="devlog-entry">
          <h3>
            Day {entry.day} <span className="devlog-date">— {entry.date}</span>
          </h3>
          <p className="devlog-entry-title">{entry.title}</p>
          <ul>
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
      <p className="devlog-commits">{__COMMIT_COUNT__} commits</p>
    </Window>
  );
}
