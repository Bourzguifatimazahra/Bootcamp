let currentPlayer = null;
let currentGame = null;
let playerNumber = null;
let token = null;

// DOM elements
const authSection = document.getElementById('auth-section');
const gameSection = document.getElementById('game-section');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const gameBoard = document.getElementById('game-board');
const gameStatus = document.getElementById('game-status');
const currentPlayerDisplay = document.getElementById('current-player');
const newGameBtn = document.getElementById('new-game-btn');

// Direction buttons
const upBtn = document.getElementById('up-btn');
const leftBtn = document.getElementById('left-btn');
const downBtn = document.getElementById('down-btn');
const rightBtn = document.getElementById('right-btn');

// Event listeners
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);
newGameBtn.addEventListener('click', createNewGame);
upBtn.addEventListener('click', () => makeMove('up'));
leftBtn.addEventListener('click', () => makeMove('left'));
downBtn.addEventListener('click', () => makeMove('down'));
rightBtn.addEventListener('click', () => makeMove('right'));

// Auth functions
async function login() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    const data = await response.json();
    if (response.ok) {
      token = data.token;
      currentPlayer = username;
      authSection.style.display = 'none';
      gameSection.style.display = 'block';
      checkForGames();
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed');
  }
}

async function register() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    const data = await response.json();
    if (response.ok) {
      alert('Registration successful. Please login.');
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('Registration failed');
  }
}

// Game functions
async function createNewGame() {
  try {
    const response = await fetch('/api/games', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    const data = await response.json();
    if (response.ok) {
      currentGame = data._id;
      playerNumber = 1;
      gameStatus.textContent = 'Waiting for opponent...';
      renderGame(data);
      pollGameStatus();
    } else {
      alert(data.message || 'Failed to create game');
    }
  } catch (error) {
    console.error('Game creation error:', error);
    alert('Failed to create game');
  }
}

async function joinGame(gameId) {
  try {
    const response = await fetch(`/api/games/${gameId}/join`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    const data = await response.json();
    if (response.ok) {
      currentGame = gameId;
      playerNumber = 2;
      gameStatus.textContent = 'Game started!';
      renderGame(data);
      pollGameStatus();
    } else {
      alert(data.message || 'Failed to join game');
    }
  } catch (error) {
    console.error('Join game error:', error);
    alert('Failed to join game');
  }
}

async function makeMove(direction) {
  if (!currentGame) return;
  
  try {
    const response = await fetch(`/api/games/${currentGame}/move`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ direction })
    });
    
    const data = await response.json();
    if (response.ok) {
      renderGame(data);
      if (data.status === 'finished') {
        gameStatus.textContent = `Game over! ${data.winner === currentPlayer ? 'You won!' : 'You lost!'}`;
      }
    } else {
      alert(data.message || 'Invalid move');
    }
  } catch (error) {
    console.error('Move error:', error);
    alert('Move failed');
  }
}

function renderGame(game) {
  // Clear the board
  gameBoard.innerHTML = '';
  
  // Create cells
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;
      
      // Add obstacles
      if (game.board[y][x] === 1) {
        cell.classList.add('obstacle');
      }
      
      // Add player 1
      if (game.player1Position.x === x && game.player1Position.y === y) {
        cell.classList.add('player1');
        cell.textContent = 'P1';
      }
      
      // Add player 2
      if (game.player2Position.x === x && game.player2Position.y === y) {
        cell.classList.add('player2');
        cell.textContent = 'P2';
      }
      
      // Add bases
      if ((game.player1Base.x === x && game.player1Base.y === y) || 
          (game.player2Base.x === x && game.player2Base.y === y)) {
        cell.classList.add('base');
      }
      
      gameBoard.appendChild(cell);
    }
  }
  
  // Update game info
  if (game.status === 'ongoing') {
    currentPlayerDisplay.textContent = `Current player: ${game.currentPlayer === game.player1._id ? game.player1.username : game.player2.username}`;
  }
}

async function checkForGames() {
  try {
    const response = await fetch('/api/games', {
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    });
    
    const games = await response.json();
    if (response.ok && games.length > 0) {
      // For simplicity, just join the first available game
      const availableGame = games.find(g => g.status === 'waiting' && g.player1._id !== currentPlayer);
      if (availableGame) {
        joinGame(availableGame._id);
      }
    }
  } catch (error) {
    console.error('Check games error:', error);
  }
}

function pollGameStatus() {
  if (!currentGame) return;
  
  const interval = setInterval(async () => {
    try {
      const response = await fetch(`/api/games/${currentGame}`, {
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      });
      
      const game = await response.json();
      if (response.ok) {
        renderGame(game);
        
        if (game.status === 'finished') {
          clearInterval(interval);
          gameStatus.textContent = `Game over! ${game.winner === currentPlayer ? 'You won!' : 'You lost!'}`;
        }
      }
    } catch (error) {
      console.error('Polling error:', error);
    }
  }, 2000);
}