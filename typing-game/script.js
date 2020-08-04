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

addWordToDOM();

// // // Event Listeners // // //

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';
  }
});
