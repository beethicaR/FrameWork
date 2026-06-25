import * as fs from 'fs';
const f = 'src/scripts/fillCases.ts';
let t = fs.readFileSync(f, 'utf-8');
t = t.replace("path.join(process.cwd(), '..', '..', 'data', 'generated-cases.json')", "path.join(process.cwd(), 'data', 'generated-cases.json')");
fs.writeFileSync(f, t);
console.log('fixed path');