import { Window } from '../Window';

interface ComingSoonWindowProps {
  title: string;
  message: string;
  onClose: () => void;
}

export function ComingSoonWindow({ title, message, onClose }: ComingSoonWindowProps) {
  return (
    <Window title={title} onClose={onClose}>
      <p>{message}</p>
    </Window>
  );
}
