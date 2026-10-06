import { type RefObject, useLayoutEffect, useState } from "react";
import { getListItemElements } from "../utils/getListItemElements";
import { getOffsetCenterX } from "../utils/getOffsetCenterX";

export type ConnectorAnchors = {
  parentCenterX: number;
  childCentersX: number[];
};

/**
 * Центры родителя и детей по горизонтали относительно левого края слоя со стрелками.
 * Все элементы должны иметь общий offsetParent — тогда разница offsetLeft не зависит от зума полотна.
 * Слой со стрелками растянут на ширину контейнера, поэтому следим и за ним: когда контейнер
 * расширяется (например, открылся широкий блок), центрированные блоки сдвигаются, не меняя размеров.
 */
export function useConnectorAnchors(
  connectorsRef: RefObject<HTMLElement | null>,
  parentElement: HTMLElement | null,
  childrenListElement: HTMLElement | null,
): ConnectorAnchors | null {
  const [anchors, setAnchors] = useState<ConnectorAnchors | null>(null);

  useLayoutEffect(() => {
    const connectorsElement = connectorsRef.current;
    if (!connectorsElement || !parentElement || !childrenListElement) return;

    const measure = () => {
      const originX = connectorsElement.offsetLeft;

      setAnchors({
        parentCenterX: getOffsetCenterX(parentElement) - originX,
        childCentersX: getListItemElements(childrenListElement).map(
          (childElement) => getOffsetCenterX(childElement) - originX,
        ),
      });
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(connectorsElement);
    resizeObserver.observe(parentElement);
    resizeObserver.observe(childrenListElement);

    return () => resizeObserver.disconnect();
  }, [connectorsRef, parentElement, childrenListElement]);

  return anchors;
}
