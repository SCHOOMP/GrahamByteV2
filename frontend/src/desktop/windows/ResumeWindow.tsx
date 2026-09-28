import { useEffect, useState } from 'react';
import { Window } from '../Window';

interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
}

interface SkillCategory {
  category: string;
  items: string[];
}

interface Education {
  school: string;
  degree: string;
}

interface Certification {
  name: string;
  status: string;
}

interface Resume {
  name: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  headline: string;
  summary: string;
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  education: Education;
  certifications: Certification[];
}

interface ResumeWindowProps {
  onClose: () => void;
}

export function ResumeWindow({ onClose }: ResumeWindowProps) {
  const [resume, setResume] = useState<Resume | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/resume')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setResume)
      .catch((err) => setError(err instanceof Error ? err.message : String(err)));
  }, []);

  return (
    <Window title="RESUME" onClose={onClose}>
      {error && (
        <p className="resume-error">
          ⚠ Couldn’t load resume ({error}) — is the backend running?
        </p>
      )}
      {!error && !resume && <p>loading...</p>}
      {resume && (
        <div className="resume">
          <h2>{resume.name}</h2>
          <p>
            {resume.location} · {resume.email}
          </p>
          <p>
            <a href={resume.githubUrl}>{resume.githubUrl}</a>
            {' · '}
            <a href={resume.linkedinUrl}>{resume.linkedinUrl}</a>
          </p>
          <p>
            <strong>{resume.headline}</strong>
          </p>
          <p>{resume.summary}</p>

          <h3>Experience</h3>
          {resume.experience.map((entry) => (
            <div key={`${entry.company}-${entry.startDate}`}>
              <p>
                {entry.title} — {entry.company} ({entry.location})
                <br />
                {entry.startDate} – {entry.endDate ?? 'Present'}
              </p>
              <ul>
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>Skills</h3>
          {resume.skills.map((category) => (
            <p key={category.category}>
              <strong>{category.category}:</strong> {category.items.join(', ')}
            </p>
          ))}

          <h3>Education</h3>
          <p>
            {resume.education.degree}, {resume.education.school}
          </p>

          <h3>Certifications</h3>
          <ul>
            {resume.certifications.map((cert) => (
              <li key={cert.name}>
                {cert.name} — {cert.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Window>
  );
}
