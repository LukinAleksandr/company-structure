import { type PointerEvent, useRef, useState } from "react";
import type { Point } from "../types/geometry";
import type { MoveBy } from "./useViewport";

const LEFT_MOUSE_BUTTON = 0;
const MIDDLE_MOUSE_BUTTON = 1;

/**
 * Перемещение рабочей области перетаскиванием мыши.
 * Двигаем, если:
 *  - зажата средняя кнопка мыши
 *  - зажат пробел + левая кнопка
 *  - левой кнопкой тянем за пустое место (не за карточку)
 */
export function useDragPanning(moveBy: MoveBy, isSpacePressed: boolean) {
  const [isDragging, setIsDragging] = useState(false);
  const lastPointerPosition = useRef<Point | null>(null);

  function shouldStartDragging(event: PointerEvent<HTMLElement>): boolean {
    const isMiddleButton = event.button === MIDDLE_MOUSE_BUTTON;
    const isLeftButton = event.button === LEFT_MOUSE_BUTTON;
    const isEmptyAreaClicked = event.target === event.currentTarget;

    return isMiddleButton || (isLeftButton && (isSpacePressed || isEmptyAreaClicked));
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if (!shouldStartDragging(event)) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    lastPointerPosition.current = { x: event.clientX, y: event.clientY };
    setIsDragging(true);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!isDragging || !lastPointerPosition.current) return;

    const deltaX = event.clientX - lastPointerPosition.current.x;
    const deltaY = event.clientY - lastPointerPosition.current.y;

    lastPointerPosition.current = { x: event.clientX, y: event.clientY };
    moveBy(deltaX, deltaY);
  }

  function handlePointerUp() {
    lastPointerPosition.current = null;
    setIsDragging(false);
  }

  return {
    isDragging,
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  };
}
