import { CaseData } from '../data/cases';
import generatedCases from './generated-cases.json';

// Remove the "Generated 225 cases" line and parse just the array
const casesJson = JSON.stringify(generatedCases);
const casesArray: CaseData[] = JSON.parse(casesJson);

console.log(`Adding ${casesArray.length} generated cases to backend...`);

// Output as TypeScript array to be appended to cases.ts
console.log(`
// ============ GENERATED CASES (225 total) ============
const generatedCases: CaseData[] = ${JSON.stringify(casesArray, null, 2)};

// Merge with existing cases
export const allCases: CaseData[] = [...cases, ...generatedCases];
`);