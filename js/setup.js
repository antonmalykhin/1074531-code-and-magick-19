'use strict';

(function () {

  var tempWizards = [];

  /**
   * Функция ранжирования в зависимости от цвета одежды, глаз и фаербола
   * @param {*} wizard - маг
   * @param {string} coat - цвет одежды
   * @param {string} eyes - цвет глаз
   * @return {number}
   */
  var getRank = function (wizard, coat, eyes) {
    var rank = 0;
    if (wizard.colorCoat === coat) {
      rank += 2;
    }
    if (wizard.colorEyes === eyes) {
      rank += 1;
    }
    return rank;
  };

  /**
   * Функция ранжирования по имени
   * @param {string} left - первое имя
   * @param {string} right - второе имя
   * @return {number}
   */
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  /**
   * Функция изменения отрисовки похожих магов
   * @param {string} coat - цвет одежды
   * @param {string} eyes - цвет глаз
   */
  var changeWizards = function (coat, eyes) {
    var sortedWizards = tempWizards.sort(function (left, right) {
      var rankDiff = getRank(right, coat, eyes) - getRank(left, coat, eyes);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    window.render.generatePersonageMarkup(sortedWizards);
  };

  /**
   * Функция успешной загрузки данных похожих персонажей
   * @param {Array} wizards - список похожих персонажей
   */
  var onSuccessLoad = function (wizards) {
    tempWizards = wizards;

    changeWizards(window.personageCustomization.coatColor, window.personageCustomization.eyesColor);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onSuccessLoad, window.utils.onErrorLoad);

  window.setup = {
    changeWizards: changeWizards
  };

})();
