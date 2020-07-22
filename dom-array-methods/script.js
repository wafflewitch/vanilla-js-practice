const mainList = document.getElementById('main-list');
const addBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double-money');
const filterBtn = document.getElementById('filter-millionaires');
const sortBtn = document.getElementById('sort-richest');
const consolidateBtn = document.getElementById('consolidate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// // // Functions // // //

// Fetch random user API and create new user with money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Add new object to data array
function addData(obj) {
  data.push(obj);
  updateDOM(data);
}

// Update DOM
function updateDOM(newData = data) {
  // Clear main div
  mainList.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  // Iterate over newData, create "person" divs, and append to main div
  newData.forEach((person) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('person');
    newDiv.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
      person.money
    )}`;
    mainList.appendChild(newDiv);
  });
}

// Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double all users' money
// (Returns a new array)
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

// Sort all users by wealth
function sortRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Filter all users for only millionaires
// (Returns a new array)
function filterMillionaires() {
  data = data.filter((person) => person.money > 1000000);

  updateDOM(data);
}

// Consolidate all users' wealth
function consolidateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const newDiv = document.createElement('div');
  newDiv.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;

  mainList.appendChild(newDiv);
}

// // // Event Listeners // // //

addBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortRichest);
filterBtn.addEventListener('click', filterMillionaires);
consolidateBtn.addEventListener('click', consolidateWealth);
