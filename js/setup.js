'use strict';
var PersonageData = {
  FIRST_NAMES: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],

  LAST_NAMES: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],

  COAST_COLORS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],

  EYES_COLORS: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};


var getPersonages = function (firstNames, lastNames, coastColors, eyesColors) {
  var personages = [];

  for (var i = 0; i < 4; i++) {
    var personage = {};
    personage.firstName = firstNames[Math.round(Math.random() * firstNames.length)];
    personage.lastName = lastNames[Math.round(Math.random() * lastNames.length)];
    personage.coastColor = coastColors[Math.round(Math.random() * coastColors.length)];
    personage.eyesColor = eyesColors[Math.round(Math.random() * eyesColors.length)];

    personages.push(personage);
  }
  return personages;
};

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = getPersonages(PersonageData.FIRST_NAMES, PersonageData.LAST_NAMES, PersonageData.COAST_COLORS, PersonageData.EYES_COLORS);

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardElement.querySelector('.setup-similar-label');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');


  wizardName.innerText = wizards[i].firstName + ' ' + wizards[i].lastName;
  wizardCoat.setAttribute('style', 'fill: ' + wizards[i].coastColor + ';');
  wizardEyes.setAttribute('style', 'fill: ' + wizards[i].eyesColor + ';');

  similarListElement.appendChild(wizardElement);
}
