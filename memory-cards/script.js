const cardsContainer = document.getElementById('cards-container');
const addContainer = document.getElementById('add-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const addBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const currentEl = document.getElementById('current');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

// Keep track of current card
let currentActiveCard = 0;

// Store cards to DOM
const cardsEl = [];

// Store card data
const cardsData = [
  {
    question: "Who's the best Pokemon?",
    answer: 'Eevee!',
  },
  {
    question: "Who's the best kitty?",
    answer: 'Poca!',
  },
  {
    question: "Who's the best Sailor Senshi?",
    answer: 'Chibimoon!',
  },
];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a card in DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>
          ${data.question}
        </p>
      </div>
      <div class="inner-card-back">
        <p>
          ${data.answer}
        </p>
      </div>
    </div>
  `;

  // Use listener to flip card
  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add card to deck of cards in DOM
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentCardNumber();
}

// Show current card's position in the deck
function updateCurrentCardNumber() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();
