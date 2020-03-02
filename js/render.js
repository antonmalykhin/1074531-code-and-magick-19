'use strict';

(function () {
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
  var generatePersonageMarkup = function (personages) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarElements = similarListElement.querySelectorAll('.setup-similar-item');

    if (similarElements) {
      similarElements.forEach(function (element) {
        similarListElement.removeChild(element);
      });
    }

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
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

  window.render = {
    generatePersonageMarkup: generatePersonageMarkup
  };

})();
