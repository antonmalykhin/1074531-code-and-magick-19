'use strict';

(function () {

  var Keys = {
    /**
   * Кнопка Escape
   * @constant
   * @type {string}
   */
    ESC_KEY: 'Escape',

    /**
     * Кнопка Enter
     * @constant
     * @type {string}
     */
    ENTER_KEY: 'Enter'
  }


  var DefaultPosition = {
    TOP: '80px',
    LEFT: '50%'
  };

  /**
   *  Функция случайного выбора значения из массива.
   * @param {array} array - список значений
   * @return {*} - случайное значение
   * @example
   *
   * getRandomColor([red, blue, green, white]);
   * // => [green]
   */
  var getRandomValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.utils = {
    Keys: Keys,
    DefaultPosition: DefaultPosition,
    getRandomValue: getRandomValue
  };
})();
