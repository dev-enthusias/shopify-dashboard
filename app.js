'use strict';

// Close select plan
const closeTrialBtn = document.querySelector('.trial__cancel');
const trialComponent = document.querySelector('.trial');

closeTrialBtn.addEventListener('click', function () {
  trialComponent.style.display = 'none';
});

// Toggle profile menu
const profileMenuComponent = document.querySelector('.profile--dropdown');
const profileIcon = document.getElementById('profile');
profileIcon.addEventListener('click', function () {
  profileMenuComponent.classList.toggle('hidden');
});

// Toggle notification dropdown
const notificationMenuComponent = document.querySelector(
  '.notifications--dropdown'
);
const notificationIcon = document.getElementById('notification');
notificationIcon.addEventListener('click', function () {
  notificationMenuComponent.classList.toggle('hidden');
});
