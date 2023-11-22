'use strict';

// Close select plan
const closeTrialBtn = document.querySelector('.trial__cancel');
const trialComponent = document.querySelector('.trial');

closeTrialBtn.addEventListener('click', function () {
  trialComponent.style.display = 'none';
});


