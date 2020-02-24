'use strict';
/**
 * Количество похожих персонажей для отображения
 * @constant
 * @type {number}
 */
var WIZARDS_QUANTITY = 4;

/**
 * Функция генерации разметки окна персонажа
 * @param {array} personages - Список свойств персонажей
 * @param {array} personagesQuantity - Количество отображаемых персонажей
 */
var generatePersonageMarkup = function (personages, personagesQuantity) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < personagesQuantity; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardName = wizardElement.querySelector('.setup-similar-label');
    var wizardCoat = wizardElement.querySelector('.wizard-coat');
    var wizardEyes = wizardElement.querySelector('.wizard-eyes');

    wizardName.innerText = personages[i].name;
    wizardCoat.setAttribute('style', 'fill: ' + personages[i].colorCoat + ';');
    wizardEyes.setAttribute('style', 'fill: ' + personages[i].colorEyes + ';');

    fragment.appendChild(wizardElement);
  }

  similarListElement.appendChild(fragment);
};

/**
 * Функция успешной загрузки данных похожих персонажей
 * @param {Array} wizards - список похожих персонажей
 */
var onSuccessLoad = function (wizards) {
  generatePersonageMarkup(wizards, WIZARDS_QUANTITY);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

window.backend.load(onSuccessLoad, window.utils.onErrorLoad);

