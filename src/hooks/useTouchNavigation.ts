import { type RefObject, useEffect } from "react";
import type { Point } from "../types/geometry";
import { getDistance, getMidpoint } from "../utils/geometry";
import { getPointInsideElement } from "../utils/getPointInsideElement";
import type { MoveBy, ZoomAtPoint } from "./useViewport";

type TouchNavigationActions = {
  moveBy: MoveBy;
  zoomAtPoint: ZoomAtPoint;
};

export function useTouchNavigation(
  workspaceRef: RefObject<HTMLElement | null>,
  { moveBy, zoomAtPoint }: TouchNavigationActions,
) {
  useEffect(() => {
    const workspaceElement = workspaceRef.current;
    if (!workspaceElement) return;

    const activeTouches = new Map<number, Point>();

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;

      workspaceElement.setPointerCapture(event.pointerId);
      activeTouches.set(event.pointerId, getPointInsideElement(event, workspaceElement));
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!activeTouches.has(event.pointerId)) return;

      const touchesBeforeMove = [...activeTouches.values()];
      activeTouches.set(event.pointerId, getPointInsideElement(event, workspaceElement));
      const touchesAfterMove = [...activeTouches.values()];

      if (touchesAfterMove.length === 1) {
        moveWithOneFinger(touchesBeforeMove[0], touchesAfterMove[0]);
      } else {
        zoomWithTwoFingers(touchesBeforeMove, touchesAfterMove);
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      activeTouches.delete(event.pointerId);
    };

    function moveWithOneFinger(previousTouch: Point, currentTouch: Point) {
      moveBy(currentTouch.x - previousTouch.x, currentTouch.y - previousTouch.y);
    }

    // Третий и следующие пальцы не учитываем — щипок считаем по первым двум
    function zoomWithTwoFingers(touchesBeforeMove: Point[], touchesAfterMove: Point[]) {
      const previousMidpoint = getMidpoint(touchesBeforeMove[0], touchesBeforeMove[1]);
      const currentMidpoint = getMidpoint(touchesAfterMove[0], touchesAfterMove[1]);

      const previousDistance = getDistance(touchesBeforeMove[0], touchesBeforeMove[1]);
      const currentDistance = getDistance(touchesAfterMove[0], touchesAfterMove[1]);

      // Пальцы сдвинулись вместе — двигаем полотно, разошлись или сошлись — меняем масштаб
      moveBy(currentMidpoint.x - previousMidpoint.x, currentMidpoint.y - previousMidpoint.y);

      if (previousDistance > 0) {
        zoomAtPoint(currentDistance / previousDistance, currentMidpoint);
      }
    }

    workspaceElement.addEventListener("pointerdown", handlePointerDown);
    workspaceElement.addEventListener("pointermove", handlePointerMove);
    workspaceElement.addEventListener("pointerup", handlePointerUp);
    workspaceElement.addEventListener("pointercancel", handlePointerUp);

    return () => {
      workspaceElement.removeEventListener("pointerdown", handlePointerDown);
      workspaceElement.removeEventListener("pointermove", handlePointerMove);
      workspaceElement.removeEventListener("pointerup", handlePointerUp);
      workspaceElement.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [workspaceRef, moveBy, zoomAtPoint]);
}
