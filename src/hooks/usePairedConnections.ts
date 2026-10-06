import { type RefObject, useLayoutEffect, useState } from "react";
import type { Connection } from "../types/connection";
import { getListItemElements } from "../utils/getListItemElements";
import { getOffsetCenterX } from "../utils/getOffsetCenterX";

/**
 * Связи «i-й выбранный элемент верхнего списка → i-й элемент нижнего списка».
 * Измеряется так же, как в useConnectorAnchors: относительно слоя со стрелками, с общим offsetParent.
 * parentIndexes должен быть стабильным (useMemo), иначе эффект будет перезапускаться на каждом рендере.
 */
export function usePairedConnections(
  connectorsRef: RefObject<HTMLElement | null>,
  parentsListElement: HTMLElement | null,
  parentIndexes: number[],
  childrenListElement: HTMLElement | null,
): Connection[] {
  const [connections, setConnections] = useState<Connection[]>([]);

  useLayoutEffect(() => {
    const connectorsElement = connectorsRef.current;
    if (!connectorsElement || !parentsListElement || !childrenListElement) return;

    const measure = () => {
      const originX = connectorsElement.offsetLeft;
      const parentElements = getListItemElements(parentsListElement);
      const childElements = getListItemElements(childrenListElement);

      const measuredConnections: Connection[] = [];
      parentIndexes.forEach((parentIndex, index) => {
        const parentElement = parentElements[parentIndex];
        const childElement = childElements[index];
        if (!parentElement || !childElement) return;

        measuredConnections.push({
          startX: getOffsetCenterX(parentElement) - originX,
          endX: getOffsetCenterX(childElement) - originX,
        });
      });

      setConnections(measuredConnections);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(connectorsElement);
    resizeObserver.observe(parentsListElement);
    resizeObserver.observe(childrenListElement);

    return () => resizeObserver.disconnect();
  }, [connectorsRef, parentsListElement, parentIndexes, childrenListElement]);

  return connections;
}
