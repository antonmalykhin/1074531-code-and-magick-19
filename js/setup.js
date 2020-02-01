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
 * @param {array} personage - Объект свойств персонажа
 * @param {number} numOfPersons - Количество генерируемых персонажей
 * @return {array} - Списка рандомных свойств персонажей
 */
var getPersonages = function (personage, numOfPersons) {
  var personages = [];

  for (var i = 0; i < numOfPersons; i++) {
    personages.push({
      firstName: personage.FIRST_NAMES[Math.round(Math.random() * personage.FIRST_NAMES.length)],
      lastName: personage.LAST_NAMES[Math.round(Math.random() * personage.LAST_NAMES.length)],
      coastColor: personage.COAST_COLORS[Math.round(Math.random() * personage.COAST_COLORS.length)],
      eyesColor: personage.EYES_COLORS[Math.round(Math.random() * personage.EYES_COLORS.length)]
    });
  }
  return personages;
};

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var wizards = getPersonages(PersonageData, 4);

/**
 * Функция генерации разметки окна персонажей
 * @param {array} personages - Список свойств персонажей
 */
var generatePersonageMarkup = function (personages) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var fragment = document.createDocumentFragment();

  personages.forEach(function (personage) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardName = wizardElement.querySelector('.setup-similar-label');
    var wizardCoat = wizardElement.querySelector('.wizard-coat');
    var wizardEyes = wizardElement.querySelector('.wizard-eyes');

    wizardName.innerText = personage.firstName + ' ' + personage.lastName;
    wizardCoat.setAttribute('style', 'fill: ' + personage.coastColor + ';');
    wizardEyes.setAttribute('style', 'fill: ' + personage.eyesColor + ';');

    fragment.appendChild(wizardElement);
  });

  similarListElement.appendChild(fragment);
};

generatePersonageMarkup(wizards);

