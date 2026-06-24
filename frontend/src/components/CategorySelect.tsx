import { useEffect, useState } from 'react';
import { fetchCategories, fetchCases } from '../api/caseApi';
import { getAllCategories, getCaseCountByCategory, categoryIcons, categoryDescriptions } from '../data/cases';
import type { CaseData } from '../types';

interface CategorySelectProps {
  onSelect: (category: string) => void;
  onBack: () => void;
}

export default function CategorySelect({ onSelect, onBack }: CategorySelectProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [caseCounts, setCaseCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      // Try API first
      const cats = await fetchCategories();
      setCategories(cats);
      const counts: Record<string, number> = {};
      for (const cat of cats) {
        const cases = await fetchCases({ category: cat });
        counts[cat] = cases.length;
      }
      setCaseCounts(counts);
    } catch {
      // Fallback to local data
      const localCategories = getAllCategories();
      const localCounts = getCaseCountByCategory();
      setCategories(localCategories);
      setCaseCounts(localCounts);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="category-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2>Choose a Case Category</h2>
        <p className="page-subtitle">Select the type of case you want to practice</p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loader" />
          <p>Loading categories...</p>
        </div>
      ) : (
        <div className="category-grid">
          {categories.map((cat) => (
            <button key={cat} className="category-card" onClick={() => onSelect(cat)}>
              <div className="category-icon">{categoryIcons[cat] || '📋'}</div>
              <div className="category-info">
                <h3>{cat}</h3>
                <p>{categoryDescriptions[cat] || 'Practice this case type'}</p>
              </div>
              <div className="category-meta">
                <span className="case-count">{caseCounts[cat] || 0} cases</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}