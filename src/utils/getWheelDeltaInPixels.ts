import type { Point } from "../types/geometry";

// Примерная высота строки, если браузер прислал прокрутку в строках (так делает Firefox)
const PIXELS_PER_LINE = 16;

// Приводит прокрутку колеса к пикселям, чтобы зум и сдвиг были одинаковыми во всех браузерах
export function getWheelDeltaInPixels(event: WheelEvent): Point {
  const multiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? PIXELS_PER_LINE : 1;

  return {
    x: event.deltaX * multiplier,
    y: event.deltaY * multiplier,
  };
}
