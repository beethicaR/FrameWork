interface RoleSelectProps {
  onSelect: (role: 'interviewee' | 'interviewer') => void;
  onBack: () => void;
}

export default function RoleSelect({ onSelect, onBack }: RoleSelectProps) {
  return (
    <div className="role-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2>Choose Your Role</h2>
        <p className="page-subtitle">How would you like to experience this case?</p>
      </div>

      <div className="role-grid">
        <button className="role-card interviewee" onClick={() => onSelect('interviewee')}>
          <div className="role-visual">
            <div className="role-icon">👨‍💼</div>
            <div className="role-badge">Recommended</div>
          </div>
          <div className="role-info">
            <h3>Interviewee</h3>
            <p className="role-desc">
              You are the candidate. The AI will act as the interviewer and present the case.
              Practice structuring problems, analyzing data, and delivering recommendations
              under pressure — just like a real consulting interview.
            </p>
            <ul className="role-features">
              <li>🧠 Practice structured problem-solving</li>
              <li>📊 Work through quantitative analysis</li>
              <li>🎯 Receive real-time feedback</li>
              <li>📝 Build case interview muscle memory</li>
            </ul>
          </div>
          <div className="role-cta">
            <span>Practice as Interviewee</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button className="role-card interviewer" onClick={() => onSelect('interviewer')}>
          <div className="role-visual">
            <div className="role-icon">👩‍💼</div>
          </div>
          <div className="role-info">
            <h3>Interviewer</h3>
            <p className="role-desc">
              You play the role of the interviewer. The AI will act as a candidate solving
              the case. Challenge the AI's thinking, probe for deeper analysis, and evaluate
              how a strong candidate should respond.
            </p>
            <ul className="role-features">
              <li>🎓 Learn what interviewers look for</li>
              <li>🔄 Practice giving case prompts</li>
              <li>📋 Evaluate AI candidate responses</li>
              <li>💡 Understand assessment criteria</li>
            </ul>
          </div>
          <div className="role-cta">
            <span>Practice as Interviewer</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}