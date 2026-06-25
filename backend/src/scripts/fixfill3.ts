import * as fs from 'fs';
const f = 'src/scripts/fillCases.ts';
let t = fs.readFileSync(f, 'utf-8');
// Line 83 ends with ...2025']),  then line 84 starts with [    ['Social commerce...
// Need: ...2025']), [    ['Social commerce...
t = t.replace("Social commerce market: $100B US by 2025']),\n    ['Social commerce channel", "Social commerce market: $100B US by 2025']), [\n    ['Social commerce channel");
fs.writeFileSync(f, t);
console.log('fixed');