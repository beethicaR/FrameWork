import { useEffect, useState } from 'react';
import { fetchCases } from '../api/caseApi';
import type { CaseData } from '../types';

interface CaseSelectProps {
  category: string;
  onSelect: (caseData: CaseData) => void;
  onBack: () => void;
}

const difficultyColors: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
  Expert: '#8b5cf6',
};

export default function CaseSelect({ category, onSelect, onBack }: CaseSelectProps) {
  const [cases, setCases] = useState<CaseData[]>([]);
  const [filteredCases, setFilteredCases] = useState<CaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchCases({ category })
      .then((data) => {
        if (!cancelled) {
          setCases(data);
          setFilteredCases(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [category]);

  useEffect(() => {
    let filtered = cases;
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(s) ||
          c.industry.toLowerCase().includes(s) ||
          c.prompt.toLowerCase().includes(s)
      );
    }
    if (difficultyFilter) {
      filtered = filtered.filter((c) => c.difficulty === difficultyFilter);
    }
    setFilteredCases(filtered);
  }, [search, difficultyFilter, cases]);

  return (
    <div className="case-select-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2>{category} Cases</h2>
        <p className="page-subtitle">Browse and select a case to practice</p>
      </div>

      <div className="case-filters">
        <div className="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search cases..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="difficulty-filters">
          {['Easy', 'Medium', 'Hard', 'Expert'].map((d) => (
            <button
              key={d}
              className={`diff-chip ${difficultyFilter === d ? 'active' : ''}`}
              style={{ '--diff-color': difficultyColors[d] } as React.CSSProperties}
              onClick={() => setDifficultyFilter(difficultyFilter === d ? '' : d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loader" />
          <p>Loading cases...</p>
        </div>
      ) : filteredCases.length === 0 ? (
        <div className="empty-state">
          <p>No cases found matching your criteria</p>
        </div>
      ) : (
        <div className="case-grid">
          {filteredCases.map((caseItem) => (
            <button key={caseItem.id} className="case-card" onClick={() => onSelect(caseItem)}>
              <div className="case-card-header">
                <span className="case-industry">{caseItem.industry}</span>
                <span
                  className="case-difficulty"
                  style={{ color: difficultyColors[caseItem.difficulty] }}
                >
                  {caseItem.difficulty}
                </span>
              </div>
              <h3 className="case-title">{caseItem.title}</h3>
              <p className="case-preview">{caseItem.prompt.slice(0, 120)}...</p>
              <div className="case-card-footer">
                <span className="case-facts-count">
                  {caseItem.keyFacts.length} key facts
                </span>
                <span className="case-start-cta">
                  Start Case
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}