// Obfuscates every .js file and inline <script> in the repo, in place.
// Usage (on the `obfuscated` branch): node tools/obfuscate.js
// Requires: npm i javascript-obfuscator@4.0.0 (in tools/ or on NODE_PATH)
const fs = require('fs');
const path = require('path');
const JO = require('javascript-obfuscator');

const ROOT = path.resolve(__dirname, '..');
const SKIP = new Set(['.git', 'tools', 'tmp', 'node_modules', '.vs']);
const OPTS = {
  compact: true,
  renameGlobals: false,          // keep globals: inline onclick="fn()" handlers still work
  stringArray: true,
  stringArrayThreshold: 0.75,
  stringArrayEncoding: ['base64'],
  identifierNamesGenerator: 'hexadecimal',
  splitStrings: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  selfDefending: false,
  debugProtection: false,
  disableConsoleOutput: false,
  target: 'browser',
};
const ob = (code) => JO.obfuscate(code, OPTS).getObfuscatedCode();

let nJs = 0, nInline = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (e.name.endsWith('.js')) {
      fs.writeFileSync(p, ob(fs.readFileSync(p, 'utf8'))); nJs++;
    } else if (e.name.endsWith('.html')) {
      const src = fs.readFileSync(p, 'utf8');
      const out = src.replace(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi, (m, attrs, body) => {
        attrs = attrs || '';
        if (/\bsrc\s*=/i.test(attrs) || !body.trim()) return m;
        if (/type\s*=\s*["']?(?!text\/javascript|module)/i.test(attrs)) return m;
        nInline++;
        return `<script${attrs}>${ob(body).replace(/<\/script/gi, '<\/script')}</script>`;
      });
      if (out !== src) fs.writeFileSync(p, out);
    }
  }
})(ROOT);
console.log(`Obfuscated ${nJs} .js files and ${nInline} inline scripts`);
