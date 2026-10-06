import { useRef } from "react";
import { useConnectorAnchors } from "../../hooks/useConnectorAnchors";
import { getConnectorPaths } from "../../utils/getConnectorPaths";
import { ConnectorLayer } from "../ConnectorLayer/ConnectorLayer";

type ConnectorsProps = {
  parentElement: HTMLElement | null;
  // Стрелка рисуется к каждому прямому потомку этого элемента
  childrenListElement: HTMLElement | null;
};

export function Connectors({ parentElement, childrenListElement }: ConnectorsProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const anchors = useConnectorAnchors(layerRef, parentElement, childrenListElement);
  const paths = anchors ? getConnectorPaths(anchors.parentCenterX, anchors.childCentersX) : [];

  return <ConnectorLayer ref={layerRef} paths={paths} />;
}
