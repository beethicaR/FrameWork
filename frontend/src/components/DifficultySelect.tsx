interface DifficultySelectProps {
  onSelect: (difficulty: string) => void;
  onBack: () => void;
}

const difficulties = [
  {
    id: 'Easy',
    title: 'Easy',
    subtitle: 'Getting Started',
    description: 'Guided practice with hints and simpler frameworks. Perfect for beginners learning case interview fundamentals.',
    color: '#22c55e',
    bgColor: 'rgba(34, 197, 94, 0.1)',
    features: ['Step-by-step guidance', 'Simpler calculations', 'More hints provided', 'Slower pace'],
  },
  {
    id: 'Medium',
    title: 'Medium',
    subtitle: 'Standard Pace',
    description: 'Standard consulting interview pace with balanced complexity. Tests your ability to structure and analyze.',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    features: ['Standard interview pace', 'Moderate calculations', 'Partial guidance', 'Realistic scenarios'],
  },
  {
    id: 'Hard',
    title: 'Hard',
    subtitle: 'Pressure Test',
    description: 'Challenging cases with tough interviewer pushback. Tests your poise and depth of analysis.',
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    features: ['Aggressive pushback', 'Complex calculations', 'Minimal guidance', 'High pressure'],
  },
  {
    id: 'Expert',
    title: 'Expert',
    subtitle: 'Partner-Level',
    description: 'The full consulting interview experience. Expect rigorous quantitative analysis and strategic depth.',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    features: ['Maximum rigor', 'Advanced quantitative', 'No handholding', 'Partner-level depth'],
  },
];

export default function DifficultySelect({ onSelect, onBack }: DifficultySelectProps) {
  return (
    <div className="difficulty-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2>Select Difficulty</h2>
        <p className="page-subtitle">Choose the intensity level for your practice session</p>
      </div>

      <div className="difficulty-grid">
        {difficulties.map((diff) => (
          <button key={diff.id} className="difficulty-card" onClick={() => onSelect(diff.id)}>
            <div className="diff-header" style={{ backgroundColor: diff.bgColor }}>
              <div className="diff-level" style={{ color: diff.color }}>{diff.title}</div>
              <div className="diff-subtitle">{diff.subtitle}</div>
            </div>
            <div className="diff-body">
              <p className="diff-description">{diff.description}</p>
              <ul className="diff-features">
                {diff.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="diff-footer" style={{ borderColor: diff.color }}>
              <span style={{ color: diff.color }}>Start {diff.title} Mode</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={diff.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}