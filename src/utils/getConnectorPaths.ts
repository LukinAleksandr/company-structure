import {
  ARROWHEAD_SIZE,
  CONNECTOR_BOTTOM_OFFSET,
  CONNECTOR_CORNER_RADIUS,
  CONNECTOR_FIRST_DROP,
  CONNECTOR_SPACING,
  CONNECTOR_TOP_OFFSET,
  LEVEL_GAP,
} from "../constants/connectors";

/**
 * Стрелки от родителя к детям. Начала стрелок разнесены на CONNECTOR_SPACING вокруг центра родителя.
 * Чем дальше стрелка от центра, тем выше она поворачивает — так линии не пересекаются («лесенка»).
 * Координаты — по горизонтали относительно схемы, по вертикали от низа родителя (0) до верха детей (LEVEL_GAP).
 * Стрелки не касаются блоков: отступ CONNECTOR_TOP_OFFSET от родителя и CONNECTOR_BOTTOM_OFFSET до ребёнка.
 */
const END_Y = LEVEL_GAP - CONNECTOR_BOTTOM_OFFSET;

export function getConnectorPaths(parentCenterX: number, childCentersX: number[]): string[] {
  const lastIndex = childCentersX.length - 1;

  return childCentersX.map((childCenterX, index) => {
    const startX = parentCenterX + (index - lastIndex / 2) * CONNECTOR_SPACING;
    const isGoingLeft = childCenterX < startX;
    const stepsFromEdge = isGoingLeft ? index : lastIndex - index;
    const turnY = CONNECTOR_TOP_OFFSET + CONNECTOR_FIRST_DROP + stepsFromEdge * CONNECTOR_SPACING;

    return `${getLinePath(startX, childCenterX, turnY)} ${getArrowheadPath(childCenterX)}`;
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
