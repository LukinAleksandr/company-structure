import { useLayoutEffect, useState } from "react";
import { getListItemElements } from "../utils/getListItemElements";
import { type CenteringPadding, getMiddleItemCenteringPadding } from "../utils/getMiddleItemCenteringPadding";

// Карточки в ряду разной ширины, поэтому средняя оказывается не под родителем — сдвигаем ряд отступами
export function useMiddleItemCentering(listElement: HTMLElement | null): CenteringPadding | null {
  const [padding, setPadding] = useState<CenteringPadding | null>(null);

  useLayoutEffect(() => {
    if (!listElement) return;

    // Ширина любой карточки меняет ширину ряда, поэтому достаточно следить за самим рядом
    const resizeObserver = new ResizeObserver(() => {
      setPadding(getMiddleItemCenteringPadding(getListItemElements(listElement)));
    });
    resizeObserver.observe(listElement);

    return () => resizeObserver.disconnect();
  }, [listElement]);

  return padding;
}
