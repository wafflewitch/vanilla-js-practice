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
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// // // Event listeners // // //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateField([username, email, password, password2]);

  // if (username.value === '') {
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }
});
