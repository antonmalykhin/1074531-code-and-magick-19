'use strict';

/**
 * Класс константы
 */
var constants = {
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
  GRAPH_MAX_HEIGHT: 150,

  /**
   * Цвет текста
   * @constant
   * @type {string}
   */
  TEXT_COLOR: '#000000',

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
  CLOUD_TITLE_VERTICAL_GAP: 20,
};

/**
 * Отрисовывает прямоугольное поле для вывода статистики
 *
 * @param {*} ctx - Контекст рендеринга canvas
 * @param {number} x - Положение окна по вертикальной оси
 * @param {number} y -  Положение окна по горизонтальной оси
 * @param {string} color - Цвет
 */

var renderCloud = function (ctx, x, y, shadowOffsetX, shadowOffsetY, color) {
  ctx.fillStyle = constants.CLOUD_SHADOW_COLOR;
  ctx.fillRect(x + shadowOffsetX, y + shadowOffsetX, constants.CLOUD_WIDTH, constants.CLOUD_HEIGHT);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, constants.CLOUD_WIDTH, constants.CLOUD_HEIGHT);
  ctx.strokeStyle = '#000';
  ctx.strokeRect(x, y, constants.CLOUD_WIDTH, constants.CLOUD_HEIGHT);
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

  var graphHeightOffset = constants.GRAPH_MAX_HEIGHT - graphHeight;
  var graphPositionX = (constants.CLOUD_POSITION_X + 50) + (constants.GRAPH_WIDTH + constants.GAP) * graphIndex;

  ctx.fillStyle = graphColor;
  ctx.fillRect(graphPositionX, 100 + graphHeightOffset, constants.GRAPH_WIDTH, constants.GRAPH_MAX_HEIGHT - graphHeightOffset);
  ctx.fillStyle = constants.TEXT_COLOR;
  ctx.fillText(gamerName, graphPositionX, constants.CLOUD_HEIGHT);
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

  renderCloud(ctx, constants.CLOUD_POSITION_X, constants.CLOUD_POSITION_Y, 10, 10, constants.CLOUD_COLOR);

  ctx.fillStyle = constants.TEXT_COLOR;
  ctx.fillText('Ура вы победили!', constants.CLOUD_TITLE_POSITION_X, constants.CLOUD_TITLE_POSITION_Y);
  ctx.fillText('Список результатов:', constants.CLOUD_TITLE_POSITION_X - 15, constants.CLOUD_TITLE_POSITION_Y + constants.CLOUD_TITLE_VERTICAL_GAP);

  for (var i = 0; i < names.length; i++) {

    var graphsHeight = getGraphHeight(times);
    var randomSaturation = Math.round(Math.random() * 100);

    var graphColor = (names[i] === 'Вы') ? '#ff0000' : 'hsl(240, ' + randomSaturation + '% , 50%)';

    renderGraph(ctx, i, names[i], Math.round(times[i]), graphsHeight[i], graphColor);
  }
};
