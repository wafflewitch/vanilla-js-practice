const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// // // Functions // // //

// Show error message about input
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline around input
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Validate input for a given form field
function validateField(inputsArray) {
  inputsArray.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get the name of a given input field
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check the length of a given input
function checkInputLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be fewer than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Ensure a match between two inputs
function checkInputMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords must match');
  }
}

// // // Event listeners // // //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateField([username, email, password, password2]);
  checkInputLength(username, 4, 20);
  checkInputLength(password, 8, 25);
  checkInputMatch(password, password2);
});
