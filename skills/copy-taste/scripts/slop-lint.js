#!/usr/bin/env node
// slop-lint: counts the countable tells of model-written website copy.
// Usage: node slop-lint.js page.html [more.html|.txt|.md ...] [--json]
// FAIL = fix it. WARN = over budget, fix or keep on purpose. INFO = look at it.
// Exit code 1 if any file has a FAIL. No dependencies.

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const files = args.filter(a => !a.startsWith('--'));
if (!files.length) {
  console.error('usage: node slop-lint.js <file.html|.txt|.md> [...] [--json]');
  process.exit(2);
}

// ---------- text extraction ----------

const ENTITIES = { nbsp: ' ', amp: '&', mdash: '—', ndash: '–', rsquo: "'", lsquo: "'", ldquo: '"', rdquo: '"', middot: '·', hellip: '…', quot: '"', apos: "'", lt: '<', gt: '>', times: '×', deg: '°' };
const decode = s => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? ' ');

function extract(raw, ext) {
  if (ext !== '.html' && ext !== '.htm') {
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const headings = lines.filter(l => /^#{1,3}\s/.test(l)).map(l => ({ level: l.match(/^#+/)[0].length, text: l.replace(/^#+\s*/, '') }));
    return { lines: lines.map(l => l.replace(/^#+\s*/, '')), headings, footer: lines.slice(-8).join('\n'), eyebrows: 0, html: '' };
  }
  let html = raw
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const headings = [...html.matchAll(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi)]
    .map(m => ({ level: +m[1], text: decode(m[2].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim() }))
    .filter(h => h.text);
  const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
  const toLines = h => decode(h
    .replace(/<\/?(p|li|h[1-6]|blockquote|div|br|tr|td|th|figcaption|section|header|footer|button|a|span|dt|dd|label|small|strong)[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, ' '))
    .split('\n').map(l => l.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const eyebrows = (html.match(/class="[^"]*\b(eyebrow|kicker|overline|pretitle|section-label|tag-line|label)\b[^"]*"/gi) || []).length;
  return { lines: toLines(html), headings, footer: footerMatch ? toLines(footerMatch[0]).join('\n') : '', eyebrows, html };
}

// ---------- rules ----------

const BAN_WORDS = ['delve', 'tapestry', 'testament to', 'realm', 'embark', 'beacon', 'multifaceted', 'paradigm', 'myriad', 'plethora', 'meticulous', 'intricate', 'interplay',
  'elevate', 'elevated', 'unlock', 'unleash', 'empower', 'harness', 'supercharge', 'turbocharge', 'seamless', 'seamlessly', 'effortless', 'effortlessly', 'cutting-edge',
  'revolutionary', 'transformative', 'holistic', 'next-level', 'world-class', 'best-in-class', 'game-changer', 'game changer', 'state-of-the-art', 'bespoke', 'synergy', 'leverage'];
const BAN_PHRASES = [/in today'?s (fast-paced|digital|modern|ever-changing)/i, /unlock the (power|potential)/i, /\breimagined\b/i, /the future of [a-z]+ is (here|now)/i, /say goodbye to/i,
  /whether you'?re an? /i, /look no further/i, /join (thousands|millions) of/i, /trusted by (teams|businesses|companies) (worldwide|everywhere)/i, /imagine a world/i,
  /ready to (transform|take your|elevate)/i, /ever-evolving/i, /one-stop shop/i, /take (it|your [a-z]+) to the next level/i];
const RESIDUE = [/lorem ipsum/i, /\[(your |company |brand )?(company|brand|business) name\]/i, /\bcertainly!/i, /i hope this helps/i, /\bas an ai\b/i, /\[insert/i];
const VIRTUE = ['honest', 'honestly', 'calm', 'calmly', 'quiet', 'quietly', 'actually', 'genuine', 'genuinely', 'truly', 'simply', 'thoughtful', 'thoughtfully', 'carefully', 'intentional', 'intentionally', 'steady', 'dependable', 'effortless'];
const DEFAULT_PEOPLE = ['Priya', 'Okafor', 'Raman', 'Natarajan', 'Sarah J', 'Elara', 'Aisha', 'Lena M', 'Marcus', 'Dana ', 'Tomas', 'Nora ', 'Mara ', 'Isla ', 'Maya ', 'Ines ', 'Jess '];
const DEFAULT_COMPANIES = ['Fieldnote', 'Kestrel', 'Halcyon', 'Brightloop', 'Acme', 'Northwind', 'Lumen', 'Nimbus', 'Zenith', 'Apex', 'Vertex'];
const NUM_WORD = '(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\\d+)';

const wordRe = w => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s')}\\b`, 'gi');
const sentencesOf = text => text.split(/(?<=[.!?])\s+(?=[A-Z"'“(])/).map(s => s.trim()).filter(s => /[a-z]/i.test(s));
const clip = s => (s.length > 110 ? s.slice(0, 107) + '…' : s);

function lint(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const { lines, headings, footer, eyebrows } = extract(raw, path.extname(file).toLowerCase());
  const full = lines.join('\n');
  // Word-level checks skip quoted and backticked spans: a customer quote or a cited
  // example ("elevate") is someone else's words, not the page's voice.
  const unquote = s => s.replace(/"[^"\n]*"|“[^”\n]*”|`[^`\n]*`/g, '""');
  const text = unquote(full);
  const prose = unquote(lines.filter(l => l.split(/\s+/).length >= 5).join(' '));
  const words = full.split(/\s+/).filter(Boolean).length;
  const out = [];
  const add = (level, rule, hits, note) => out.push({ level, rule, count: Array.isArray(hits) ? hits.length : hits, examples: Array.isArray(hits) ? [...new Set(hits)].slice(0, 4).map(clip) : [], note });
  const find = (re, src = text) => [...src.matchAll(re)].map(m => {
    const i = m.index; const s = src.lastIndexOf('\n', i) + 1; const e = src.indexOf('\n', i);
    return src.slice(s, e < 0 ? undefined : e);
  });

  // FAIL tier
  const residue = RESIDUE.flatMap(re => find(new RegExp(re.source, 'gi'), full));
  if (residue.length) add('FAIL', 'chatbot residue / unfilled placeholder', residue);
  const banW = BAN_WORDS.flatMap(w => [...text.matchAll(wordRe(w))].map(m => m[0].toLowerCase()));
  if (banW.length) add('FAIL', 'gen-1 slop words', banW, 'replace with the fact the word stands in for');
  const banP = BAN_PHRASES.flatMap(re => find(new RegExp(re.source, 'gi')));
  if (banP.length) add('FAIL', 'gen-1 stock phrases', banP);
  const need = find(/\[NEED:[^\]]*\]/g, full);
  if (need.length) add('INFO', 'open [NEED] placeholders', need, 'list these for the user');

  // budgeted devices
  const budget = (rule, hits, max, note) => { if (hits.length > max) add('WARN', `${rule} (budget ${max})`, hits, note); else if (hits.length) add('INFO', `${rule} (${hits.length}/${max})`, hits); };

  const emd = (prose.match(/—/g) || []).length;
  if (emd > 2) add('WARN', 'em dashes in body (budget 2)', emd, 'use commas, colons, parentheses where natural');

  const hText = headings.map(h => h.text);
  budget('two-fragment heading "X. Y."', hText.filter(h => /^[^.?!]{2,48}[.!] [^.?!]{2,55}[.!]?$/.test(h) && h.split(/\s+/).length <= 14), 1);
  budget('number-pair heading', hText.filter(h => new RegExp(`^${NUM_WORD}\\b[^.]*?[,.]\\s+(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\\d+)\\b`, 'i').test(h)), 1);

  const contrast = find(/[^\n]*?(, not (?!only|just)[a-z]|\bisn'?t\b|\bnot just\b|\brather than\b|\binstead of\b|\bwithout the\b|\bnot by\b)[^\n]*/gi);
  budget('contrast frames incl. rather than / instead of / without the', contrast, 2, 'state the positive fact on its own');
  budget('negation run "No X, no Y" / "No X. No Y."', find(/\bNo [^.,\n]{1,30}(, no |\. No )[^\n]*/g), 1);

  const virtue = VIRTUE.flatMap(w => [...prose.matchAll(wordRe(w))].map(m => m[0].toLowerCase()));
  budget('virtue words (honest/calm/quiet/actually…)', virtue, 2, 'show it with an admission or a fact instead');

  const riders = find(/, (ensuring|enabling|allowing|empowering|helping|letting|giving|making it|creating|delivering|fostering)\b[^\n]*/gi);
  budget('-ing riders', riders, 1);

  // "a, b and c" / "a, b, and c" with short items; heuristic, so it only reports
  const triads = [...prose.matchAll(/(?:^|[.:;!?] |, )([a-z][\w'-]*(?: [\w'-]+){0,2}), ([a-z][\w'-]*(?: [\w'-]+){0,2}),? (?:and|or) ([\w'-]+)/gi)].map(m => m[0].replace(/^[.:;!?,] /, ''));
  if (triads.length) add('INFO', `lists of three (${triads.length}, ~1 per ${Math.round(words / triads.length)} words)`, triads, 'fine when there really are three things; never back to back');

  const since = find(/\bsince (19|20)\d\d\b/gi);
  budget('"since [year]"', since, 1);
  const respond = find(/\b(within|in under) (one|two|three|24|48|\d+) (working |business )?(days?|hours?)\b/gi);
  budget('response-time promises', respond, 1, 'keep one, and only if true');

  // stat strip: runs of short numeric lines
  let run = [], strips = [];
  for (const l of lines) {
    const isPrice = /^[$€£]\d+(\.\d\d)?$/.test(l); // menu/pricing columns are not stat strips
    const isStat = !isPrice && /^\d{1,2}:\d\d\s?(am|pm|a\.m\.|p\.m\.)?$/i.test(l) || !isPrice && /^[~<>≈+−-]?\s?[$€£]?\d[\d,.]*\s?(%|\+|k|kg|m|ms|min|x|×|★|\/5|\/10| ?of \d+| ?days?| ?hrs?| ?hours?| ?years?)?$/i.test(l) || /^\d+(\.\d)?\s?\/\s?5$/.test(l);
    if (isStat) run.push(l); else if (l.split(/\s+/).length > 9) { if (run.length >= 3) strips.push(run.join(' / ')); run = []; }
  }
  if (run.length >= 3) strips.push(run.join(' / '));
  if (strips.length) add('WARN', `stat strip x${strips.length}`, strips, 'every number real and sourced? otherwise move numbers into sentences or [NEED]');

  const numbered = lines.filter(l => /^0\d$/.test(l)).length;
  if (numbered >= 6) add('WARN', `01/02/03 markers (${numbered})`, numbered, 'only for real sequences');
  if (eyebrows >= 5) add('WARN', `eyebrow/kicker labels (${eyebrows})`, eyebrows, 'one or two per page');

  // testimonials & cast
  const people = DEFAULT_PEOPLE.filter(n => text.includes(n));
  if (people.length) add('WARN', 'default-cast names', people, 'real names only; in fiction pick locale-true, unused names');
  const cos = DEFAULT_COMPANIES.filter(n => wordRe(n.trim()).test(text));
  if (cos.length) add('WARN', 'default fictional companies', cos);
  const quotes = (full.match(/^["“][^\n]{20,}["”]$/gm) || []).length;
  if (quotes >= 3) add('INFO', `quoted testimonials (${quotes})`, quotes, 'real? attributed with name + company? rough, not punchline-shaped?');

  // footer sign-off pun
  const signoff = (footer || lines.slice(-10).join('\n')).split('\n')
    .filter(l => /^(made|designed|built|crafted|roasted|grown|brewed|baked|written|fired|poured|stitched)\b[^.]{0,40}\b(in|by|on|with|at|since)\b/i.test(l) || /^(every|since) [^.]{3,30}\.$/i.test(l));
  if (signoff.length) add('WARN', 'footer sign-off line', signoff, 'footer = facts; drop the pun unless comedy is the brand');

  // rhythm
  const sents = sentencesOf(lines.filter(l => l.split(/\s+/).length >= 5).join(' '));
  if (sents.length >= 15) {
    const lens = sents.map(s => s.split(/\s+/).length);
    const mean = lens.reduce((a, b) => a + b, 0) / lens.length;
    const sd = Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / lens.length);
    const frag = lens.filter(n => n <= 4).length / lens.length;
    add('INFO', `rhythm: ${sents.length} sentences, mean ${mean.toFixed(1)} words, sd ${sd.toFixed(1)}, ${(frag * 100).toFixed(0)}% ≤4 words`, 0);
    if (sd < 4) add('WARN', 'uniform sentence length (sd < 4)', 0, 'let length follow meaning');
    if (frag > 0.3) add('WARN', 'fragment drumbeat (>30% of sentences ≤4 words)', 0);
  }

  return { file, words, headings: hText, findings: out };
}

// ---------- cross-file ----------

function crossFile(results) {
  if (results.length < 2) return [];
  const notes = [];
  const shape = h => h.toLowerCase().replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\d+)\b/g, '#').replace(/[^a-z# ]/g, '').trim();
  const grams = new Map();
  for (const r of results) {
    const seen = new Set();
    for (const h of r.headings) {
      const toks = shape(h).split(/\s+/);
      for (let i = 0; i + 3 <= toks.length; i++) {
        const g = toks.slice(i, i + 3).join(' ');
        if (/^(the|a|of|and|to|in|for|your|our|we|you)( |$)/.test(g) && /( the| a| of| and| to)$/.test(g)) continue;
        if (!seen.has(g)) { seen.add(g); grams.set(g, (grams.get(g) || []).concat(path.basename(path.dirname(r.file)) + '/' + path.basename(r.file))); }
      }
    }
  }
  for (const [g, fs_] of grams) if (fs_.length >= 2) notes.push(`heading phrase "${g}" in ${fs_.length} files: ${fs_.join(', ')}`);
  const h1s = results.map(r => `${path.basename(path.dirname(r.file))}: ${r.headings[0] || '(no heading)'}`);
  return { shared: notes.slice(0, 25), heroes: h1s };
}

// ---------- report ----------

const results = files.map(lint);
const cross = crossFile(results);
if (asJson) { console.log(JSON.stringify({ results, cross }, null, 2)); }
else {
  for (const r of results) {
    const fails = r.findings.filter(f => f.level === 'FAIL').length, warns = r.findings.filter(f => f.level === 'WARN').length;
    console.log(`\n== ${r.file}  (${r.words} words)  ${fails} FAIL, ${warns} WARN`);
    for (const f of r.findings.sort((a, b) => 'FWI'.indexOf(a.level[0]) - 'FWI'.indexOf(b.level[0]))) {
      console.log(`  ${f.level.padEnd(4)} ${f.rule}${f.count && !/\(\d/.test(f.rule) ? ` x${f.count}` : ''}${f.note ? `  -> ${f.note}` : ''}`);
      for (const e of f.examples) console.log(`         · ${e}`);
    }
  }
  if (cross.heroes) {
    console.log('\n== cross-file: first headings side by side');
    cross.heroes.forEach(h => console.log('  ' + h));
    if (cross.shared.length) { console.log('== cross-file: heading phrases shared across files'); cross.shared.forEach(n => console.log('  ' + n)); }
  }
}
process.exit(results.some(r => r.findings.some(f => f.level === 'FAIL')) ? 1 : 0);
