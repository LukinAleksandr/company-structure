import type { Point } from "../types/geometry";

export function getElementCenter(element: HTMLElement): Point {
  return {
    x: element.clientWidth / 2,
    y: element.clientHeight / 2,
  };
}
