import { MAX_SCALE, MIN_SCALE, START_VIEW_SIDE_MARGIN, START_VIEW_TOP_MARGIN } from "../constants/viewport";
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

// Масштаб, при котором элемент помещается по ширине экрана. Крупнее 100% не увеличиваем
export function getScaleToFitWidth(workspaceWidth: number, elementWidth: number): number {
  const availableWidth = workspaceWidth - START_VIEW_SIDE_MARGIN * 2;
  return clampScale(Math.min(1, availableWidth / elementWidth));
}

// Вид, при котором элемент стоит по центру по горизонтали и у верхнего края экрана
export function getViewportShowingAtTopCenter(
  workspaceWidth: number,
  elementCenterX: number,
  elementTop: number,
  scale: number,
): Viewport {
  return {
    scale,
    offsetX: workspaceWidth / 2 - elementCenterX * scale,
    offsetY: START_VIEW_TOP_MARGIN - elementTop * scale,
  };
}
