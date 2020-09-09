const ids = new Set(['Hi', 'from', 'set!']);
// console.log(ids.has(1));
ids.add(2);
ids.delete('Hi');

for (const entry of ids.entries()) {
    console.log(entry[0]);
}
