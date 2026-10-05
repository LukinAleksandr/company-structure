import type { Point } from "../types/geometry";

// Положение элемента внутри предка без учёта transform — то есть в координатах полотна, а не экрана
export function getOffsetWithin(element: HTMLElement, ancestor: HTMLElement): Point {
  let x = 0;
  let y = 0;
  let current: Element | null = element;

  while (current instanceof HTMLElement && current !== ancestor) {
    x += current.offsetLeft;
    y += current.offsetTop;
    current = current.offsetParent;
  }

  return { x, y };
}
