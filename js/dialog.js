'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var form = userSetup.querySelector('.setup-wizard-form');
  var closeSetupButton = form.querySelector('.setup-close');
  var openSetupButton = document.querySelector('.setup-open');
  var openSetupIcon = openSetupButton.querySelector('.setup-open-icon');
  var userNameInput = form.querySelector('.setup-user-name');
  var fileChooser = form.querySelector('.upload input[type=file]');

  /**
   * Функция нажатия на кнопку Escape
   * @param {*} evt - event
   */
  var onEscapeKeyPress = function (evt) {
    if (evt.key === window.utils.Keys.ESC_KEY && !userSetup.classList.contains('hidden')) {
      userSetup.classList.add('hidden');
      resetUserSetupPosition();
    }
  };

  /**
   * Функция открытия окна настроек персонажа
   */
  var openSetup = function () {
    if (userSetup.classList.contains('hidden')) {
      userSetup.classList.remove('hidden');
      document.addEventListener('keydown', onEscapeKeyPress);
      fileChooser.addEventListener('change', window.avatar.onFileChooserChange);
    }
  };

  /**
   * функция сброса положения окна настроек
   */
  var resetUserSetupPosition = function () {
    userSetup.style.top = window.utils.DefaultPosition.TOP;
    userSetup.style.left = window.utils.DefaultPosition.LEFT;
  };

  /**
   * Функция закрытия окна настроек персонажа
   */
  var closeSetup = function () {
    if (!userSetup.classList.contains('hidden')) {
      userSetup.classList.add('hidden');
      document.removeEventListener('keydown', onEscapeKeyPress);
      resetUserSetupPosition();
      fileChooser.removeEventListener('change', window.avatar.onFileChooserChange);
    }
  };

  /**
   * Функция нажатия на кнопку Enter при фокусе на иконке пользователя
   * @param {*} evt - event
   */
  var onIconEnterPress = function (evt) {
    if (evt.key === window.utils.Keys.ENTER_KEY) {
      openSetup();
    }
  };

  /**
   * Функция нажатия на кнопку Enter при фокусе на иконке закрытия
   * @param {*} evt - event
   */
  var onCloseEnterPress = function (evt) {
    if (evt.key === window.utils.Keys.ENTER_KEY) {
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

  userSetup.querySelector('.setup-similar').classList.remove('hidden');

  form.addEventListener('submit', function (evt) {
    var data = new FormData(form);
    window.backend.save(data, closeSetup, window.utils.onErrorLoad);
    evt.preventDefault();
  });

})();
