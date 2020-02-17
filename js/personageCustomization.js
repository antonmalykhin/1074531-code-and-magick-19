'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var wizardArea = userSetup.querySelector('.setup-player');
  var wizardCoatHandler = userSetup.querySelector('.wizard-coat');
  var wizardEyesHandler = userSetup.querySelector('.wizard-eyes');
  var wizardFireballHandler = userSetup.querySelector('.setup-fireball-wrap');
  var coatInput = userSetup.querySelector('input[name=coat-color]');
  var eyesInput = userSetup.querySelector('input[name=eyes-color]');
  var fireballInput = userSetup.querySelector('input[name=fireball-color]');

  wizardArea.addEventListener('click', function (evt) {
    switch (evt.target.classList.value) {
      case 'setup-fireball':
        var firebalColor = window.utils.getRandomValue(window.personageData.FIREBALL_COLORS);
        wizardFireballHandler.style = 'background-color: ' + firebalColor;
        fireballInput.value = firebalColor;
        break;
      case 'wizard-eyes':
        var eyesColor = window.utils.getRandomValue(window.personageData.EYES_COLORS);
        wizardEyesHandler.style = 'fill: ' + eyesColor;
        eyesInput.value = eyesColor;
        break;
      case 'wizard-coat':
        var coatColor = window.utils.getRandomValue(window.personageData.COAT_COLORS);
        wizardCoatHandler.style = 'fill: ' + coatColor;
        coatInput = coatColor;
        break;
    }
  });
})();
