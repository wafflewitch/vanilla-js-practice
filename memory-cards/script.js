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
// const cardsData = [
//   {
//     question: "Who's the best Pokemon?",
//     answer: 'Eevee!',
//   },
//   {
//     question: "Who's the best kitty?",
//     answer: 'Poca!',
//   },
//   {
//     question: "Who's the best Sailor Senshi?",
//     answer: 'Chibimoon!',
//   },
// ];
const cardsData = getCardsData();

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

// Get data for cards from local storage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}

// Add data for cards to local storage
function setCardsData(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
}

// Event listeners

nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentCardNumber();
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentCardNumber();
});

showBtn.addEventListener('click', () => addContainer.classList.add('show'));

hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

addBtn.addEventListener('click', () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };

    createCard(newCard);

    questionEl.value = '';
    answerEl.value = '';

    addContainer.classList.remove('show');

    cardsData.push(newCard);

    setCardsData(cardsData);
  }
});

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
});
