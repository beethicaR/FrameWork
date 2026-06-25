import * as fs from 'fs';
const f = 'src/scripts/fillCases.ts';
let t = fs.readFileSync(f, 'utf-8');
// Replace lines 83-84: add missing successCriteria arg and remove orphan extra array
const oldBlock = `Social commerce market: $100B US by 2025']),
    ['Social commerce channel`;
const newBlock = `Social commerce market: $100B US by 2025',
    'Social commerce channel selection and prioritization'],
   ['Social commerce revenue potential by channel`;
t = t.replace(oldBlock, newBlock);
fs.writeFileSync(f, t);
console.log('fixed');