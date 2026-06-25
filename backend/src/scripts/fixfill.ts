import * as fs from 'fs';
const f = 'src/scripts/fillCases.ts';
let t = fs.readFileSync(f, 'utf-8');
t = t.replace("2025'], ['Social commerce channel", "2025'],\n    ['Social commerce channel");
fs.writeFileSync(f, t);
console.log('fixed');