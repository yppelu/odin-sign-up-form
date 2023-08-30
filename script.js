const form = document.querySelector('form');

const fnameInput = document.getElementById('user_fname');
const lnameInput = document.getElementById('user_lname');
const emailInput = document.getElementById('user_email');
const phnumberInput = document.getElementById('user_phnumber');
const pwdInput = document.getElementById('user_pwd');
const pwdConfirmInput = document.getElementById('user_pwd_confirm');

let isInputValid = true;

form.addEventListener('submit', (e) => {
  if (fnameInput.value === '' || fnameInput.value === null) {
    fnameInput.nextSibling.nextSibling.textContent = "* this field is required";
    fnameInput.classList.add('invalid-input');
    isInputValid = false;
  }

  if (emailInput.value === '' || emailInput.value === null) {
    emailInput.nextSibling.nextSibling.textContent = "* this field is required";
    emailInput.classList.add('invalid-input');
    isInputValid = false;
  }

  if (pwdInput.value === '' || pwdInput.value === null) {
    pwdInput.nextSibling.nextSibling.textContent = "* this field is required";
    pwdInput.classList.add('invalid-input');
    isInputValid = false;
  }

  if (pwdConfirmInput.value === '' || pwdConfirmInput.value === null) {
    pwdConfirmInput.nextSibling.nextSibling.textContent = "* this field is required";
    pwdConfirmInput.classList.add('invalid-input');
    isInputValid = false;
  }

  if (isInputValid === false) {
    e.preventDefault();
  }
});

fnameInput.addEventListener('input', () => {
  if (fnameInput.value === '' || fnameInput.value === null) {
    fnameInput.nextSibling.nextSibling.textContent = "* this field is required";
    fnameInput.classList.remove('valid-input');
    fnameInput.classList.add('invalid-input');
    isInputValid = false;
  } else {
    fnameInput.nextSibling.nextSibling.textContent = "";
    fnameInput.classList.remove('invalid-input');
    fnameInput.classList.add('valid-input');
    isInputValid = true;
  }
});

lnameInput.addEventListener('input', () => {
  lnameInput.classList.add('valid-input');
});

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
emailInput.addEventListener('input', () => {
  if (emailInput.value === '' || fnameInput.value === null) {
    emailInput.nextSibling.nextSibling.textContent = "* this field is required";
    emailInput.classList.remove('valid-input');
    emailInput.classList.add('invalid-input');
    isInputValid = false;
  } else if (!emailRegExp.test(emailInput.value)) {
    emailInput.nextSibling.nextSibling.textContent = "* invalid email address";
    emailInput.classList.remove('valid-input');
    emailInput.classList.add('invalid-input');
    isInputValid = false;
  } else {
    emailInput.nextSibling.nextSibling.textContent = "";
    emailInput.classList.remove('invalid-input');
    emailInput.classList.add('valid-input');
    isInputValid = true;
  }
});

const phnumberRegExp = /^\+\d \d{3} \d{3}-\d{4}$/;
phnumberInput.addEventListener('input', () => {
  if (!(phnumberRegExp.test(phnumberInput.value)) && phnumberInput.value !== '' && phnumberInput.value !== null) {
    phnumberInput.nextSibling.nextSibling.textContent = "* number doesn't match pattern +x xxx xxx-xxxx";
    phnumberInput.classList.remove('valid-input');
    phnumberInput.classList.add('invalid-input');
    isInputValid = false;
  } else {
    phnumberInput.nextSibling.nextSibling.textContent = "";
    phnumberInput.classList.remove('invalid-input');
    phnumberInput.classList.add('valid-input');
    isInputValid = true;
  }
});

pwdInput.addEventListener('input', () => {
  if (pwdInput.value === '' || pwdInput.value === null) {
    pwdInput.nextSibling.nextSibling.textContent = "* this field is required";
    pwdInput.classList.add('invalid-input');
    isInputValid = false;
  } else if (pwdInput.value.length < 8) {
    pwdInput.nextSibling.nextSibling.textContent = "* password must be 8 or more characters long";
    pwdInput.classList.remove('valid-input');
    pwdInput.classList.add('invalid-input');
    isInputValid = false;
  } else {
    pwdInput.nextSibling.nextSibling.textContent = "";
    pwdInput.classList.remove('invalid-input');
    pwdInput.classList.add('valid-input');
    isInputValid = true;
  }
});

pwdConfirmInput.addEventListener('input', () => {
  if (pwdConfirmInput.value === '' || pwdInput.value === null) {
    pwdConfirmInput.nextSibling.nextSibling.textContent = "* this field is required";
    pwdConfirmInput.classList.add('invalid-input');
    isInputValid = false;
  } else if (pwdConfirmInput.value !== pwdInput.value) {
    pwdConfirmInput.nextSibling.nextSibling.textContent = "* passwords do not match";
    pwdConfirmInput.classList.remove('valid-input');
    pwdConfirmInput.classList.add('invalid-input');
    isInputValid = false;
  } else if (pwdConfirmInput.value.length < 8) {
    pwdConfirmInput.nextSibling.nextSibling.textContent = "* password must be 8 or more characters long";
    pwdConfirmInput.classList.remove('valid-input');
    pwdConfirmInput.classList.add('invalid-input');
    isInputValid = false;
  } else {
    pwdConfirmInput.nextSibling.nextSibling.textContent = "";
    pwdConfirmInput.classList.remove('invalid-input');
    pwdConfirmInput.classList.add('valid-input');
    isInputValid = true;
  }
});