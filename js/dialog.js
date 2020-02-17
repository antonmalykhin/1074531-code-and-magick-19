'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var closeSetupButton = userSetup.querySelector('.setup-close');
  var openSetupButton = document.querySelector('.setup-open');
  var openSetupIcon = openSetupButton.querySelector('.setup-open-icon');
  var userNameInput = userSetup.querySelector('.setup-user-name');
  /**
 * Функция нажатия на кнопку Escape
 * @param {*} evt - event
 */
  var onEscapeKeyPress = function (evt) {
    if (evt.key === window.utils.ESC_KEY && !userSetup.classList.contains('hidden')) {
      userSetup.classList.add('hidden');
    }
  };

  /**
   * Функция открытия окна настроек персонажа
   */
  var openSetup = function () {
    if (userSetup.classList.contains('hidden')) {
      userSetup.classList.remove('hidden');
      document.addEventListener('keydown', onEscapeKeyPress);
    }
  };

  /**
   * Функция закрытия окна настроек персонажа
   */
  var closeSetup = function () {
    if (!userSetup.classList.contains('hidden')) {
      userSetup.classList.add('hidden');
      document.removeEventListener('keydown', onEscapeKeyPress);
    }
  };

  /**
   * Функция нажатия на кнопку Enter при фокусе на иконке пользователя
   * @param {*} evt - event
   */
  var onIconEnterPress = function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      openSetup();
    }
  };

  /**
   * Функция нажатия на кнопку Enter при фокусе на иконке закрытия
   * @param {*} evt - event
   */
  var onCloseEnterPress = function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      closeSetup();
    }
  };

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onEscapeKeyPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onEscapeKeyPress);
  });

  openSetupButton.addEventListener('click', openSetup);
  closeSetupButton.addEventListener('click', closeSetup);
  openSetupIcon.addEventListener('keydown', onIconEnterPress);
  closeSetupButton.addEventListener('keydown', onCloseEnterPress);
})();
