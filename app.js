async function loadLayout() {
  if (navigator.keyboard && navigator.keyboard.getLayoutMap) {
    try {
      const layoutMap = await navigator.keyboard.getLayoutMap();
      const chars = Array.from(layoutMap.values()).filter((k) => k.length === 1);
      return Array.from(new Set(chars));
    } catch (e) {
      console.error(e);
    }
  }
  return 'abcdefghijklmnopqrstuvwxyz'.split('');
}

let characters = [];
let current = '';

let hits = 0;
let totalPresses = 0;
let startTime = null;
let lastResult = 'nada';
const config = {
  lower: true,
  upper: true,
  numbers: true,
  special: true,
};

let lowercaseChars = [];
let digits = [];
let specialChars = [];

function rebuildCharacters() {
  let chars = [];
  if (config.lower) chars = chars.concat(lowercaseChars);
  if (config.upper) chars = chars.concat(lowercaseChars.map((c) => c.toUpperCase()));
  if (config.numbers) chars = chars.concat(digits);
  if (config.special) chars = chars.concat(specialChars);
  characters = Array.from(new Set(chars));
  nextChar();
  lastResult = 'nada';
  updateStats();
}

function nextChar() {
  if (characters.length === 0) return;
  const idx = Math.floor(Math.random() * characters.length);
  current = characters[idx];
  document.getElementById('charDisplay').textContent = current;
}

function updateStats() {
  document.getElementById('hitCount').textContent = hits;
  document.getElementById('hitResult').textContent = lastResult;
  if (!startTime) {
    document.getElementById('speed').textContent = '0';
    return;
  }
  const minutes = (Date.now() - startTime) / 60000;
  const kpm = minutes > 0 ? (totalPresses / minutes).toFixed(2) : '0';
  document.getElementById('speed').textContent = kpm;
}

document.addEventListener('keydown', (e) => {
  if (!startTime) startTime = Date.now();
  totalPresses++;
  if (e.key === current) {
    hits++;
    lastResult = 'bien';
    nextChar();
  } else {
    lastResult = 'mal';
  }
  updateStats();

});

document.getElementById('themeToggle').addEventListener('change', (e) => {
  document.body.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
});

document.getElementById('configToggle').addEventListener('click', () => {
  document.getElementById('configPanel').classList.toggle('hidden');
});

document.getElementById('lowercaseOpt').addEventListener('change', (e) => {
  config.lower = e.target.checked;
  rebuildCharacters();
});

document.getElementById('uppercaseOpt').addEventListener('change', (e) => {
  config.upper = e.target.checked;
  rebuildCharacters();
});

document.getElementById('numbersOpt').addEventListener('change', (e) => {
  config.numbers = e.target.checked;
  rebuildCharacters();
});

document.getElementById('specialOpt').addEventListener('change', (e) => {
  config.special = e.target.checked;
  rebuildCharacters();
});

loadLayout().then((chars) => {
  lowercaseChars = chars.filter((c) => /[a-z]/.test(c));
  digits = chars.filter((c) => /[0-9]/.test(c));
  specialChars = chars.filter((c) => !/[a-z0-9]/i.test(c));
  rebuildCharacters();
});
