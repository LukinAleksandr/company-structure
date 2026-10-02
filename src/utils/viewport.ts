import { MAX_SCALE, MIN_SCALE } from "../constants/viewport";
import type { Point } from "../types/geometry";
import type { Viewport } from "../types/viewport";

export function clampScale(scale: number): number {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}

export function moveViewport(viewport: Viewport, deltaX: number, deltaY: number): Viewport {
  return {
    ...viewport,
    offsetX: viewport.offsetX + deltaX,
    offsetY: viewport.offsetY + deltaY,
  };
}

/**
 * Меняет масштаб так, чтобы точка под курсором осталась на месте (как в Figma).
 * screenPoint — координаты точки относительно рабочей области.
 */
export function zoomViewportAtPoint(viewport: Viewport, zoomFactor: number, screenPoint: Point): Viewport {
  const newScale = clampScale(viewport.scale * zoomFactor);

  // Где эта точка находится в координатах самого полотна (без учёта зума и сдвига)
  const canvasX = (screenPoint.x - viewport.offsetX) / viewport.scale;
  const canvasY = (screenPoint.y - viewport.offsetY) / viewport.scale;

  return {
    scale: newScale,
    offsetX: screenPoint.x - canvasX * newScale,
    offsetY: screenPoint.y - canvasY * newScale,
  };
}
