import type { Point } from "../types/geometry";

// Переводит координаты события мыши в координаты внутри элемента
export function getPointInsideElement(event: MouseEvent, element: HTMLElement): Point {
  const elementRect = element.getBoundingClientRect();

  return {
    x: event.clientX - elementRect.left,
    y: event.clientY - elementRect.top,
  };
}
