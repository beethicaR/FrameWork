import cases, { CaseData } from '../data/cases';

// Load from data/cases.ts (contains 39 handcrafted real cases)
let allCases: CaseData[] = [...cases];

export function getAllCases(): CaseData[] {
  return allCases;
}

export function getCasesByCategory(category: string): CaseData[] {
  return allCases.filter(c => c.category.toLowerCase() === category.toLowerCase());
}

export function getCaseById(id: string): CaseData | undefined {
  return allCases.find(c => c.id === id);
}

export function getCategories(): string[] {
  const categories = new Set(allCases.map(c => c.category));
  return Array.from(categories);
}

export function getRandomCase(category?: string, difficulty?: string): CaseData | undefined {
  let filtered = allCases;
  if (category) filtered = filtered.filter(c => c.category.toLowerCase() === category.toLowerCase());
  if (difficulty) filtered = filtered.filter(c => c.difficulty.toLowerCase() === difficulty.toLowerCase());
  if (filtered.length === 0) return undefined;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function getCasesByFilters(filters: {
  category?: string;
  difficulty?: string;
  industry?: string;
  search?: string;
}): CaseData[] {
  let filtered = allCases;
  if (filters.category) filtered = filtered.filter(c => c.category.toLowerCase() === filters.category!.toLowerCase());
  if (filters.difficulty) filtered = filtered.filter(c => c.difficulty.toLowerCase() === filters.difficulty!.toLowerCase());
  if (filters.industry) filtered = filtered.filter(c => c.industry.toLowerCase().includes(filters.industry!.toLowerCase()));
  if (filters.search) {
    const s = filters.search.toLowerCase();
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(s) || 
      c.prompt.toLowerCase().includes(s) || 
      c.context.toLowerCase().includes(s) ||
      c.industry.toLowerCase().includes(s)
    );
  }
  return filtered;
}

export function getCaseCount(): number {
  return allCases.length;
}

export { CaseData };