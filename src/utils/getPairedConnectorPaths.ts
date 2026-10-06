import {
  ARROWHEAD_SIZE,
  CONNECTOR_BOTTOM_OFFSET,
  CONNECTOR_CORNER_RADIUS,
  CONNECTOR_FIRST_DROP,
  CONNECTOR_SPACING,
  CONNECTOR_TOP_OFFSET,
  LEVEL_GAP,
} from "../constants/connectors";
import type { Connection } from "../types/connection";

/**
 * Стрелки из startX в endX. Связи должны идти слева направо и не перекрещиваться по порядку.
 * Чем дальше стрелка от края в сторону поворота, тем ниже она поворачивает — так линии не пересекаются («лесенка»).
 * Координаты — по горизонтали относительно слоя со стрелками, по вертикали от низа родителя (0) до верха детей (LEVEL_GAP).
 * Стрелки не касаются блоков: отступ CONNECTOR_TOP_OFFSET от родителя и CONNECTOR_BOTTOM_OFFSET до ребёнка.
 */
const END_Y = LEVEL_GAP - CONNECTOR_BOTTOM_OFFSET;

export function getPairedConnectorPaths(connections: Connection[]): string[] {
  const lastIndex = connections.length - 1;

  return connections.map(({ startX, endX }, index) => {
    const isGoingLeft = endX < startX;
    const stepsFromEdge = isGoingLeft ? index : lastIndex - index;
    const turnY = CONNECTOR_TOP_OFFSET + CONNECTOR_FIRST_DROP + stepsFromEdge * CONNECTOR_SPACING;

    return `${getLinePath(startX, endX, turnY)} ${getArrowheadPath(endX)}`;
  });
}

function getLinePath(startX: number, endX: number, turnY: number): string {
  const horizontalDistance = Math.abs(endX - startX);

  if (horizontalDistance < 1) {
    return `M ${startX} ${CONNECTOR_TOP_OFFSET} V ${END_Y}`;
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
