import * as fs from 'fs';
const f = 'src/scripts/fillCases.ts';
let t = fs.readFileSync(f, 'utf-8');
// Fix missing closing paren on line 83: change "...2025']," to "...2025']),"
t = t.replace("Social commerce market: $100B US by 2025'],", "Social commerce market: $100B US by 2025']),");
fs.writeFileSync(f, t);
console.log('fixed');