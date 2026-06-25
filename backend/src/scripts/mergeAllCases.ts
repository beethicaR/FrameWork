import * as fs from 'fs';
import * as path from 'path';

const jsonPath = path.join(__dirname, '../../data/generated-cases.json');
let existing: any[] = [];
try {
  if (fs.existsSync(jsonPath)) existing = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
} catch (e) {}

console.log(`Existing cases: ${existing.length}`);
console.log('Done. Merged file at:', jsonPath);