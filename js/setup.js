'use strict';

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
      firstName: window.utils.getRandomValue(personage.FIRST_NAMES),
      lastName: window.utils.getRandomValue(personage.LAST_NAMES),
      coastColor: window.utils.getRandomValue(personage.COAT_COLORS),
      eyesColor: window.utils.getRandomValue(personage.EYES_COLORS)
    });
  }
  return personages;
};

/**
 * Функция генерации разметки окна персонажа
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
    wizardCoat.setAttribute('style', 'fill: ' + personage.coatColor + ';');
    wizardEyes.setAttribute('style', 'fill: ' + personage.eyesColor + ';');

    fragment.appendChild(wizardElement);
  });

  similarListElement.appendChild(fragment);
};

var wizards = getPersonages(window.personageData, 4);

generatePersonageMarkup(wizards);

