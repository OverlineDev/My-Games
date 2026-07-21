// Parse game list from data attribute
const gameFiles = JSON.parse(document.body.dataset.games);

let gamesList = [];
let proxyMode = false;

// Toggle proxy mode (you'll implement actual logic later)
function toggleProxy() {
  proxyMode = !proxyMode;
  const btn = document.getElementById('proxy-btn');
  btn.textContent = proxyMode ? '🔒 Proxy OFF' : '🔓 Proxy Mode';
  btn.classList.toggle('active', proxyMode);
  
  // Optional: re-render cards if proxy mode affects URL handling
  renderGames(gamesList);
}

// Load all game JSON files
async function loadGames() {
  const allGames = [];

  for (const file of gameFiles) {
    try {
      const res = await fetch(`games/${file}`);
      const gameData = await res.json();
      
      // Handle both URL and local file paths
      if (gameData.url) {
        gameData.isLocal = gameData.url.startsWith('/games-files/') 
                          || gameData.url.startsWith('./games-files/');
      }
      
      allGames.push(gameData);
    } catch (err) {
      console.warn(`Failed to load ${file}:`, err);
    }
  }

  return allGames;
}

// Render game cards
function renderGames(list) {
  const grid = document.getElementById('games-grid');
  grid.innerHTML = '';

  list.forEach(game => {
    const card = document.createElement('a');
    card.href = proxyMode && !game.isLocal ? '#' : game.url;
    
    // If proxy mode is on and it's not a local file, don't navigate yet
    if (proxyMode && !game.isLocal) {
      card.onclick = (e) => {
        e.preventDefault();
        alert('Proxy mode active! Configure your proxy handler here.');
        // Your proxy logic will go here later
      };
    }
    
    card.target = game.isLocal ? '_self' : '_blank';
    card.className = 'game-card';

    const thumb = game.image && game.image.trim() !== ''
      ? `<img src="${game.image}" alt="${game.title}" />`
      : `<div class="placeholder">🎲</div>`;

    card.innerHTML = `
      ${thumb}
      <div class="card-info">
        <h3>${game.title}</h3>
        <span class="genre">${game.genre || 'Game'}</span>
        <p>${game.description || ''}</p>
        ${game.isLocal ? '<span class="local-badge">⬇️ Local File</span>' : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

// Search filter
function filterGames() {
  const term = document.getElementById('search').value.toLowerCase();
  const filtered = gamesList.filter(g =>
    g.title.toLowerCase().includes(term) ||
    (g.genre && g.genre.toLowerCase().includes(term)) ||
    (g.description && g.description.toLowerCase().includes(term))
  );
  renderGames(filtered);
}

// On page load
loadGames().then(list => {
  gamesList = list;
  renderGames(list);
});
