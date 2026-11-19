// T20 attempt-2 widened literal census (A-C008-3 scope: named numeric shaping
// constants, not only hex/rgba/clamp). Prints every literal outside the CONFIG
// block grouped by (value, line) plus every hex/rgba string outside CONFIG.
// Classification lives in the filed census document, per literal.
const fs = require("fs");
const html = fs.readFileSync(process.argv[2], "utf8");
const scriptM = html.match(/<script>([\s\S]*?)<\/script>/);
const src = scriptM[1];
const cfgStart = src.indexOf("const CONFIG = {");
let depth = 0, cfgEnd = -1;
for (let i = src.indexOf("{", cfgStart); i < src.length; i++) {
  if (src[i] === "{") depth++;
  if (src[i] === "}") { depth--; if (depth === 0) { cfgEnd = i; break; } }
}
const outside = src.slice(0, cfgStart) + src.slice(cfgEnd + 1);
const lines = outside.split("\n");
const counts = new Map();
lines.forEach((line, li) => {
  const nums = line.match(/(?<![\w.])\d+(?:\.\d+)?(?![\w])/g) || [];
  nums.forEach(n => {
    const key = n + " @ " + line.trim().slice(0, 90);
    counts.set(key, (counts.get(key) || 0) + 1);
  });
});
console.log("NUMERIC LITERALS OUTSIDE CONFIG (value @ context = count):");
[...counts.entries()].sort().forEach(([k, v]) => console.log("  " + k + "  x" + v));
const hexes = outside.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
const rgbas = outside.match(/rgba?\([^)]*\)/g) || [];
console.log("HEX outside CONFIG: " + hexes.length + (hexes.length ? " " + hexes.join(",") : ""));
console.log("RGBA outside CONFIG: " + rgbas.length + (rgbas.length ? " " + rgbas.join(",") : ""));
const styleM = html.match(/<style>([\s\S]*?)<\/style>/);
const styleNums = (styleM[1].match(/(?<![\w.])\d+(?:\.\d+)?%?/g) || []);
console.log("STYLE numeric tokens: " + styleNums.join(", "));
// CONFIG key inventory (top-level + one nesting level, by source scan of the block)
const block = src.slice(cfgStart, cfgEnd + 1);
const keys = [];
block.split("\n").forEach(l => {
  const mm = l.match(/^\s{2}([A-Za-z_][\w]*)\s*:/) || l.match(/^\s{10,}([A-Za-z_][\w]*)\s*:/);
  if (mm) keys.push(mm[1]);
});
console.log("CONFIG KEYS (" + keys.length + "): " + keys.join(", "));
