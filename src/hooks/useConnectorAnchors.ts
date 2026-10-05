import { type RefObject, useLayoutEffect, useState } from "react";
import { getOffsetCenterX } from "../utils/getOffsetCenterX";

export type ConnectorAnchors = {
  parentCenterX: number;
  childCentersX: number[];
};

// Центры родителя и детей по горизонтали. Пересчитываются при изменении их размеров
export function useConnectorAnchors(
  parentRef: RefObject<HTMLElement | null>,
  childrenListRef: RefObject<HTMLElement | null>,
): ConnectorAnchors | null {
  const [anchors, setAnchors] = useState<ConnectorAnchors | null>(null);

  useLayoutEffect(() => {
    const parentElement = parentRef.current;
    const childrenListElement = childrenListRef.current;
    if (!parentElement || !childrenListElement) return;

    const measure = () => {
      const childElements = Array.from(childrenListElement.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement,
      );

      setAnchors({
        parentCenterX: getOffsetCenterX(parentElement),
        childCentersX: childElements.map(getOffsetCenterX),
      });
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(parentElement);
    resizeObserver.observe(childrenListElement);

    return () => resizeObserver.disconnect();
  }, [parentRef, childrenListRef]);

  return anchors;
}
