const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const exchangeRate = document.getElementById('rate');
const swapBtn = document.getElementById('swap');

// // // Functions // // //

// Fetch exchange rates and update DOM
function calculate() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const currentRate = data.rates[currency_two];

      exchangeRate.innerText = `1 ${currency_one} = ${currentRate} ${currency_two}`;

      amountTwo.value = (amountOne.value * exchangeRate).toFixed(2);
    });
}

// // // Event Listeners // // //
currencyOne.addEventListener('change', calculate());
currencyTwo.addEventListener('change', calculate());
amountOne.addEventListener('input', calculate());
amountTwo.addEventListener('input', calculate());
swapBtn.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
