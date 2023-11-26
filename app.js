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

// Toggle setup steps

// on clicking on the drop down open the first step setup

const setupStepsComponent = document.querySelector('.steps');
const dropdown = document.querySelector('.setup__dropdown');
const dropdownImg = document.getElementById('dropdown');
dropdown.addEventListener('click', function () {
  setupStepsComponent.classList.toggle('hidden');

  dropdownImg.src = !setupStepsComponent.classList.contains('hidden')
    ? 'https://crushingit.tech/hackathon-assets/icon-arrow-up.svg'
    : 'https://crushingit.tech/hackathon-assets/icon-arrow-down.svg';
});

// Expand the onboarding step
const allSetupSteps = document.querySelectorAll('.onboarding__step');

// When i click on a link
allSetupSteps.forEach((step, index) => {
  step.addEventListener('click', function (event) {
    console.log(`clicked ${index}`);
    if (
      step.nextElementSibling &&
      step.nextElementSibling.classList.contains('hidden')
    ) {
      step.nextElementSibling.classList.remove('hidden');
      step.closest('.onboarding').classList.add('bg-grey');
    }

    if (
      step.nextElementSibling &&
      !step.nextElementSibling.classList.contains('hidden')
    ) {
      const otherSteps = Array.from(
        document.querySelectorAll('.onboarding__step')
      ).filter(step => step !== event.target);

      otherSteps.forEach(step => {
        step.nextElementSibling &&
          step.nextElementSibling.classList.add('hidden');

        step.closest('.onboarding').classList.remove('bg-grey');
      });

      step.nextElementSibling.classList.remove('hidden');
      step.closest('.onboarding').classList.add('bg-grey');
    }
  });
});

// Updating the onboarding progress
const circleWrappers = document.querySelectorAll('.circle');

let completedSteps = 0;
let progress = 0;

document.querySelector('.completed-steps').textContent = completedSteps;
document.querySelector('.progress-bar').value = progress;
document.querySelector('.progress-bar').textContent = 0;

circleWrappers.forEach(wrapper =>
  wrapper.addEventListener('click', function (e) {
    const img = e.target;

    // Toggle img
    img.src = img.src.includes('dashed-circle')
      ? 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg'
      : 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg';

    if (img.src.includes('checkmark-circle')) {
      ++completedSteps;
      progress = completedSteps * 20;

      document.querySelector('.completed-steps').textContent = completedSteps;
      document.querySelector('.progress-bar').value = progress;

      allSetupSteps.forEach(step => {
        step.nextElementSibling &&
          step.nextElementSibling.classList.add('hidden');

        step.closest('.onboarding').classList.remove('bg-grey');
      });

      allSetupSteps[completedSteps].nextElementSibling.classList.remove(
        'hidden'
      );
      allSetupSteps[completedSteps]
        .closest('.onboarding')
        .classList.add('bg-grey');
    }

    if (img.src.includes('dashed-circle')) {
      --completedSteps;
      progress = completedSteps * 20;

      document.querySelector('.completed-steps').textContent = completedSteps;
      document.querySelector('.progress-bar').value = progress;

      allSetupSteps.forEach(step => {
        step.nextElementSibling &&
          step.nextElementSibling.classList.add('hidden');

        step.closest('.onboarding').classList.remove('bg-grey');
      });

      allSetupSteps[completedSteps].nextElementSibling.classList.remove(
        'hidden'
      );

      allSetupSteps[completedSteps]
        .closest('.onboarding')
        .classList.add('bg-grey');
    }
  })
);

// if it is it is hides the step extension and displays the next one in line and if the next one in line is not checkmarked it goes down the list even further and checks

//if it is circle checkmark then it does nothing to the progress bar and nothing it reduces the progress bar and sticks to displaying the drop of that list and not the next one
