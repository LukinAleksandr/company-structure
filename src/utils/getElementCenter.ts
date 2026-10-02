import type { Point } from "../types/geometry";

// Центр элемента в его собственных координатах
export function getElementCenter(element: HTMLElement): Point {
  return {
    x: element.clientWidth / 2,
    y: element.clientHeight / 2,
  };
}
