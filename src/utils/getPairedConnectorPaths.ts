import {
  ARROWHEAD_SIZE,
  CONNECTOR_BOTTOM_OFFSET,
  CONNECTOR_CORNER_RADIUS,
  CONNECTOR_FIRST_DROP,
  CONNECTOR_SPACING,
  CONNECTOR_TOP_OFFSET,
  LEVEL_GAP,
  STRAIGHT_CONNECTOR_TOLERANCE,
} from "../constants/connectors";
import type { Connection } from "../types/connection";

/**
 * Стрелки из startX в endX. Связи должны идти слева направо и не перекрещиваться по порядку.
 * Чем дальше стрелка от края в сторону поворота, тем ниже она поворачивает — так линии не пересекаются («лесенка»).
 * Если ступенек много, шаг лесенки сжимается, чтобы последний поворот поместился над стрелкой.
 * Координаты — по горизонтали относительно слоя со стрелками, по вертикали от низа родителя (0) до верха детей (LEVEL_GAP).
 * Стрелки не касаются блоков: отступ CONNECTOR_TOP_OFFSET от родителя и CONNECTOR_BOTTOM_OFFSET до ребёнка.
 */
const END_Y = LEVEL_GAP - CONNECTOR_BOTTOM_OFFSET;
const FIRST_TURN_Y = CONNECTOR_TOP_OFFSET + CONNECTOR_FIRST_DROP;
// Ниже поворот уже не успевает скруглиться до наконечника стрелки
const LAST_TURN_Y = END_Y - CONNECTOR_CORNER_RADIUS - ARROWHEAD_SIZE;

export function getPairedConnectorPaths(connections: Connection[]): string[] {
  const turnSteps = getTurnSteps(connections);
  const maxTurnStep = Math.max(0, ...turnSteps);
  const turnSpacing =
    maxTurnStep > 0 ? Math.min(CONNECTOR_SPACING, (LAST_TURN_Y - FIRST_TURN_Y) / maxTurnStep) : CONNECTOR_SPACING;

  return connections.map(({ startX, endX }, index) => {
    const turnY = FIRST_TURN_Y + (turnSteps[index] ?? 0) * turnSpacing;

    return `${getLinePath(startX, endX, turnY)} ${getArrowheadPath(endX)}`;
  });
}

// Стрелки влево и стрелки вправо друг друга не пересекают, поэтому ступеньки считаем для каждого направления отдельно:
// влево — от левого края, вправо — от правого
function getTurnSteps(connections: Connection[]): number[] {
  const turnSteps = connections.map(() => 0);

  let leftwardCount = 0;
  connections.forEach(({ startX, endX }, index) => {
    if (endX < startX) {
      turnSteps[index] = leftwardCount;
      leftwardCount++;
    }
  });

  let rightwardCount = 0;
  for (let index = connections.length - 1; index >= 0; index--) {
    const connection = connections[index];
    if (connection && connection.endX >= connection.startX) {
      turnSteps[index] = rightwardCount;
      rightwardCount++;
    }
  }

  return turnSteps;
}

function getLinePath(startX: number, endX: number, turnY: number): string {
  const horizontalDistance = Math.abs(endX - startX);

  if (horizontalDistance < STRAIGHT_CONNECTOR_TOLERANCE) {
    return `M ${endX} ${CONNECTOR_TOP_OFFSET} V ${END_Y}`;
  }

  const radius = Math.min(CONNECTOR_CORNER_RADIUS, horizontalDistance / 2);
  const direction = endX < startX ? -1 : 1;

  // Скругления — квадратичные кривые с контрольной точкой в углу поворота
  return [
    `M ${startX} ${CONNECTOR_TOP_OFFSET}`,
    `V ${turnY - radius}`,
    `Q ${startX} ${turnY} ${startX + direction * radius} ${turnY}`,
    `H ${endX - direction * radius}`,
    `Q ${endX} ${turnY} ${endX} ${turnY + radius}`,
    `V ${END_Y}`,
  ].join(" ");
}

function getArrowheadPath(tipX: number): string {
  return `M ${tipX - ARROWHEAD_SIZE} ${END_Y - ARROWHEAD_SIZE} L ${tipX} ${END_Y} L ${tipX + ARROWHEAD_SIZE} ${END_Y - ARROWHEAD_SIZE}`;
}
