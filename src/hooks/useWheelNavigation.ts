import { type RefObject, useEffect } from "react";
import { WHEEL_ZOOM_SENSITIVITY } from "../constants/viewport";
import { getPointInsideElement } from "../utils/getPointInsideElement";
import type { MoveBy, ZoomAtPoint } from "./useViewport";

type WheelNavigationActions = {
  moveBy: MoveBy;
  zoomAtPoint: ZoomAtPoint;
};

/**
 * Навигация колесом мыши / тачпадом, как в Figma:
 *  - колесо или два пальца — прокрутка рабочей области
 *  - Ctrl/Cmd + колесо или pinch на тачпаде — зум к курсору
 */
export function useWheelNavigation(
  workspaceRef: RefObject<HTMLElement | null>,
  { moveBy, zoomAtPoint }: WheelNavigationActions,
) {
  useEffect(() => {
    const workspaceElement = workspaceRef.current;
    if (!workspaceElement) return;

    // Стрелочная функция после проверки на null — TypeScript помнит, что элемент существует
    const handleWheel = (event: WheelEvent) => {
      // Отключаем стандартный зум/скролл страницы браузером
      event.preventDefault();

      // Pinch на тачпаде браузер присылает как wheel с зажатым ctrlKey
      const isZoomGesture = event.ctrlKey || event.metaKey;

      if (isZoomGesture) {
        const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);
        const cursorPoint = getPointInsideElement(event, workspaceElement);
        zoomAtPoint(zoomFactor, cursorPoint);
      } else {
        moveBy(-event.deltaX, -event.deltaY);
      }
    };

    // passive: false — иначе браузер не даст вызвать preventDefault
    workspaceElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => workspaceElement.removeEventListener("wheel", handleWheel);
  }, [workspaceRef, moveBy, zoomAtPoint]);
}
