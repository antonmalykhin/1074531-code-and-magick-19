'use strict';

(function () {
  /**
 * Кнопка Escape
 * @constant
 * @type {string}
 */
  var ESC_KEY = 'Escape';

  /**
   * Кнопка Enter
   * @constant
   * @type {string}
   */
  var ENTER_KEY = 'Enter';

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
  window.utils = {
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    DefaultPosition: DefaultPosition,
    getRandomValue: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
