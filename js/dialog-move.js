'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var dialogHandler = userSetup.querySelector('.upload');

  /**
   * Функция перетаскивания окна настроек
   * @param {*} evt - event
   */
  var onUploadHandlerMousedown = function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    /**
     * Функция перемещения окна настроек
     * @param {*} moveEvt - event
     */
    var onMouseMove = function (moveEvt) {
      evt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userSetup.style.top = (userSetup.offsetTop - shift.y) + 'px';
      userSetup.style.left = (userSetup.offsetLeft - shift.x) + 'px';
    };

    /**
     *  Функция удаления обработчиков событий
     * @param {*} upEvt
     */
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  };
  dialogHandler.addEventListener('mousedown', onUploadHandlerMousedown);
})();
