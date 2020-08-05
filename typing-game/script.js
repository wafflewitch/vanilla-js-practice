const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// Word list
const words = [
  'cake',
  'cookie',
  'latte',
  'toffee',
  'waffle',
  'pancake',
  'muffin',
  'chocolate',
  'vanilla',
  'caramel',
  'fudge',
  'honey',
  'scone',
  'tiramisu',
  'pudding',
  'popsicle',
  'macaron',
];

// // // Mutable Variables // // //

let randomWord;
let score = 0;
let time = 10;

// Focus on text on page load
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// // // Functions // // //

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    // Stop and clear countdown
    clearInterval(timeInterval);
    // End game
    console.log('game over');
    gameOver();
  }
}

// End game and show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time's up!</h1>
    <p>Final score: ${score}</p>
    <button onclick="location.reload()">Rematch</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// // // Event Listeners // // //

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    time += 3;

    updateTime();
  }
});
