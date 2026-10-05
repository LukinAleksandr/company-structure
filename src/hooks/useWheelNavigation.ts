import { type RefObject, useEffect } from "react";
import { WHEEL_ZOOM_SENSITIVITY } from "../constants/viewport";
import { getPointInsideElement } from "../utils/getPointInsideElement";
import { getWheelDeltaInPixels } from "../utils/getWheelDeltaInPixels";
import type { MoveBy, ZoomAtPoint } from "./useViewport";

type WheelNavigationActions = {
  moveBy: MoveBy;
  zoomAtPoint: ZoomAtPoint;
};

export function useWheelNavigation(
  workspaceRef: RefObject<HTMLElement | null>,
  { moveBy, zoomAtPoint }: WheelNavigationActions,
) {
  useEffect(() => {
    const workspaceElement = workspaceRef.current;
    if (!workspaceElement) return;

    // Стрелочная функция после проверки на null — TypeScript помнит, что элемент существует
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const wheelDelta = getWheelDeltaInPixels(event);
      const isPanGesture = event.ctrlKey || event.metaKey;

      if (isPanGesture) {
        moveBy(-wheelDelta.x, -wheelDelta.y);
      } else {
        const zoomFactor = Math.exp(-wheelDelta.y * WHEEL_ZOOM_SENSITIVITY);
        const cursorPoint = getPointInsideElement(event, workspaceElement);
        zoomAtPoint(zoomFactor, cursorPoint);
      }
    };

    // passive: false — иначе браузер не даст вызвать preventDefault
    workspaceElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => workspaceElement.removeEventListener("wheel", handleWheel);
  }, [workspaceRef, moveBy, zoomAtPoint]);
}
