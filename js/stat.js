'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 270;
var GRAPH_X = 150;
var GAP = 50;
var GRAPH_WIDTH = 40;
var GRAPH_MAX_HEIGHT = 150;

/** Отрисовывает прямоугольное поле для вывода статистики
 *
 * @param {*} ctx - Контекст рендеринга canvas
 * @param {integer} x - Положение окна по вертикальной оси
 * @param {integer} y -  Положение окна по горизонтальной оси
 * @param {string} color - Цвет
 */

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

/** Выводит поле с графиками результатов игроков
 *
 * @param {*} -  Контекст рендеринга canvas
 * @param {array} - Список имен игроков
 * @param {array} - Список результатов времени
 */

window.renderStatistics = function (ctx) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 273, 30);
  ctx.fillText('Список результатов:', 260, 50);

  var offset = 100;

  ctx.fillStyle = 'red';
  ctx.fillRect(GRAPH_X, 100 + offset, GRAPH_WIDTH, GRAPH_MAX_HEIGHT - offset);
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', GRAPH_X, CLOUD_HEIGHT);
  ctx.fillText(String(1000), GRAPH_X, 100 + offset - 10);

  ctx.fillStyle = 'blue';
  ctx.fillRect(GRAPH_X + GRAPH_WIDTH + GAP, 100 + offset, GRAPH_WIDTH, GRAPH_MAX_HEIGHT - offset);
  ctx.fillStyle = '#000';
  ctx.fillText('Keks', GRAPH_X + GRAPH_WIDTH + GAP, CLOUD_HEIGHT);
  ctx.fillText(String(2500), GRAPH_X + GRAPH_WIDTH + GAP, 100 + offset - 10);

  // ctx.fillText = ('Иван', 100, 75);
  // ctx.fillRect = (100, 60, 480, 20);

  // ctx.fillText = ('Юлия', 100, 75);
  // ctx.fillRect = (100, 60, 480, 20);
};


/** Находит процентное соотношение результатов времени
  *
  * @param {array} times - массив результатов времени игроков
  * @return {array}
  * @example
  *
  * getPercentage([2500, 1000, 500, 250]);
  * // => [100, 40, 20, 10]
*/

var getPercentage = function (times) {

  var maxTime = Math.max.apply(null, times);
  var percentageArray = [];

  times.forEach(function (item) {
    percentageArray.push(Math.round(100 * item / maxTime));
  });

  return percentageArray;
};


/** Находим высоту графика каждого результата
 *
 * @param {array} percentageArray - массив процентных соотношений результатов
 * @return {array}
 * @example
 *
 * getGraphHeight([100, 40, 20, 10]);
 * // => [150, 60, 30, 15]
 */

var getGraphHeight = function (percentageArray) {

  var graphHeighthArray = [];

  percentageArray.forEach(function (item) {
    graphHeighthArray.push(150 * (item / 100));
  });

  return graphHeighthArray;
};


