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
  };

  var DefaultPosition = {
    /**
     * Положение по умолчанию сверху
     * @constant
     * @type {string}
     */
    TOP: '80px',

    /**
     * Положение по умолчанию слева
     * @constant
     * @type {string}
     */
    LEFT: '50%'
  };

  /**
   * Время таймаута
   * @constant
   * @type {number}
   */
  var DEBOUNCE_INTERVAL = 300;


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

  /**
   * Функция отображения сообщения об ошибке
   * @param {*} errorMessage - сообщение об ошибке
   */
  var onErrorLoad = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var lastTimeout;

  var debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

  window.utils = {
    Keys: Keys,
    DefaultPosition: DefaultPosition,
    getRandomValue: getRandomValue,
    onErrorLoad: onErrorLoad,
    debounce: debounce
  };
})();
