'use strict';

//select the elements needed

const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
const newsletterContainer = document.querySelector('.newsletter-container');
const thxContainer = document.querySelector('.thx-container');
const dismissBtn = document.querySelector('#dismiss');
const userEmail = document.querySelector('span');
// Functions
const emailValidation = () => {
  const emailInserted = email.value;
  if (!emailInserted || !emailInserted.includes('@', '.com')) {
    return;
  } else {
    thxContainer.classList.remove('hidden');
    newsletterContainer.classList.add('hidden');

    userEmail.textContent = emailInserted;
  }
};

const dismissThxMsg = () => {
  newsletterContainer.classList.remove('hidden');
  thxContainer.classList.add('hidden');

  email.value = '';
};
// Events

submit.addEventListener('click', (e) => {
  e.preventDefault();
  emailValidation();
});

dismissBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dismissThxMsg();
});
