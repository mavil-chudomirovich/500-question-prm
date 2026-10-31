// Sinh questions_mix.js: trộn 500 câu từ 2 nguồn AI GENERATE + QUIZLET QUESTION
// theo tỉ lệ 50/50, vẫn giữ phân bố theo 19 chủ đề (sub).
// Chạy: node build_mix.js
const fs = require('fs');

function load(file, key) {
  const window = {};
  eval(fs.readFileSync(file, 'utf8'));
  return window[key];
}

const AI = load('questions.js', 'QUESTIONS');
const QZ = load('questions_qz.js', 'QUESTIONS_QZ');
const N = AI.length + QZ.length; // 1000
const TOTAL = 500;

// Số câu mục tiêu cho từng chủ đề = một nửa tổng số câu của chủ đề đó.
const subs = [...new Set([...AI, ...QZ].map(q => q.sub))].sort((a, b) => a - b);
const bySub = (arr, s) => arr.filter(q => q.sub === s);

const targets = {};
let sum = 0;
const fracs = [];
subs.forEach(s => {
  const half = (bySub(AI, s).length + bySub(QZ, s).length) / 2;
  const base = Math.floor(half);
  targets[s] = base;
  sum += base;
  if (half > base) fracs.push(s);
});
// Chia phần lẻ còn lại (tổng luôn = 500) cho các chủ đề có .5, ưu tiên chủ đề nhiều câu.
let rest = TOTAL - sum;
fracs.sort((a, b) => (bySub(AI, b).length + bySub(QZ, b).length) - (bySub(AI, a).length + bySub(QZ, a).length) || a - b);
for (let i = 0; i < rest; i++) targets[fracs[i % fracs.length]]++;

// Chọn số câu mỗi nguồn trong từng chủ đề, lệch tối thiểu, không vượt quá số câu có.
const plan = {};
subs.forEach(s => {
  const aAll = bySub(AI, s), qAll = bySub(QZ, s);
  let a = Math.floor(targets[s] / 2);
  let q = targets[s] - a;
  if (a > aAll.length) { q += a - aAll.length; a = aAll.length; }
  if (q > qAll.length) { a += q - qAll.length; q = qAll.length; }
  plan[s] = { a: Math.max(0, a), q: Math.max(0, q) };
});

// Cân bằng lại toàn cục để đúng 250 AI + 250 QZ (vẫn giữ nguyên số câu mỗi chủ đề).
function totals() {
  return subs.reduce((acc, s) => { acc.a += plan[s].a; acc.q += plan[s].q; return acc; }, { a: 0, q: 0 });
}
let t = totals();
while (t.a !== t.q) {
  const wantMoreAI = t.a < t.q;
  const s = subs.find(s => {
    const aAll = bySub(AI, s).length, qAll = bySub(QZ, s).length;
    return wantMoreAI
      ? plan[s].a < aAll && plan[s].q > 0
      : plan[s].q < qAll && plan[s].a > 0;
  });
  if (!s) break;
  if (wantMoreAI) { plan[s].a++; plan[s].q--; }
  else { plan[s].q++; plan[s].a--; }
  t = totals();
}

// Lấy câu trải đều trong nguồn để không dồn về đầu danh sách.
function spread(arr, n) {
  if (n >= arr.length) return arr.slice();
  if (n <= 0) return [];
  const out = [];
  for (let i = 0; i < n; i++) out.push(arr[Math.floor(i * arr.length / n)]);
  return out;
}

// Xáo trộn có seed cố định (mỗi lần build ra cùng kết quả).
function seededShuffle(arr, seed) {
  let x = seed >>> 0;
  const rnd = () => ((x = (x * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const out = [];
subs.forEach(s => {
  const pickedAI = spread(bySub(AI, s), plan[s].a).map(q => ({ ...q, _bank: 'A' }));
  const pickedQZ = spread(bySub(QZ, s), plan[s].q).map(q => ({ ...q, _bank: 'Q' }));
  seededShuffle([...pickedAI, ...pickedQZ], 1000 + s).forEach(q => out.push(q));
});

if (out.length !== TOTAL) throw new Error('Số câu mix không đúng 500: ' + out.length);

const clean = out.map((q, i) => {
  const { _bank, ...rest } = q;
  return {
    ...rest,
    id: i + 1,
    origId: q.id,
    mixSource: _bank === 'A' ? 'ai' : 'qz',
    code: `MIX-${_bank}-${String(q.id).padStart(3, '0')}`,
    sub: q.sub,
    topic: q.topic
  };
});

const header = '// AUTO-GENERATED bởi build_mix.js — 500 câu trộn 50/50 từ AI GENERATE + QUIZLET QUESTION\n';
fs.writeFileSync('questions_mix.js', header + 'window.QUESTIONS_MIX = ' + JSON.stringify(clean) + ';\n', 'utf8');

const aiN = clean.filter(q => q.mixSource === 'ai').length;
console.log(`Đã tạo questions_mix.js: ${clean.length} câu (AI ${aiN} / QZ ${clean.length - aiN})`);
console.log('Phân bố theo chủ đề:', JSON.stringify(clean.reduce((m, q) => { m[q.sub] = (m[q.sub] || 0) + 1; return m; }, {})));
