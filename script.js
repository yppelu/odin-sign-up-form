const form = document.querySelector('form');

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phnumberRegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

let isInputValid;

const allInputs = document.querySelectorAll('input');
allInputs.forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('valid-input');
    input.classList.add('invalid-input');
    isInputValid = false;

    if (input.id === 'user_fname' || input.id === 'user_lname') {
      isInputValid = true;
    }
    if (input.id === 'user_email') {
      if (!emailRegExp.test(input.value)) {
        input.nextSibling.nextSibling.textContent = "* invalid email address";
      } else {
        isInputValid = true;
      }
    }
    if (input.id === 'user_phnumber') {
      if (!phnumberRegExp.test(input.value)) {
        input.nextSibling.nextSibling.textContent = "* invalid phone number";
      } else {
        isInputValid = true;
      }
      if (input.value === '' || input.value === null) {
        input.nextSibling.nextSibling.textContent = "";
        isInputValid = true;
      }
    }
    if (input.id === 'user_pwd') {
      if (input.value.length < 8) {
        input.nextSibling.nextSibling.textContent = "* password must be 8 or more characters long";
      } else {
        isInputValid = true;
      }
    }
    if (input.id === 'user_pwd_confirm') {
      const userPassword = document.getElementById('user_pwd').value;
      if (input.value !== userPassword) {
        input.nextSibling.nextSibling.textContent = "* passwords do not match";
      } else {
        isInputValid = true;
      }
    }

    if (isInputValid === true) {
      input.nextSibling.nextSibling.textContent = "";
      input.classList.remove('invalid-input');
      input.classList.add('valid-input');
      isInputValid = true;
    }

    if (input.hasAttribute('required') && (input.value === '' || input.value === null)) {
      input.nextSibling.nextSibling.textContent = "* this field is required";
      input.classList.add('invalid-input');
      isInputValid = false;
    }
  });
});

form.addEventListener('submit', (e) => {
  allInputs.forEach(input => {
    if (input.hasAttribute('required') && (input.value === '' || input.value === null)) {
      input.nextSibling.nextSibling.textContent = "* this field is required";
      input.classList.add('invalid-input');
      isInputValid = false;
    }
  });

  if (isInputValid === false) {
    e.preventDefault();
  }
});