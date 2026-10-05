import type { Point } from "../types/geometry";

// Firefox иногда присылает прокрутку в строках, а не в пикселях
const PIXELS_PER_LINE = 16;

export function getWheelDeltaInPixels(event: WheelEvent): Point {
  const multiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? PIXELS_PER_LINE : 1;

  return {
    x: event.deltaX * multiplier,
    y: event.deltaY * multiplier,
  };
}
