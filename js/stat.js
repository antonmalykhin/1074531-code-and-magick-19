'use strict';

/**
 *  Константы
 */
var Cloud = {
  /**
   * Ширина окна статистики
   * @constant
   * @type {number}
   */
  CLOUD_WIDTH: 410,

  /**
   * Высота окна статистики
   * @constant
   * @type {number}
   */
  CLOUD_HEIGHT: 270,

  /**
   * Положение окна статистики по горизонтали
   * @constant
   * @type {number}
   */
  CLOUD_POSITION_X: 150,

  /**
   * Положение окна статистики по вертикали
   * @constant
   * @type {number}
   */
  CLOUD_POSITION_Y: 10,

  /**
   * Цвет окна статистики
   * @constant
   * @param {string}
   */
  CLOUD_COLOR: '#ffffff',

  /**
   * Цвет тени окна статистики
   * @constant
   * @type {string}
   */
  CLOUD_SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)',

  /**
 * Положение текста заголовка окна статистики по горизонтали
 * @constant
 * @type {number}
 */
  CLOUD_TITLE_POSITION_X: 280,

  /**
   * Положение текста заголовка окна статистики по вертикали
   * @constant
   * @type {number}
   */
  CLOUD_TITLE_POSITION_Y: 40,

  /**
   * Расстояние между строк заголовка окна статистики
   * @constant
   * @type {number}
   */
  CLOUD_TITLE_VERTICAL_GAP: 20
};

var Graph = {
  /**
   * Расстояние между графиками
   * @constant
   * @type {number}
   */
  GAP: 50,

  /**
   * Ширина графика
   * @constant
   * @type {number}
   */
  GRAPH_WIDTH: 40,

  /**
   * Максимальная высота графика
   * @constant
   * @type {number}
   */
  GRAPH_MAX_HEIGHT: 150
};

/**
 * Цвет текста
 * @constant
 * @type {string}
 */
var TEXT_COLOR = '#000000';

/**
 * Отрисовывает прямоугольное поле для вывода статистики
 *
 * @param {*} ctx - Контекст рендеринга canvas
 * @param {number} x - Положение окна по вертикальной оси
 * @param {number} y -  Положение окна по горизонтальной оси
 * @param {string} color - Цвет
 */

var renderCloud = function (ctx, x, y, shadowOffsetX, shadowOffsetY, color) {
  ctx.fillStyle = Cloud.CLOUD_SHADOW_COLOR;
  ctx.fillRect(x + shadowOffsetX, y + shadowOffsetX, Cloud.CLOUD_WIDTH, Cloud.CLOUD_HEIGHT);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.CLOUD_WIDTH, Cloud.CLOUD_HEIGHT);
  ctx.strokeStyle = '#000';
  ctx.strokeRect(x, y, Cloud.CLOUD_WIDTH, Cloud.CLOUD_HEIGHT);
};

/**
 * Отрисовывает график результата игрока
 *
 * @param {*} ctx - Контекст рендеринга canvas
 * @param {number} graphIndex - порядковый номер графика
 * @param {string} gamerName - Имя игрока
 * @param {number} gamerTime - Результат затраченного времени
 * @param {number} graphHeight - высота графика
 * @param {string} graphColor - цвет графика
 */

var renderGraph = function (ctx, graphIndex, gamerName, gamerTime, graphHeight, graphColor) {

  var graphHeightOffset = Graph.GRAPH_MAX_HEIGHT - graphHeight;
  var graphPositionX = (Cloud.CLOUD_POSITION_X + 50) + (Graph.GRAPH_WIDTH + Graph.GAP) * graphIndex;

  ctx.fillStyle = graphColor;
  ctx.fillRect(graphPositionX, 100 + graphHeightOffset, Graph.GRAPH_WIDTH, Graph.GRAPH_MAX_HEIGHT - graphHeightOffset);
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(gamerName, graphPositionX, Cloud.CLOUD_HEIGHT);
  ctx.fillText(String(gamerTime), graphPositionX, 100 + graphHeightOffset - 10);
};

/**
 * Находим высоту графика каждого результата
 * @param {array} times - массив результатов времени
 * @return {array} - массив высот графиков
 * @example
 *
 * getPercentage([2500, 1000, 500, 250]);
 * // => [150, 60, 30, 15]
 */

var getGraphHeight = function (times) {
  var maxTime = Math.max.apply(null, times);
  var graphsHeighth = [];

  times.forEach(function (time) {
    var percent = Math.round(100 * time / maxTime);
    graphsHeighth.push(150 * (percent / 100));
  });

  return graphsHeighth;
};

/**
 * Выводит окно с графиками результатов игроков
 *
 * @param {*} -  Контекст рендеринга canvas
 * @param {array} names- Список имен игроков
 * @param {array} times - Список результатов затраченного времени
 */

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, Cloud.CLOUD_POSITION_X, Cloud.CLOUD_POSITION_Y, 10, 10, Cloud.CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили!', Cloud.CLOUD_TITLE_POSITION_X, Cloud.CLOUD_TITLE_POSITION_Y);
  ctx.fillText('Список результатов:', Cloud.CLOUD_TITLE_POSITION_X - 15, Cloud.CLOUD_TITLE_POSITION_Y + Cloud.CLOUD_TITLE_VERTICAL_GAP);

  names.forEach(function (name, i) {
    var graphsHeight = getGraphHeight(times);
    var randomSaturation = Math.round(Math.random() * 100);
    var graphColor = (name === 'Вы') ? '#ff0000' : 'hsl(240, ' + randomSaturation + '% , 50%)';
    renderGraph(ctx, i, name, Math.round(times[i]), graphsHeight[i], graphColor);
  });
};
