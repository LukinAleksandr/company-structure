import { CONNECTOR_SPACING } from "../constants/connectors";
import { getPairedConnectorPaths } from "./getPairedConnectorPaths";

// Стрелки от одного родителя ко всем детям. Начала стрелок разнесены на CONNECTOR_SPACING вокруг центра родителя
export function getConnectorPaths(parentCenterX: number, childCentersX: number[]): string[] {
  const lastIndex = childCentersX.length - 1;

  const connections = childCentersX.map((childCenterX, index) => ({
    startX: parentCenterX + (index - lastIndex / 2) * CONNECTOR_SPACING,
    endX: childCenterX,
  }));

  return getPairedConnectorPaths(connections);
}
