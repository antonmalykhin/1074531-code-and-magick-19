'use strict';

/** @constant
  * @type {number}
  */
var CLOUD_WIDTH = 410;

/** @constant
  * @type {number}
  */
var CLOUD_HEIGHT = 270;

/** @constant
  * @type {number}
  */
var CLOUD_POSITION_X = 150;

/** @constant
  * @type {number}
  */
var CLOUD_POSITION_Y = 10;

/** @constant
  * @type {number}
  */
var GAP = 50;

/** @constant
  * @type {number}
  */
var GRAPH_WIDTH = 40;

/** @constant
  * @type {number}
  */
var GRAPH_MAX_HEIGHT = 150;

/** @constant
  * @type {string}
  */
var TEXT_COLOR = '#000';


/** Отрисовывает прямоугольное поле для вывода статистики
 *
 * @param {*} ctx - Контекст рендеринга canvas
 * @param {number} x - Положение окна по вертикальной оси
 * @param {number} y -  Положение окна по горизонтальной оси
 * @param {string} color - Цвет
 */

var renderRectCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = '#000';
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};


/** Отрисовывает график результата игрока
 *
 * @param {*} ctx - Контекст рендеринга canvas
 * @param {number} graphIndex - порядковый номер графика
 * @param {string} gamerName - Имя игрока
 * @param {number} gamerTime - Результат затраченного времени
 * @param {number} graphHeight - высота графика
 * @param {string} graphColor - цвет графика
 */

var renderGraph = function (ctx, graphIndex, gamerName, gamerTime, graphHeight, graphColor) {

  var graphHeightOffset = GRAPH_MAX_HEIGHT - graphHeight;
  var graphPositionX = (CLOUD_POSITION_X + 50) + (GRAPH_WIDTH + GAP) * graphIndex;

  ctx.fillStyle = graphColor;
  ctx.fillRect(graphPositionX, 100 + graphHeightOffset, GRAPH_WIDTH, GRAPH_MAX_HEIGHT - graphHeightOffset);
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(gamerName, graphPositionX, CLOUD_HEIGHT);
  ctx.fillText(String(gamerTime), graphPositionX, 100 + graphHeightOffset - 10);
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


/** Выводит поле с графиками результатов игроков
 *
 * @param {*} -  Контекст рендеринга canvas
 * @param {array} names- Список имен игроков
 * @param {array} times - Список результатов затраченного времени
 */

window.renderStatistics = function (ctx, names, times) {

  renderRectCloud(ctx, CLOUD_POSITION_X + 10, CLOUD_POSITION_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderRectCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, '#fff');

  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили!', 280, 40);
  ctx.fillText('Список результатов:', 265, 60);

  for (var i = 0; i < names.length; i++) {

    var percentage = getPercentage(times);
    var graphsHeight = getGraphHeight(percentage);
    var randomSaturation = Math.round(Math.random() * 100);

    var graphColor = (names[i] === 'Вы') ? '#ff0000' : 'hsl(240, ' + randomSaturation + '% , 50%)';

    renderGraph(ctx, i, names[i], Math.round(times[i]), graphsHeight[i], graphColor);
  }
};
