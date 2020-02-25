'use strict';

(function () {
  /**
   * Тип данных ответа сервера
   * @constant
   * @type {string}
   */
  var DATA_TYPE = 'json';

  /**
   * Адрес для загрузки данных с сервера
   * @constant
   * @type {string}
   */
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';

  /**
   * Адрес для отправки данных на сервера
   * @constant
   * @type {string}
   */
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';

  /**
   * Время ожидания ответа от сервера
   * @constant
   * @type {number}
   */
  var TIMEOUT = 10000;


  var StatusCode = {
    /**
     * Код ответа сервера 200
     * @constant
     * @type {number}
     */
    OK: 200
  };

  /**
   * Функция получения данных с сервера
   * @param {*} onLoad - функция колбэк в случае удачного ответа сервера
   * @param {*} onError - функция колбэк в случае ошибки
   */
  var load = function (onLoad, onError) {

    var xhr = new XMLHttpRequest();

    xhr.responseType = DATA_TYPE;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT;

    xhr.open('GET', URL_LOAD);

    xhr.send();

  };


  /**
   * Функция загрузки даннх на сервер
   * @param {*} data - данные
   * @param {*} onLoad - функция колбэк в случае удачного ответа сервера
   * @param {*} onError - функция колбэк в случае ошибки
   */
  var save = function (data, onLoad, onError) {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('POST', URL_SAVE);

    xhr.send(data);

  };

  window.backend = {
    load: load,
    save: save
  };
})();
