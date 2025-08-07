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

function nextChar() {
  if (characters.length === 0) return;
  const idx = Math.floor(Math.random() * characters.length);
  current = characters[idx];
  document.getElementById('charDisplay').textContent = current;
}

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === current.toLowerCase()) {
    nextChar();
  }
});

document.getElementById('themeToggle').addEventListener('change', (e) => {
  document.body.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
});

loadLayout().then((chars) => {
  characters = chars;
  nextChar();
});
