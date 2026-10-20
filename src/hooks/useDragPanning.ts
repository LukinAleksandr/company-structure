import { type PointerEvent, useRef, useState } from "react";
import type { Point } from "../types/geometry";
import type { MoveBy } from "./useViewport";

const LEFT_MOUSE_BUTTON = 0;
const MIDDLE_MOUSE_BUTTON = 1;
const INTERACTIVE_ELEMENTS_SELECTOR = "button, a, input, select, textarea";

function isInteractiveElement(target: EventTarget): boolean {
  return target instanceof Element && target.closest(INTERACTIVE_ELEMENTS_SELECTOR) !== null;
}

export function useDragPanning(moveBy: MoveBy, isSpacePressed: boolean) {
  const [isDragging, setIsDragging] = useState(false);
  const lastPointerPosition = useRef<Point | null>(null);

  function shouldStartDragging(event: PointerEvent<HTMLElement>): boolean {
    // Касаниями занимается useTouchNavigation
    if (event.pointerType === "touch") return false;

    const isMiddleButton = event.button === MIDDLE_MOUSE_BUTTON;
    const isLeftButton = event.button === LEFT_MOUSE_BUTTON;
    // Тянуть можно с любого места полотна, кроме кнопок и ссылок — иначе по ним не кликнуть
    const isInteractiveElementClicked = isInteractiveElement(event.target);

    return isMiddleButton || (isLeftButton && (isSpacePressed || !isInteractiveElementClicked));
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
