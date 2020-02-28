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

  var fireballColor = window.personageData.DefaultPersonage.FIREBALL_COLOR;
  var eyesColor = window.personageData.DefaultPersonage.EYES_COLOR;
  var coatColor = window.personageData.DefaultPersonage.COAT_COLOR;

  wizardArea.addEventListener('click', function (evt) {
    switch (evt.target.classList.value) {
      case 'setup-fireball':
        fireballColor = window.utils.getRandomValue(window.personageData.FIREBALL_COLORS);
        wizardFireballHandler.style = 'background-color: ' + fireballColor;
        fireballInput.value = fireballColor;
        break;
      case 'wizard-eyes':
        eyesColor = window.utils.getRandomValue(window.personageData.EYES_COLORS);
        wizardEyesHandler.style = 'fill: ' + eyesColor;
        eyesInput.value = eyesColor;
        break;
      case 'wizard-coat':
        coatColor = window.utils.getRandomValue(window.personageData.COAT_COLORS);
        wizardCoatHandler.style = 'fill: ' + coatColor;
        coatInput.value = coatColor;
        window.setup.changeWizards(coatColor);
        break;
    }
  });

  window.personageCustomization = {
    fireballColor: fireballColor,
    eyesColor: eyesColor,
    coatColor: coatColor
  };

})();
