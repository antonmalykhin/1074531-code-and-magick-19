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
    getRandomValue: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
