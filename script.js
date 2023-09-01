let isInputValid = true;

/* User's name validation */
const fnameInput = document.getElementById('user_fname');
const fnameWarningBlock = document.querySelector('.fname-warning');
const validateFnameInput = () => validateRequiredInputs(fnameInput);
fnameInput.addEventListener('input', () => {
  validateFnameInput()
    ? setValidInput(fnameInput, fnameWarningBlock)
    : setWarning(fnameInput, fnameWarningBlock, '* this field is required');
});

/* User's email validation */
const emailInput = document.getElementById('user_email');
const emailWarningBlock = document.querySelector('.email-warning');
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const validateEmailInput = () => {
  if (!validateRequiredInputs(emailInput)) return 1;
  if (!emailRegExp.test(emailInput.value)) return 2;
}
emailInput.addEventListener('input', () => {
  if (validateEmailInput() === 1) {
    setWarning(emailInput, emailWarningBlock, '* this field is required');
  } else if (validateEmailInput() === 2) {
    setWarning(emailInput, emailWarningBlock, '* invalid email address');
  } else {
    setValidInput(emailInput, emailWarningBlock);
  }
});

/* User's phone number validation */
const phnumberInput = document.getElementById('user_phnumber');
const phnumberWarningBlock = document.querySelector('.phnumber-warning');
const phnumberRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const validatePhnumberInput = () => {
  return (phnumberRegExp.test(phnumberInput.value) || !phnumberInput.value);
}
phnumberInput.addEventListener('input', () => {
  validatePhnumberInput()
    ? setValidInput(phnumberInput, phnumberWarningBlock)
    : setWarning(phnumberInput, phnumberWarningBlock, '* invalid phone number');
});

/* User's password  validation */
const userPwdInput = document.getElementById('user_pwd');
const userPwdWarningBlock = document.querySelector('.pwd-warning');
const validatePwdInput = () => {
  if (!validateRequiredInputs(userPwdInput)) return 1;
  if (userPwdInput.value.length < 8) return 2;
}
userPwdInput.addEventListener('input', () => {
  if (validatePwdInput() === 1) {
    setWarning(userPwdInput, userPwdWarningBlock, '* this field is required');
  } else if (validatePwdInput() === 2) {
    setWarning(userPwdInput, userPwdWarningBlock, '* password must be 8 or more characters long');
  } else {
    setValidInput(userPwdInput, userPwdWarningBlock);
  }
});

/* User's password confirm validation */
const userPwdConfirmInput = document.getElementById('user_pwd_confirm');
const userPwdConfirmWarningBlock = document.querySelector('.pwd-confirm-warning');
const validatePwdConfirmInput = () => {
  if (!validateRequiredInputs(userPwdConfirmInput)) return 1;
  if (userPwdConfirmInput.value !== userPwdInput.value) return 2;
}
userPwdConfirmInput.addEventListener('input', () => {
  if (validatePwdConfirmInput() === 1) {
    setWarning(userPwdConfirmInput, userPwdConfirmWarningBlock, '* this field is required');
  } else if (validatePwdConfirmInput() === 2) {
    setWarning(userPwdConfirmInput, userPwdConfirmWarningBlock, '* passwords do not match');
  } else {
    setValidInput(userPwdConfirmInput, userPwdConfirmWarningBlock);
  }
});

/* Form validation */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  if (!validateRequiredInputs(fnameInput)) {
    setWarning(fnameInput, fnameWarningBlock, '* this field is required');
  }
  if (!validateRequiredInputs(emailInput)) {
    setWarning(emailInput, emailWarningBlock, '* this field is required');
  }
  if (!validateRequiredInputs(userPwdInput)) {
    setWarning(userPwdInput, userPwdWarningBlock, '* this field is required');
  }
  if (!validateRequiredInputs(userPwdConfirmInput)) {
    setWarning(userPwdConfirmInput, userPwdConfirmWarningBlock, '* this field is required');
  }

  if (!isInputValid) e.preventDefault();
});

/* Common functions */
function setValidInput(input, warningBlock) {
  input.classList.remove('invalid-input');
  warningBlock.textContent = '';
  isInputValid = true;
}

function setWarning(input, warningBlock, warningText) {
  input.classList.add('invalid-input');
  warningBlock.textContent = warningText;
  isInputValid = false;
}

function validateRequiredInputs(input) {
  return input.value;
}