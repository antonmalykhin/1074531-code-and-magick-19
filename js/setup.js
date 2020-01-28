'use strict';

/**
 * Объект характеристик персонажа
 */
var PersonageData = {
  /**
   * Список имен персонажа
   * @constant
   * @type {array}
   */
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
  /**
   * Список фамилий персонажа
   * @constant
   * @type {array}
   */
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
  /**
   * Список цветов одежды персонажа
   * @constant
   * @type {array}
   */
  COAST_COLORS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  /**
   * Список цветов глаз персонажа
   * @constant
   * @type {array}
   */
  EYES_COLORS: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};

/**
 * Функция получения списка рандомных свойств определенного количества персонажей
 * @param {array} firstNames - Список имен персонажа
 * @param {array} lastNames - Список фамилий персонажа
 * @param {array} coastColors - Список цветов одежды персонажа
 * @param {array} eyesColors - Список цветов глаз персонажа
 * @param {number} numOfPersons - Количество генерируемых персонажей
 * @return {array} - Списка рандомных свойств персонажей
 */
var getPersonages = function (firstNames, lastNames, coastColors, eyesColors, numOfPersons) {
  var personages = [];

  for (var i = 0; i < numOfPersons; i++) {
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

var fragment = document.createDocumentFragment();

var wizards = getPersonages(PersonageData.FIRST_NAMES, PersonageData.LAST_NAMES, PersonageData.COAST_COLORS, PersonageData.EYES_COLORS, 4);

wizards.forEach(function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardElement.querySelector('.setup-similar-label');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');

  wizardName.innerText = wizard.firstName + ' ' + wizard.lastName;
  wizardCoat.setAttribute('style', 'fill: ' + wizard.coastColor + ';');
  wizardEyes.setAttribute('style', 'fill: ' + wizard.eyesColor + ';');

  fragment.appendChild(wizardElement);
});

similarListElement.appendChild(fragment);
