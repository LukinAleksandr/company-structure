import { useRef } from "react";
import { DEFAULT_CONNECTOR_COLOR } from "../../constants/colors";
import { useConnectorAnchors } from "../../hooks/useConnectorAnchors";
import { getConnectorPaths } from "../../utils/getConnectorPaths";
import { ConnectorLayer } from "../ConnectorLayer/ConnectorLayer";

type ConnectorsProps = {
  parentElement: HTMLElement | null;
  // Стрелка рисуется к каждому прямому потомку этого элемента
  childrenListElement: HTMLElement | null;
  // Цвета стрелок по порядку детей; null — цвет по умолчанию
  childColors: (string | null)[];
};

export function Connectors({ parentElement, childrenListElement, childColors }: ConnectorsProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const anchors = useConnectorAnchors(layerRef, parentElement, childrenListElement);
  const paths = anchors ? getConnectorPaths(anchors.parentCenterX, anchors.childCentersX) : [];

  const lines = paths.map((path, index) => ({ path, color: childColors[index] ?? DEFAULT_CONNECTOR_COLOR }));

  return <ConnectorLayer ref={layerRef} lines={lines} />;
}
