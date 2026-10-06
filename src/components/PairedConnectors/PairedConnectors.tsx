import { useRef } from "react";
import { usePairedConnections } from "../../hooks/usePairedConnections";
import { getPairedConnectorPaths } from "../../utils/getPairedConnectorPaths";
import { ConnectorLayer } from "../ConnectorLayer/ConnectorLayer";

type PairedConnectorsProps = {
  parentsListElement: HTMLElement | null;
  // Индексы элементов верхнего списка, от которых идут стрелки; i-я стрелка ведёт к i-му элементу нижнего списка
  parentIndexes: number[];
  childrenListElement: HTMLElement | null;
};

export function PairedConnectors({ parentsListElement, parentIndexes, childrenListElement }: PairedConnectorsProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const connections = usePairedConnections(layerRef, parentsListElement, parentIndexes, childrenListElement);

  return <ConnectorLayer ref={layerRef} paths={getPairedConnectorPaths(connections)} />;
}
