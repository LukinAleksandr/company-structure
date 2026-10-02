import type { CSSProperties } from "react";
import { GRID_STEP } from "../constants/viewport";
import type { Viewport } from "../types/viewport";

// Фоновая точечная сетка двигается и масштабируется вместе с полотном
export function getGridBackgroundStyle(viewport: Viewport): CSSProperties {
  const scaledGridStep = GRID_STEP * viewport.scale;

  return {
    backgroundSize: `${scaledGridStep}px ${scaledGridStep}px`,
    backgroundPosition: `${viewport.offsetX}px ${viewport.offsetY}px`,
  };
}
