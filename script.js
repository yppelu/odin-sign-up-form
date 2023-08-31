const form = document.querySelector('form');
const allInputs = document.querySelectorAll('input');

let isInputValid;

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phnumberRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    isInputValid = false;
    input.classList.add('invalid-input');

    if (input.id === 'user_email' && !emailRegExp.test(input.value)) {
      input.nextSibling.nextSibling.textContent = '* invalid email address';
    } else if (input.id === 'user_phnumber' && input.value && !phnumberRegExp.test(input.value)) {
      input.nextSibling.nextSibling.textContent = '* invalid phone number';
    } else if (input.id === 'user_pwd' && input.value.length < 8) {
      input.nextSibling.nextSibling.textContent = '* password must be 8 or more characters long';
    } else if (input.id === 'user_pwd_confirm' && input.value !== document.getElementById('user_pwd').value) {
      input.nextSibling.nextSibling.textContent = '* passwords do not match';
    } else {
      isInputValid = true;
      input.nextSibling.nextSibling.textContent = '';
      input.classList.remove('invalid-input');
    }

    if (input.hasAttribute('required') && (input.value === '' || input.value === null)) {
      input.nextSibling.nextSibling.textContent = '* this field is required';
      input.classList.add('invalid-input');
      isInputValid = false;
    }
  });
});

form.addEventListener('submit', (e) => {
  allInputs.forEach(input => {
    if (input.hasAttribute('required') && (input.value === '' || input.value === null)) {
      input.nextSibling.nextSibling.textContent = '* this field is required';
      input.classList.add('invalid-input');
      isInputValid = false;
    }
  });
  if (!isInputValid) e.preventDefault();
});